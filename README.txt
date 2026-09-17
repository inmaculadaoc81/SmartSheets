SMARTSHEETS | AUTOMATIZACIONES EXCEL — DESPLIEGUE EN VERCEL

El repositorio no tenía ninguna de las secciones/botones/enlaces
funcionales que sí tienen el resto de webs de la familia (formulario,
backend de contacto, WhatsApp real, chatbot, banner de cookies,
schema.org). Se han añadido esos elementos manteniendo el diseño,
los botones y los colores propios de SmartSheets (verde #1f9d55,
tipografías Poppins/Inter, botones .btn .btn-primary/.btn-outline),
sin tocar ni rediseñar las secciones que ya existían (hero, trusted,
soluciones, por qué SmartSheets, cómo funciona, banner de CTA,
footer).

INFORMACIÓN DE CONTACTO (a petición del cliente, no había caja de
información como en otras webs — se colocó centrada debajo del H1):
- Añadida una fila centrada bajo el H1 con teléfono y WhatsApp reales
  como enlaces (tel: y wa.me), con el mismo estilo de píldora que ya
  usa el resto del sitio.
- BUG REAL — el footer mostraba un teléfono placeholder
  (+34 911 234 567) que no era el real. Corregido a +34 910 05 40 12
  y añadida una fila de WhatsApp (+34 638 61 95 88) igual que el
  teléfono.
- El icono de WhatsApp de "Síguenos" en el footer apuntaba a "#".
  Corregido al enlace real de WhatsApp.
- Botón flotante: antes era un icono genérico (rayo) que solo bajaba
  a #contacto. Convertido en un botón de WhatsApp real (icono y
  enlace), conservando la posición y el color verde ya usados.

FORMULARIO DE CONTACTO (no existía, solo un botón mailto):
- Añadido un formulario real (nombre, empresa, email, teléfono,
  mensaje) dentro de la sección #contacto ya existente, sin quitar el
  banner de CTA que ya estaba. Diseñado a juego con el resto del
  sitio (tarjeta blanca redondeada, inputs con foco verde).
- Incluye el iframe de Google Maps que proporcionó el cliente, junto
  al formulario.
- Casilla de aceptación de política de privacidad — enlaza a
  "#politica-privacidad" (ancla local) porque el sitio todavía no
  tiene una página de política de privacidad propia; el footer ya
  tenía ese mismo enlace como placeholder ("#"). Sustituir por la URL
  real en cuanto exista.

BACKEND / REGISTROS PARA VERCEL (no existían):
- Creados package.json (dependencia nodemailer), vercel.json y
  api/contacto.js, con el mismo patrón ya usado en el resto de la
  familia: envía el formulario por SMTP usando variables de entorno
  (SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
  CONTACT_EMAIL), que hay que configurar en Vercel para que el
  formulario funcione.
- robots.txt y sitemap.xml creados, apuntando a
  https://excelautomatizaciones.com/.
- Añadidos canonical, meta robots y etiquetas og:* en el <head> (no
  existía ninguno), usando el dominio real confirmado por el cliente.

BARRA DE COOKIES (no existía):
- Añadida con el mismo patrón que el resto de la familia (Aceptar /
  Rechazar / Política de privacidad), pero adaptada a los colores de
  SmartSheets (verde en vez del teal genérico) y con su propia clave
  de localStorage ("smartsheets_cookie_consent", no la compartida de
  kelatos). El enlace de política de privacidad apunta al mismo
  ancla local que el del formulario, por el mismo motivo.

CHATBOT (no existía):
⚠️ PENDIENTE — se ha añadido la interfaz del widget de chat de n8n
(mismo componente que usa el resto de la familia), pero con
webhookUrl: 'PENDIENTE_URL_WEBHOOK_N8N_SMARTSHEETS' en vez de una URL
real. No se ha reutilizado el webhook compartido de la familia
kelatos porque enrutaría las conversaciones de los clientes de
SmartSheets a un flujo de otro negocio. Hay que sustituir ese valor
por la URL del webhook de n8n propio de SmartSheets (o por el que
corresponda) antes de que el chatbot funcione de verdad; visualmente
el botón ya aparece con el mismo posicionamiento y z-index que en el
resto de la familia.

SCHEMA.ORG (no existía):
- Añadido JSON-LD tipo ProfessionalService con name, url (dominio
  real), telephone, description, address (Madrid, España — no se ha
  inventado una calle concreta, no se proporcionó) y geo (latitud/
  longitud reales, tomadas del iframe de Google Maps que envió el
  cliente).

NO TOCADO / PENDIENTE DE DECISIÓN DEL CLIENTE:
- El email de contacto del sitio (mailto:hola@smartsheets.es, botón
  "Solicita una asesoría gratuita" del banner de CTA) no coincide con
  el dominio real confirmado (excelautomatizaciones.com). No se ha
  tocado porque no se proporcionó un email nuevo — confirmar si sigue
  siendo válido o si hay que cambiarlo.
- Los logos de "Empresas que ya confían en nosotros" (GRUPO A,
  INNOVA, TECNOSUR, DataPlus, LOGISTIK, ALPHA) son placeholders de la
  plantilla original, no clientes reales — no se han tocado en esta
  pasada, pero no deberían publicarse como si fueran clientes
  reales de SmartSheets.
