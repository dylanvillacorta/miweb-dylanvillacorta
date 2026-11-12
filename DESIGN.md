---
name: "Dylan Villacorta Portfolio"
description: "Cartel noir de dos tintas (tinta y ámbar sobre papel crema)"
colors:
  paper: "#e9dfc7"
  paper-dim: "#ddd2b6"
  paper-on-ink: "#d8cfb8"
  paper-line: "rgba(233, 223, 199, 0.35)"
  ink: "#14110f"
  ink-dim: "#4a4236"
  amber: "#d79b1f"
typography:
  display:
    fontFamily: "\"Anton\", \"Arial Narrow\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(3.5rem, 10.5vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  headline:
    fontFamily: "\"Anton\", \"Arial Narrow\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  title:
    fontFamily: "\"Anton\", \"Arial Narrow\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.02em"
  body:
    fontFamily: "\"Segoe UI\", system-ui, -apple-system, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Segoe UI\", system-ui, -apple-system, \"Helvetica Neue\", Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
components:
  btn-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
  btn-amber-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.amber}"
    rounded: "{rounded.none}"
  btn-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
  btn-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
---

# Design System: Dylan Villacorta Portfolio

## Overview

**Creative North Star: "Cartel noir de dos tintas"**

El portafolio se concibe como un cartel cinematográfico noir impreso a dos tintas sobre pliego de papel crema. Rechaza deliberadamente las plantillas genéricas de tecnología y la cuadrícula convencional de tarjetas idénticas. Aquí, el nombre del desarrollador manda como título de cabecera y una sombra arrojada sobre un muro ámbar aporta toda la carga dramática.

La materialidad visual descansa sobre contrastes nítidos, planos puros y reglas tipográficas. No existen degradados, desenfoques gaussianos ni sombras difusas calculadas por software. Toda la tridimensionalidad y volumen provienen estrictamente de la geometría de los polígonos de sombra proyectada y los cortes angulares de siluetas vectoriales.

