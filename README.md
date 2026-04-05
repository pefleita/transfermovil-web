# TransferWeb

**Acceso rápido a servicios de banca móvil cubana via USSD**

🔗 **URL**: <a href="https://transfermovilweb.vercel.app" target="_blank">https://transfermovilweb.vercel.app</a>

---

## ¿Qué es?

TransferWeb es una aplicación web que regroupa todos los códigos USSD de los principales bancos cubanos (BPA, BANDEC, BANMET) en una interfaz móvil intuitiva. Evita tener que memorizar los códigos `*444*...#` para acceder a servicios de banca móvil.

---

## Cómo usar

1. Abre la URL en tu navegador móvil
2. Selecciona tu banco (BPA, BANDEC o BANMET)
3. Navega por las categorías:
   - **Sesión**: Autenticarse, desconectar
   - **Consultas**: Saldo, últimas operaciones, límites
   - **Operaciones**: Transferencias, pagos de servicios, recargas
   - **Configuración**: Registro, cambio de PIN
4. Toca cualquier operación para ejecutar automáticamente el código USSD

---

## Pros y Contras (iPhone)

### ✅ Pros

- **Interfaz intuitiva**: No necesitas recordar códigos
- **Acceso rápido**: Un toque para ejecutar cualquier operación
- **Sin instalación**: Funciona directamente en el navegador
- **Diseño responsive**: Se adapta perfectamente a pantallas de iPhone
- **Soporte para notch**: Compatible con iPhone X y modelos posteriores

### ❌ Contras

- **Abre la app de Teléfono**: Al tocar una operación, se abre la app nativa de teléfono para ejecutar el código USSD
- **Funcionamiento limitado**: Requiere que tu línea telefónica tenga activo el servicio de banca móvil USSD
- **No funciona en WiFi**: Necesitas conexión móvil (datos o voz) para ejecutar los códigos
- **iOS no permite ejecución directa**: No es posible ejecutar códigos USSD sin abrir el marcador de teléfono (limitación de Apple)

---

## Compatibilidad

- **iOS**: Safari (iPhone)
- **Android**: Chrome, Firefox, Samsung Internet
- **Navegadores de escritorio**: Solo visualización (no permite ejecutar códigos USSD)

---

## Tecnologías

- React 19
- Vite
- CSS3 (diseño mobile-first, responsive)
- PWA ready