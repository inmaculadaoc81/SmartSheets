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

AJUSTES ADICIONALES (a petición del cliente, con capturas de pantalla):
- Corregido el icono del botón flotante de WhatsApp: usaba un icono
  genérico de burbuja de chat (idéntico al del widget de chat), no el
  logo real de WhatsApp. Sustituido por el icono correcto en ambos
  botones flotantes.
- Botón del chatbot recoloreado a verde (antes salía rosa, el color
  por defecto del widget de n8n), mismo tamaño que el botón de
  WhatsApp, y acercados ambos para que queden apilados sin hueco.
- El botón "Solicita una asesoría gratuita" del banner de CTA
  apuntaba a un mailto. Cambiado al Cal.com de la familia
  (cal.com/kelatos/30min) — confirmado por el cliente que es el mismo
  enlace compartido que usan el resto de las webs.
- Bajo el H1 se sustituyeron las píldoras de teléfono/WhatsApp por:
  dirección (C. Joaquín María López, 26, Madrid — misma dirección
  compartida de la familia) y horario de atención (Lunes a viernes ·
  09:30–18:00, mismo horario estándar del resto de la familia), y
  debajo de eso tres botones apilados a ancho completo, reutilizando
  las clases .btn/.btn-primary/.btn-outline ya existentes del sitio:
  WhatsApp (verde), "Solicita tu recogida ahora" (mismo enlace de
  Redsys que usan todas las webs de la familia,
  sis.redsys.es/tiendaWeb/item/NDk4OzI%3D) y Atención Telefónica.

AJUSTES ADICIONALES (a petición del cliente, con captura de pantalla):
- BUG REAL — el botón "Solicita tu recogida ahora" (enlace de Redsys)
  no aplicaba a este negocio, no hay servicio de recogida. Sustituido
  por "Agendar una cita", que enlaza a #cita.
- Añadida una sección nueva #cita con el iframe de Cal.com embebido
  de verdad en la página (cal.com/kelatos/30min), no solo un enlace
  externo — antes no existía ninguna forma de reservar cita desde la
  propia web. Añadido también al menú de navegación ("Agendar cita").
- Bajo la dirección: "Aparcamiento público: a pocos metros de C.
  Blasco de Garay, 61". Bajo el horario: "Sábados, domingos y días
  festivos estamos cerrados". Reestructurada la fila de dirección/
  horario del hero a dos líneas (título + subtexto) para que quepan
  bien.
- Quitados el párrafo bajo los botones y los dos botones "Solicita
  una asesoría gratuita"/"Ver cómo funciona" del hero (marcados en la
  captura): quedaban redundantes con los tres botones ya añadidos
  antes (WhatsApp/cita/teléfono).
- Botón flotante del chatbot: recoloreado de verde a verde oscuro
  (--dark, #0c2e20) para distinguirlo del botón de WhatsApp — antes
  ambos eran del mismo verde y costaba diferenciarlos. La separación
  entre ambos botones ahora se calcula en tiempo real a partir de la
  posición real del botón de WhatsApp (antes usaba una distancia fija
  que no coincidía con el tamaño real del widget y dejaba un hueco
  grande).

AJUSTES ADICIONALES (a petición del cliente, con capturas de pantalla):
- BUG REAL — el banner "¿Listo para automatizar tus procesos en
  Excel?" (con su botón "Solicita una asesoría gratuita") quedaba
  redundante con la nueva sección #cita y con el resto de CTAs del
  hero. Eliminado, sin tocar el formulario/mapa que sigue en la misma
  sección #contacto justo debajo.
- Añadida sección de reseñas/opiniones ("Lo que dicen de nosotros en
  Google"), con enlace a la ficha de Google
  (maps.app.goo.gl/1CCekkw4CVzYMvmP6), antes de la fila de logos de
  clientes.
- Añadida una sección de texto SEO para Google antes del footer,
  redactada sin inventar cifras ni datos no proporcionados.
- El mapa del formulario de contacto estaba al lado del formulario
  (dos columnas); cambiado a una sola columna para que quede debajo,
  como se pidió.
- Fila de dirección/horario del hero: reestructurada como una tarjeta
  con fondo blanco y separador vertical entre las dos columnas, para
  que se vean claramente divididas (antes quedaban amontonadas/
  solapadas en pantallas donde no cabían en una sola fila).
- BUG REAL — la casilla de política de privacidad del formulario: el
  checkbox y el texto/enlace estaban como elementos flex separados,
  lo que hacía que el texto se partiera en dos líneas con un hueco
  grande respecto a la casilla. Agrupado el texto en un único bloque
  junto al checkbox, en una sola línea.
- Botón flotante de WhatsApp simplificado (degradado y sombra
  reducidos a un color plano, "más simple" como se pidió) y la
  posición del botón del chatbot ahora se calcula leyendo la posición
  real del botón de WhatsApp en cada momento (no un valor fijo
  adivinado), con varios reintentos tras la carga para cubrir que el
  widget de chat tarde en montarse.

AJUSTES ADICIONALES (a petición del cliente, con capturas de pantalla):
- Hero reordenado: los 3 iconos (Más productividad/Datos más seguros/
  Resultados medibles) ahora van justo debajo del H1, antes de la
  tarjeta de dirección/horario y de los 3 botones de acción.
- Orden de secciones invertido: "Empresas que ya confían en nosotros"
  (logos de clientes) ahora va antes que la sección de reseñas de
  Google (antes era al revés).
- Sección de contacto rediseñada siguiendo la estructura de otra web
  de la familia (ThermomixTech) que el cliente pasó como referencia:
  columna izquierda con kicker + pregunta + texto + teléfono de
  atención, columna derecha con el formulario (sin la tarjeta blanca
  con sombra que tenía antes), y el mapa de Google a ancho completo
  debajo de ambas columnas (antes iba al lado del formulario, en su
  propia columna).

NO TOCADO / PENDIENTE DE DECISIÓN DEL CLIENTE:
- El recuadro de reserva de Cal.com (sección #cita) muestra el
  nombre "Kelatos Reparaciones" y un texto de taller de reparación
  ("trae tu equipo a nuestro taller...") en vez de contenido de
  SmartSheets. Ese texto pertenece a la configuración del propio
  evento en la cuenta de Cal.com (cal.com/kelatos/30min), compartida
  con el resto de webs de la familia — no se puede corregir desde el
  código de esta web. Hay que editarlo directamente en el panel de
  Cal.com, o crear un evento de Cal.com propio para SmartSheets.
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
