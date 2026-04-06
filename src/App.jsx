import { useState } from 'react';
import {
  KeyIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import './App.css';

// Base de datos de códigos USSD (Se añade BPA con ID '01')
const ussdCodes = {
  BPA: {
    id: '01',
    SESS: [
      { name: 'Autenticarse', code: '*444*40*01#' },
      { name: 'Desconectar', code: '*444*70#' }
    ],
    CONS: [
      { name: 'Consultar Saldo', code: '*444*46#' },
      { name: 'Consultar Servicio', code: '*444*47#' },
      { name: 'Últimas Operaciones', code: '*444*48#' },
      { name: 'Consulta de Límites', code: '*444*62#' },
      { name: 'Consultar Todas las Cuentas', code: '*444*58#' },
      { name: 'Consulta Giro Postal', code: '*444*65#' }
    ],
    OPER: [
      { name: 'Transferencia', code: '*444*45#' },
      { name: 'Pagar Electricidad', code: '*444*41#' },
      { name: 'Teléfono', code: '*444*42#' },
      { name: 'Gas', code: '*444*67#' },
      { name: 'Recarga Saldo Móvil', code: '*444*54#' },
      { name: 'Giro Postal', code: '*444*64#' },
      { name: 'Recarga Nauta', code: '*444*59#' }
    ],
    CONF: [
      { name: 'Registrarse (Tarjeta Monedero)', code: 'REGISTRO' }, 
      { name: 'Eliminar Registro', code: '*444*68*01#' },
      { name: 'Cambio de PIN', code: '*444*69#' },
      { name: 'Cambio de Límites', code: '*444*61#' }
    ]
  },
  BANDEC: {
    id: '02',
    SESS: [
      { name: 'Autenticarse', code: '*444*40*02#' },
      { name: 'Desconectar', code: '*444*70#' }
    ],
    CONS: [
      { name: 'Consultar Saldo', code: '*444*46#' },
      { name: 'Consultar Servicio', code: '*444*47#' },
      { name: 'Consulta ONAT', code: '*444*56*RC05#' },
      { name: 'Últimas Operaciones', code: '*444*48#' },
      { name: 'Consulta de Límites', code: '*444*62#' },
      { name: 'Últimos Pagos Realizados', code: '*444*63#' },
      { name: 'Consultar Todas las Cuentas', code: '*444*58#' },
      { name: 'Consulta Giros', code: '*444*65#' },
      { name: 'Consultar Crédito', code: '*444*55#' }
    ],
    OPER: [
      { name: 'Transferencia', code: '*444*45#' },
      { name: 'Pagar Electricidad', code: '*444*41#' },
      { name: 'Teléfono', code: '*444*42#' },
      { name: 'Pago ONAT', code: '*444*43#' },
      { name: 'Gas', code: '*444*67#' },
      { name: 'Recarga Saldo Móvil', code: '*444*54#' },
      { name: 'Amortizar Crédito', code: '*444*55#' },
      { name: 'Giro Postal', code: '*444*64#' },
      { name: 'Recarga Nauta', code: '*444*59#' }
    ],
    CONF: [
      { name: 'Registrarse', code: 'REGISTRO' }, 
      { name: 'Eliminar Registro', code: '*444*68*02#' },
      { name: 'Cambio de PIN', code: '*444*69#' },
      { name: 'Cambio de Límites', code: '*444*61#' },
      { name: 'Imprimir Tarjeta USD (MLC)', code: '*444*76#' }
    ]
  },
  BANMET: {
    id: '03',
    SESS: [
      { name: 'Autenticarse', code: '*444*40*03#' },
      { name: 'Desconectarse', code: '*444*70#' }
    ],
    CONS: [
      { name: 'Consultar Saldo', code: '*444*46#' },
      { name: 'Consultar Servicio', code: '*444*47#' },
      { name: 'Consulta ONAT', code: '*444*56#' },
      { name: 'Consulta ONAT Anual', code: '*444*57#' },
      { name: 'Últimas Operaciones', code: '*444*48#' },
      { name: 'Consulta de Límites', code: '*444*62#' },
      { name: 'Consultar Todas las Cuentas', code: '*444*58#' },
      { name: 'Consulta Giro Postal', code: '*444*65#' },
      { name: 'Localizar Transferencia', code: '*444*73#' },
      { name: 'Tipo de Cambio', code: '*444*85#' }
    ],
    OPER: [
      { name: 'Transferir Efectivo', code: '*444*45#' },
      { name: 'Pagar Teléfono', code: '*444*42#' },
      { name: 'Electricidad', code: '*444*41#' },
      { name: 'Agua', code: '*444*51#' },
      { name: 'Gas', code: '*444*67#' },
      { name: 'Pago ONAT', code: '*444*43#' },
      { name: 'Recarga Saldo Móvil', code: '*444*54#' },
      { name: 'Giro Postal', code: '*444*64#' },
      { name: 'Recarga nauta', code: '*444*59#' },
      { name: 'Pagar Cuota nauta Hogar', code: '*444*84#' },
      { name: 'Pago Deuda nauta Hogar', code: '*444*86#' },
      { name: 'Recarga Tarjeta Propia', code: '*444*77#' },
      { name: 'Recarga Cuentas Joven Club', code: '*444*93#' }
    ],
    CONF: [
      { name: 'Registrarse', code: 'REGISTRO' }, 
      { name: 'Cambio de Límites', code: '*444*61#' },
      { name: 'Eliminar Registro', code: '*444*68*03#' },
      { name: 'Cambio de PIN', code: '*444*69#' },
      { name: 'Asociar Cuenta', code: '*444*60#' },
      { name: 'Actualizar Cuenta', code: '*444*53#' },
      { name: 'Reimpresión de Tarjetas', code: '*444*74#' },
      { name: 'PIN Digital', code: '*444*79#' },
      { name: 'Apertura Cuenta MLC', code: '*444*76#' }
    ]
  }
};

function App() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [activeTab, setActiveTab] = useState('CONS');
  const [registerInput, setRegisterInput] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const bankColors = {
    BPA: '#006156',
    BANDEC: '#aa3142',
    BANMET: '#6fba3e'
  };

  const tabs = [
    { id: 'SESS', label: 'Sesión', icon: KeyIcon },
    { id: 'CONS', label: 'Consultas', icon: MagnifyingGlassIcon },
    { id: 'OPER', label: 'Operaciones', icon: CurrencyDollarIcon },
    { id: 'CONF', label: 'Configurar', icon: Cog6ToothIcon }
  ];

  // Convierte el # en %23 para que funcione el enlace tel: en iOS
  const generateTelUri = (code) => {
    return `tel:${code.replace(/#/g, '%23')}`;
  };

  const handleRegister = () => {
    const bankId = ussdCodes[selectedBank].id;
    const finalCode = `*444*49*${bankId}${registerInput}#`;
    window.location.href = generateTelUri(finalCode);
    setRegisterInput('');
    setShowRegister(false);
  };

  // Pantalla de selección de banco
  if (!selectedBank) {
    return (
      <div className="app-container">
        <div className="header">
          <img src="/transfermovil-logo.png" alt="Transfermovil Web" width={64} className="transfermovil-logo" />
          <div>
            <h1>TransferWeb</h1>
            <p>Acceso USSD Rápido</p>
          </div>
        </div>
        <div className="bank-selector">
          <h2>Seleccione su Banco</h2>
          <button className="bank-btn bpa" onClick={() => { setSelectedBank('BPA'); setActiveTab('SESS'); }}>
            <span className="bank-logo"><img src="/bpa-logo.png" alt="BPA" /></span> Banco Popular de Ahorro
          </button>
          <button className="bank-btn bandec" onClick={() => { setSelectedBank('BANDEC'); setActiveTab('SESS'); }}>
            <span className="bank-logo"><img src="/bandec-logo.png" alt="BANDEC" /></span> BANDEC
          </button>
          <button className="bank-btn banmet" onClick={() => { setSelectedBank('BANMET'); setActiveTab('SESS'); }}>
            <span className="bank-logo"><img src="banmet-logo.png" alt="BANMET" /></span> Banco Metropolitano
          </button>
        </div>
      </div>
    );
  }

  // Modal de Registro
  if (showRegister) {
    return (
      <div className="app-container modal-view">
        <h2>Registrarse en {selectedBank}</h2>
        <p>Número de Tarjeta (Monedero/Telebanca):</p>
        <input 
          type="text" 
          value={registerInput}
          onChange={(e) => setRegisterInput(e.target.value)}
          placeholder="Ej: 9200..."
          className="input-field"
        />
        <div className="btn-group">
          <button className="action-btn cancel" onClick={() => setShowRegister(false)}>Cancelar</button>
          <button className="action-btn confirm" onClick={handleRegister}>Marcar</button>
        </div>
      </div>
    );
  }

  const currentBankData = ussdCodes[selectedBank];

  return (
    <div className="app-container">
      <div className="header" style={{ backgroundColor: bankColors[selectedBank] }}>
        <button className="back-btn" onClick={() => setSelectedBank(null)}>
          <ArrowLeftIcon className="back-icon" />
        </button>
        <h1>{selectedBank}</h1>
      </div>

      <div className="tabs" style={{ '--bank-color': bankColors[selectedBank] }}>
        {tabs.map(tab => (
          <button 
            key={tab.id} 
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="tab-icon" />
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="menu-list">
        {currentBankData[activeTab].map((item, index) => (
          item.code === 'REGISTRO' ? (
            <button key={index} className="menu-item" onClick={() => setShowRegister(true)}>
              {item.name}
              <ArrowRightIcon className="arrow-icon" />
            </button>
          ) : (
            <a 
              key={index} 
              href={generateTelUri(item.code)} 
              className="menu-item"
            >
              {item.name}
              <PhoneIcon className="arrow-icon" />
            </a>
          )
        ))}
      </div>
    </div>
  );
}

export default App;