**Key Characteristics:**
- Dos tintas nítidas (#14110f y #d79b1f) sobre papel crema (#e9dfc7).
- Tipografía de impacto comprimida (Anton local) combinada con sans del sistema para lectura.
- Volumen y dramatismo exclusivamente mediante formas de sombra y polígonos de bordes rectos.
- Cero degradados, cero desenfoques (blur), cero tarjetas flotantes y cero fuentes externas remotas.
- Movimiento contenido: oscilación analógica sutil de la sombra vectorial con respeto riguroso a `prefers-reduced-motion`.
- Accesibilidad como imperativo central con objetivo estricto WCAG 2.1 AA.

## Colors

Paleta editorial de alto contraste inspirada en la cartelería gráfica de época: dos tintas puras aplicadas sobre soporte de papel claro.

### Primary
- **Ámbar Muro** (#d79b1f): Acento principal y color de iluminación. Se emplea en el fondo del muro del hero, fondos de llamada a la acción en botones primarios (`.btn-amber`), bloque masivo de Habilidades, selección de texto (`::selection`), cursor de edición (`caret-color`) y estados activos/hover (`.nav-links a:hover`, `.project:hover`).
- **Tinta Negra** (#14110f): Tinta profunda principal para texto corrido, títulos, bordes estructurantes de 2px, silueta del personaje, sombra proyectada, fondo del bloque de créditos (`.billing`), sección Sobre mí y pie de página.

### Neutral
- **Papel Crema** (#e9dfc7): Soporte base y fondo del lienzo general (`body`, `.sheet`, `.topbar`), fondo de proyectos y contacto.
- **Papel Tono Secundario** (#ddd2b6): Tono crema complementario (`--paper-2`) para posibles contrastes tonales sutiles en soporte físico.
- **Papel sobre Tinta** (#d8cfb8): Versión clara de lectura optimizada para párrafos y enlaces secundarios descansando sobre fondos de tinta negra (`.about`, `.footer`).
- **Tinta Atenuada** (#4a4236): Tinta con menor densidad tonal para bajadas y epígrafes descriptivos (`.tagline`).
- **Regla de Crédito** (rgba(233, 223, 199, 0.35)): Línea divisoria translúcida de 1px que separa las filas del bloque de créditos en el hero.

### Named Rules
**The Two-Ink Doctrine.** En cualquier superficie, los elementos interactivos o decorativos se limitan estrictamente al juego binario entre la tinta negra (#14110f) y el ámbar (#d79b1f) sobre el papel (#e9dfc7). No se admiten colores terciarios ni desviaciones de tono.

**The No-Gradient Rule.** Queda prohibido el uso de degradados CSS (`linear-gradient`, `radial-gradient`) o filtros de desenfoque (`filter: blur()`, `backdrop-filter`). El contraste y la jerarquía se resuelven exclusivamente mediante superficies sólidas y líneas delimitadoras.

## Typography

**Display Font:** Anton (formato TrueType local alojado en `app/frontend/fonts/Anton-Regular.ttf`, licencia OFL) con alternativa de sistema `"Arial Narrow", "Segoe UI", sans-serif`.
**Body Font:** Pila nativa del sistema `"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif`.
**Label/Mono Font:** No se emplean fuentes monoespaciadas separadas; los identificadores técnicos y etiquetas emplean la pila de sistema en negrita y mayúsculas sostenidas con tracking amplio.

**Character:** La condensación rotunda y gráfica de Anton evoca los tipos móviles y la rotulación de cartelería clásica, equilibrada por la legibilidad limpia, sobria y técnica de la sans del sistema.

### Hierarchy
- **Display** (peso 400, `clamp(3.5rem, 10.5vw, 8rem)`, interlineado 0.95, tracking 0.005em): Título principal del cartel ("DYLAN VILLACORTA") en el hero. Siempre en mayúsculas sostenidas.
- **Headline** (peso 400, `clamp(2.5rem, 6vw, 4.5rem)`, interlineado 1, tracking 0.005em): Títulos de sección H2 (`.h2`) y palabras masivas de habilidades (`clamp(2.6rem, 8vw, 6rem)`). Siempre en mayúsculas sostenidas.
- **Title** (peso 400, `clamp(1.7rem, 3.4vw, 2.4rem)`, interlineado 1.05, tracking 0.02em): Nombres de proyectos en el listado y líneas de crédito (`1.35rem`). Mayúsculas sostenidas.
- **Body** (peso 400, `1.05rem` a `1.1rem`, interlineado 1.6 a 1.7): Texto corrido en Sobre mí y descripciones de proyectos. Línea máxima contenida entre 60ch y 62ch para óptima legibilidad.
- **Label** (peso 700, `0.8rem` a `0.85rem`, tracking 0.08em a 0.14em): Rol ("DESARROLLADOR DE SOFTWARE · BACKEND"), enlaces de navegación, etiquetas de tecnologías (`.project-stack`) y botones. Siempre en mayúsculas sostenidas.

### Named Rules
**The Local-Type Rule.** No se cargan fuentes remotas (prohibido Google Fonts o Typekit). La fuente de titulación se sirve estrictamente desde el servidor en formato local TTF precargado (`<link rel="preload">`) y el resto utiliza la pila del sistema del usuario.

**The All-Caps Heading Rule.** Todo encabezado, título de proyecto, elemento de navegación y etiqueta funcional se renderiza en mayúsculas sostenidas con compensación de espaciado (`letter-spacing`).

## Layout

El sistema espacial adopta la estructura de pliego o plana completa de cartel:

- **Contenedor Principal:** Ancho máximo de 1180px (`.wrap`) centrado con padding horizontal de 24px en escritorio.
- **Rejilla del Hero (`.sheet`):** Pliego de altura completa (mínimo `100svh`) dividido en dos columnas asimétricas (`7fr` para el bloque tipográfico de cabecera y `5fr` para el muro ámbar con la escena vectorial). Fila inferior reservada para el bloque de créditos.
- **Ritmo Vertical:** Secciones con espaciado generoso de 96px (`padding: 96px 0`), reduciéndose a 72px en dispositivos móviles.
- **Barra Superior (`.topbar`):** Fijada en la parte superior con altura de 56px (`--topbar`), borde inferior de tinta de 2px y padding compensatorio `scroll-padding-top: calc(var(--topbar) + 16px)`.
- **Adaptación Responsiva:** A 900px o menos, la rejilla del hero colapsa a una sola columna vertical apilando título, escena de muro (con altura contenida en `28svh`) y bloque de créditos en una columna única. A 560px se ajustan los espaciados y tamaños de enlaces.

## Elevation & Depth

No se utiliza elevación por capas flotantes ni sombras de caja CSS (`box-shadow` es inexistente en todo el sitio). La profundidad es completamente planográfica y gráfica:

- **Profundidad Gráfica:** La tercera dimensión se transmite mediante la proyección angular de sombras vectoriales duras sobre fondos planos (el personaje proyectando su sombra distorsionada sobre el muro ámbar).
- **Planitud por Defecto:** Todas las superficies descansan en el mismo plano visual físico, delimitadas por líneas sólidas de tinta de 2px (`border: 2px solid var(--ink)`).
- **Indicadores de Estado:** La interacción no levanta el elemento sobre el eje Z; en su lugar, invierte los colores de tinta y ámbar o revela líneas sólidas.

### Named Rules
**The Zero-Box-Shadow Rule.** Ningún componente ni superficie puede declarar `box-shadow`. El volumen se dibuja en el arte vectorial o no existe.

## Shapes

- **Esquinas y Radios:** Ángulos rectos absolutos (`border-radius: 0` o no declarado). No existen bordes redondeados en botones, contenedores, enlaces ni campos.
- **Bordes y Filetes:** Filetes nítidos de 2px de tinta negra (#14110f) para estructurar secciones, dividir el muro, separar proyectos y enmarcar botones.
- **Polígonos de Bordes Rectos:** Toda ilustración vectorial (la figura humana en fedora y abrigo, su sombra alargada y el motivo angular de contacto) está compuesta exclusivamente por polígonos cerrados de vértices rectos (`<polygon>`), sin curvas Bézier decorativas.

## Components

### Topbar & Marca DV
- **Estructura:** Barra fija de 56px con fondo papel crema y borde inferior de 2px tinta.
- **Marca:** Logotipo vectorial "DV" técnico embebido en SVG (36x36px) con área accesible mínima de 44x44px.
- **Navegación:** Enlaces en mayúsculas (0.8rem, tracking 0.08em). En hover se iluminan con fondo ámbar (#d79b1f).

### Hoja del Hero & Escena SVG
- **Cabecera:** Composición asimétrica con el nombre "DYLAN VILLACORTA" en Anton gigante y bajada tipográfica.
- **Muro y Escena:** Lienzo ámbar (#d79b1f) delimitado por filete de tinta. Contiene la figura en abrigo y fedora y su sombra proyectada cuadruplicada (`scale(1.8, 2.7) skewX(-29deg)`).
- **Movimiento:** Animación continua de vaivén de 11s (`@keyframes swing`) pausada inmediatamente bajo consulta de accesibilidad `@media (prefers-reduced-motion: reduce)`.

### Bloque de Créditos (`.billing`)
- **Estructura:** Banda sólida de tinta negra (#14110f) ubicada al pie del primer viewport, con texto en papel crema (#e9dfc7).
- **Lista de Créditos:** Cuadrícula de 2 columnas donde cada proyecto figura como crédito cinematográfico delimitado por un filete superior de 1px translúcido (`rgba(233, 223, 199, 0.35)`). Al hover, el nombre del proyecto vira a ámbar.
- **Acción:** Botón primario ámbar empotrado a la derecha.

### Botones (`.btn`, `.btn-amber`, `.btn-line`)
- **Forma:** Rectángulo de esquinas vivas (radio 0), borde de 2px, altura mínima accesible de 48px y padding `12px 28px`. Tipografía en mayúsculas (0.95rem, peso 700, tracking 0.08em).
- **Primario (`.btn-amber`):** Fondo ámbar (#d79b1f), borde y texto en tinta negra (#14110f). En hover invierte a fondo tinta y texto ámbar. Dentro del bloque de créditos, el hover transmuta a fondo y borde papel crema con texto tinta.
- **Secundario (`.btn-line`):** Fondo transparente, borde y texto en tinta negra (#14110f). En hover invierte a fondo tinta y texto papel (#e9dfc7).

### Lista de Proyectos
- **Estructura:** Fila reglada sin tarjetas ni contenedores flotantes. Cada proyecto se separa con bordes superior e inferior de 2px tinta.
- **Disposición:** Rejilla de 3 columnas (5fr título, 2fr stack técnico, 5fr descripción narrativa).
- **Interacción:** Al hacer hover o coincidir con el anclaje (`:target`), la fila entera se tiñe de ámbar (#d79b1f).

### Sección Sobre Mí
- **Estilo:** Bloque de inmersión en tinta negra sólida (#14110f) con tipografía en papel crema claro (`#d8cfb8`).
- **Composición:** Rejilla de dos columnas asimétricas (5fr título H2 blanco/crema y 7fr texto narrativo).

### Sección Habilidades
- **Estilo:** Paño completo en ámbar (#d79b1f) con tipografía en tinta negra (#14110f).
- **Tipografía:** Lista corrida de tecnologías en Anton gigante (`clamp(2.6rem, 8vw, 6rem)`), mayúsculas y espaciado generoso.

### Sección Contacto & Motivo de Sombra
- **Composición:** Fondo en papel crema con un polígono de sombra vectorial puro empotrado en la esquina inferior derecha (`points="120,300 400,60 400,300"`).
- **Acciones:** Grupo de botones para Email (ámbar), GitHub (línea) y LinkedIn (línea).

### Badge de Copiado de Correo (`.email-badge-btn`)
- **Forma:** Botón con borde de 2px discontinuo/disparado (`2px dashed var(--ink)`), altura mínima de 44px y padding `8px 16px`.
- **Estados:** Al pasar el cursor o tras hacer clic (`.copied`), el borde se torna sólido (`solid`) y el fondo adopta el color ámbar (#d79b1f). Alterna entre el icono de copiar y el icono de verificación (`check`) manteniendo feedback sonoro y accesible vía `aria-live="polite"`.

### Pie de Página (`.footer`)
- **Estilo:** Bloque de cierre en tinta negra (#14110f) con texto legal y enlaces secundarios en papel sobre tinta (`#d8cfb8`). Los enlaces se subrayan y viran a ámbar en hover.

## Do's and Don'ts

### Do:
- **Do** limitar toda la gama cromática a papel (#e9dfc7), tinta (#14110f) y ámbar (#d79b1f).
- **Do** mantener todas las esquinas en 0px de radio (ángulos rectos y estética de imprenta).
- **Do** estructurar divisiones mediante filetes y bordes nítidos de 2px de tinta negra.
- **Do** construir cualquier ilustración o silueta exclusivamente con polígonos de bordes rectos en SVG.
- **Do** preservar el indicador visible de foco accesible de 3px (`outline: 3px solid var(--focus); outline-offset: 3px`).
- **Do** respetar rigurosamente la directiva `@media (prefers-reduced-motion: reduce)` anulando cualquier animación o transición.
- **Do** verificar contraste de color mínimo de 4.5:1 para texto normal bajo el estándar WCAG 2.1 AA.

### Don't:
- **Don't** reintroducir paletas ajenas al cartel de dos tintas, temas oscuros globales ni gradientes.
- **Don't** utilizar `box-shadow` ni `border-radius` en botones o secciones.
- **Don't** crear tarjetas flotantes ("cards") con fondos sombreados; el listado de proyectos debe ser una lista reglada.
- **Don't** importar tipografías externas mediante Google Fonts, Adobe Fonts o CDNs remotas.
- **Don't** incorporar imágenes rasterizadas (PNG, JPEG, WebP) ni fotografías decorativas; la totalidad de la gráfica debe ser SVG puro y código CSS.
- **Don't** inventar métricas ficticias, testimonios de clientes o logotipos no verificables.

## Procedencia de Activos

- **Gráficos e Ilustraciones:** Todo el material visual del sitio consiste en vectores SVG artesanales y estilos CSS nativos. No se distribuyen mapas de bits ni archivos rasterizados.
- **Tipografía Anton:** Fuente tipográfica Anton Regular (`fonts/Anton-Regular.ttf`) distribuida y alojada localmente bajo la licencia abierta SIL Open Font License (OFL), Version 1.1, documentada en `app/frontend/fonts/OFL-Anton.txt`.
