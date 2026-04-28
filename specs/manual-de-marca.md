# Manual de marca — Voces.ai

Documento de referencia para **identidad visual, tono y tokens de UI** de **Voces.ai**. Incluye los dos **temas de producto** oficiales — **Claro** y **Oscuro** — y las familias cromáticas compartidas. Úsalo para presentaciones, material externo, implementación de tokens o guías de componentes.

**Nota de implementación:** el admin y otras apps pueden seguir sirviendo todavía el tema legado (acento violeta en `styles.css`); al migrar, alinear con las tablas de este manual.

---

## 1. Identidad y posicionamiento

| Elemento           | Contenido                                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nombre**         | Voces.ai                                                                                                                                                                                                                      |
| **Tagline (es)**   | Escucha sistémica y diagnóstico cultural                                                                                                                                                                                      |
| **Claim (README)** | _Transformando el ruido organizacional en inteligencia evolutiva._                                                                                                                                                            |
| **Idea central**   | Plataforma de **diagnóstico cultural** y **escucha sistémica** con entrevistas conversacionales guiadas por IA; anonimización, narrativas y hallazgos para diálogo organizacional. Más detalle: [docs/brief.md](../brief.md). |

**Tono sugerido** (alineado al brief): riguroso y humano; visibilizar lo sutil, el sentido colectivo y el diálogo. La IA es punto de partida, no sustituto de la conversación.

### 1.1 Lockup de marca seleccionado (`🎙️Voces.ai`)

- **Forma canónica del lockup:** `🎙️Voces.ai` (sin espacio entre emoji y wordmark).
- **Tipografía aprobada:** `Plus Jakarta Sans` (`600`) para el wordmark.
- **Alcance estricto:** esta decisión aplica **solo** al lockup `🎙️Voces.ai` (wordmark de marca). No reemplaza `Inter`, `Fraunces` ni `JetBrains Mono` en roles de UI/cuerpo/editorial/código.

---

## 2. Temas: Claro y Oscuro

| Tema       | Perfil                                                                                                        | Uso principal                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Claro**  | Superficies **claras**, atmósfera **cálida y editorial** (cielo + matices humanos: corales y lavados suaves). | Primer contacto, narrativa, material comercial, lectura prolongada en entorno luminoso. |
| **Oscuro** | Superficies **oscuras**, **cielo profundo**; contraste estable y foco en paneles.                             | Uso operativo intenso, análisis, continuidad con entornos de producto en baja luz.      |

**Claro** es el nombre oficial del tema de **superficies claras** de Voces (identidad de producto; no se limita a replicar el ajuste “en claro” del sistema operativo). **Oscuro** es el tema de **superficie profunda** de la misma familia cromática.

Sugerencia de asignación automática (opcional):

- `prefers-color-scheme: light` → Tema **Claro**
- `prefers-color-scheme: dark` → Tema **Oscuro**

Fallbacks de negocio (ejemplo): landing pública en **Claro**; consola de administración en **Oscuro** — ajustar según decisión de producto.

---

## 3. Base cromática (origen y adaptación)

La cromática base toma el lenguaje del manual de referencia de Next Steps Lab (PDF de marca en el repositorio: colores **celeste**, **azul de profundidad** y **amarillo señal**, sobre blanco y negro). **Voces.ai no copia la identidad de NST**; reutiliza esa base y la amplía con acentos propios (coral, menta) para evitar monotonía y sostener rigor + calidez.

| Rol de marca   | Hex referencia | Uso                                                                                       |
| -------------- | -------------- | ----------------------------------------------------------------------------------------- |
| Cielo (acción) | `#00C8FF`      | CTAs, enlaces, foco, iconografía de acción, degradados de wordmark                        |
| Profundidad    | `#005A7F`      | Títulos fuertes, anclas, gravedad sin apagar el cielo                                     |
| Señal (oro)    | `#FFCC00`      | Aviso puntual, hallazgos críticos, “faro” — pocos focos por vista; no es color de relleno |

---

## 4. Familias de acento (anti-monotonía)

Más allá del oro, dos familias dan **matices** sin sustituir al cielo como eje de acción:

| Familia   | Intención                                                                                  | Rango (referencia)                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Coral** | Calor humano, citas, voz, tensión empática, bienvenida                                     | Sólido ~`#D94D3D`–`#E86050` (Claro); ~`#FF7B6A`–`#F59B8D` (Oscuro). Lavados: `#FFEEEA` / `rgba(255,123,106,0.14–0.22)` según tema |
| **Menta** | Crecimiento, “listo”, confirmación, insights **positivos**; distinto del oro (menos grito) | Sólido ~`#0F9D8A`–`#14B8A6` (Claro); ~`#3EE0C4`–`#4FD8C2` (Oscuro). Fondos suaves: `#E0F7F3` o menta a baja opacidad              |

**Reglas:** (1) El **cielo** manda la jerarquía de acción. (2) Un bloque, una intención de acento (coral _o_ menta _o_ oro en primer plano). (3) **Coral** no sustituye al rojo de error/destructivo del sistema. (4) Ajustar hex finales a **WCAG** según par texto/fondo al implementar.

### 4.1 Matriz de uso de acentos en UI

Esta matriz traduce la semántica de color a decisiones de interfaz y sugiere tokens CSS para implementación gradual.

| Acento                      | Usar en                                                 | Evitar en                                                               | Ejemplos de componentes                                | Token CSS sugerido                            |
| --------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- |
| **Cielo** (`#00C8FF`)       | Acciones primarias, foco, navegación activa, enlaces    | Bloques narrativos largos o estados semánticos de resultado             | Botón primario, enlace activo, estado `:focus`, toggle | `--accent`, `--accent-hover`, `--accent-soft` |
| **Profundidad** (`#005A7F`) | Jerarquía visual, títulos, énfasis estructural          | Llamadas de acción principales cuando ya existe cielo                   | Título de tarjeta, chip neutro de jerarquía            | `--text-strong` o `--brand-depth`             |
| **Señal oro** (`#FFCC00`)   | Alertas puntuales, hallazgos críticos, foco de atención | Fondos masivos o repetición en múltiples tarjetas de una misma pantalla | Badge crítico, callout de atención                     | `--accent-signal`                             |
| **Coral** (ver §4)          | Voz humana, citas, tensión empática, narrativa          | Errores del sistema o acciones destructivas                             | Cita destacada, bloque testimonial, highlight de voz   | `--accent-coral`, `--accent-coral-soft`       |
| **Menta** (ver §4)          | Confirmación, progreso positivo, insights favorables    | Acciones primarias o avisos de alta urgencia                            | Badge "completado", chip positivo, resumen favorable   | `--accent-mint`, `--accent-mint-soft`         |

**Regla operativa:** por bloque visual, usar un solo acento semántico dominante (coral _o_ menta _o_ oro), manteniendo **cielo** como eje de interacción.

---

## 5. Tema **Claro** (tokens de referencia)

Fondo y papel respirado; cielo y profundidad para títulos y acciones; coral y menta para capas de significado (no reemplazan al cielo).

### Superficies y estructura

| Token (conceptual) | Hex / nota                            | Uso                                                 |
| ------------------ | ------------------------------------- | --------------------------------------------------- |
| Papel / atmósfera  | `#F6FBFF` a gradiente hacia `#EBF8FF` | Fondo de página                                     |
| Superficie         | `#FFFFFF`                             | Tarjetas, paneles                                   |
| Tinta principal    | `#0A0A0A`                             | Cuerpo y títulos (o equivalente con buen contraste) |
| Tinta secundaria   | `#4A5560`                             | Metadatos, ayuda                                    |
| Bordes             | `#D9EAF2`                             | Divisores, contención                               |

### Marca y acentos (Claro)

| Token (conceptual)    | Hex / nota            | Uso                                                  |
| --------------------- | --------------------- | ---------------------------------------------------- |
| Cielo                 | `#00C8FF`             | CTAs, enlaces activos, iconos de acción              |
| Profundidad           | `#005A7F`             | Títulos, wordmark, chips de énfasis                  |
| Hover cielo           | `#4AD9FF` (si aplica) | Estados hover sobre acciones                         |
| Señal oro             | `#FFCC00`             | 1–2 avisos fuertes por pantalla, hallazgos puntuales |
| Coral sólido / lavado | ver §4                | Narrativa, citas, “voz”                              |
| Menta sólida / lavada | ver §4                | Síntesis positiva, completado, highlights suaves     |

**Wordmark (recomendado con paleta cielo):** degradé de texto aprox. `#005A7F` → `#00C8FF` (~120–135°), `Plus Jakarta Sans` en peso 600, en formato **🎙️Voces.ai** (sin espacio).

---

## 6. Tema **Oscuro** (tokens de referencia)

Cielo profundo; el mismo cielo y profundidad que ancla; coral y menta con luminancia ajustada a fondos oscuros.

### Superficies y estructura

| Token (conceptual) | Hex / nota                                                                  | Uso                      |
| ------------------ | --------------------------------------------------------------------------- | ------------------------ |
| Fondo base         | `#081018` (radiales hacia tonos pétreos, ej. `#0F1D2B`–`#123149`, opcional) | Lienzo                   |
| Superficie elevada | `#132638`                                                                   | Tablas, paneles, modales |
| Bordes             | `#24455F`                                                                   | Línea estructural        |
| Texto principal    | `#E7F5FF` (tinte cielo)                                                     | Cuerpo y títulos         |
| Texto secundario   | `#9CC3DA`                                                                   | Apoyo, metadatos         |
| Cielo + hover      | `#00C8FF` / `#4AD9FF`                                                       | Acción y estados         |
| Profundidad        | `#005A7F` a variantes ligeras para bordes/títulos según contexto            | Jerarquía, chips         |

### Acentos (Oscuro)

| Token (conceptual) | Hex / nota                                          | Uso                                  |
| ------------------ | --------------------------------------------------- | ------------------------------------ |
| Señal oro          | `#FFCC00` o `#FFD24D` (si hace falta más contraste) | Misma función de “faro” que en Claro |
| Coral, menta       | ver §4 (valores **Oscuro**)                         | Misma semántica que en Claro         |

**Estética global:** cristal (_glass_), `backdrop-filter` donde encaje, bordes suaves. Sombras: ver implementación; no introducir un tercer color de marca ajenos a la tabla.

**Wordmark (Oscuro):** degradé aprox. `#00C8FF` → `#4AD9FF`, o texto `#E7F5FF` con cielo en interacción.

---

## 7. Logo, emoji y favicon

### En la barra de la aplicación

- **Bloque:** lockup **🎙️Voces.ai** en la misma línea (p. ej. clases `.nav-logo` y `.nav-title` donde existan).
- **Tratamiento coherente con el manual cielo** (tema **Claro** u **Oscuro**): según sección 5 o 6; mientras dure el legado en CSS, sigue pudiendo verse el degradé **violeta** (`#7c5cfc` → `#9178ff`) en código antiguo.

No hay hoy un logotipo vectorial independiente; el **lockup canónico** es `🎙️Voces.ai`.

### Favicon (sitio)

- Se publica vía `**/favicon.svg`** y `**/favicon.ico**` con el **mismo\*\* SVG: micrófono sobre fondo; ver `src/constants/micFaviconSvg.js`.

Uso en PDF o presentaciones: replicar **🎙️Voces.ai** con cromática del **tema** elegido (Claro u Oscuro), o el favicon derivado del SVG.

---

## 8. Tipografía

| Rol                                             | Stack                                                    | Carga y pesos recomendados                                                                                                                                                                                                   |
| ----------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI y cuerpo**                                 | `"Inter"`, -apple-system, BlinkMacSystemFont, sans-serif | Cargar por defecto 400, 500, 600 (`700` solo si una pantalla lo justifica). Referencia: `admin.html`, `interview.html`.                                                                                                      |
| **Acento editorial** (p. ej. tablero Hallazgos) | `"Fraunces"`, Georgia, serif                             | Priorizar 600 (`700` opcional para titulares puntuales de alto impacto). Mantener uso restringido en admin.                                                                                                                  |
| **Código y datos densos**                       | `"JetBrains Mono"`, `"Fira Code"`, monospace             | Priorizar 500 y 600. Carga en Google Fonts: `admin.html`, `interview.html`, `data-protection.html`; ventanas de salida vía `stepOutputWindowFavicon.js` (`STEP_OUTPUT_JETBRAINS_MONO_FONT_HTML`). Token: `var(--font-mono)`. |

- **Tamaño base:** `16px` en `html` (`1rem` = 16px).
- **Interlineado base:** ~`1.6` en cuerpo.
- **Suavizado:** `-webkit-font-smoothing: antialiased` en UI.
- **Escala tipográfica recomendada (producto):**
  - `display`: `2.25rem` / `1.15` / `600` (Inter).
  - `h1`: `1.75rem` / `1.2` / `600` (Inter).
  - `h2`: `1.375rem` / `1.25` / `600` (Inter o Fraunces solo en contexto editorial).
  - `h3`: `1.125rem` / `1.3` / `600` (Inter).
  - `body-lg`: `1.0625rem` / `1.6` / `400` (Inter).
  - `body`: `1rem` / `1.6` / `400` (Inter).
  - `caption/meta`: `0.875rem` / `1.45` / `500` (Inter).
  - `mono-sm`: `0.875rem` / `1.45` / `500` (JetBrains Mono).
- **Reglas de uso (obligatorias):**
  - `Fraunces` solo en titulares editoriales, citas destacadas y bloques narrativos clave.
  - No usar `Fraunces` en botones, inputs, tablas operativas, navegación ni menús.
  - `JetBrains Mono` solo en código, IDs, timestamps, métricas, JSON y salidas técnicas.
  - Evitar `JetBrains Mono` en párrafos explicativos o copy de UI general.

---

## 9. Sistema reutilizable de badges

### 9.1 Inventario actual (base para unificación)

| Familia                   | Clase base detectada                                    | Variantes activas (ejemplos)                                                         | Uso principal                                        |
| ------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **Estado**                | `.status-badge`                                         | `.status-active`, `.status-paused`, `.status-processing`, `.hallazgos-status--error` | Estado operativo en Entrevistas, Usuarios y Análisis |
| **Métrica**               | `.findings-metric-badge`                                | `--hint`, `--narrative-inline`, `--interview`, `--quote-message`, `--static`         | KPIs y metadatos en Hallazgos/Tablero                |
| **Microdato**             | `.findings-mini-badge`                                  | `--numeric`                                                                          | Celdas numéricas compactas                           |
| **Resumen semántico**     | `.findings-entity-summary-chip`                         | `--emoji`, `--tag`                                                                   | Chips de etiquetas y reacciones                      |
| **Identificador técnico** | `.config-card-display-id`, `.findings-drawer-code-pill` | `s6-chip`, `s6-badge` (salida Paso 6)                                                | IDs, códigos y trazabilidad                          |

### 9.2 Set reutilizable oficial

Usar un set único de badge con jerarquía clara y semántica estable:

- **Badge de estado:** para lifecycle y estado de procesos (`activo`, `pausado`, `procesando`, `error`).
- **Badge de métrica:** para pares `label + valor` de KPIs.
- **Badge de etiqueta:** para taxonomía y tags de contenido.
- **Badge de ID/código:** para identificadores técnicos (mono, alta legibilidad).

Reglas de implementación:

- Mantener radio cápsula (`999px`) para estado/métrica/etiqueta; usar radio menor para código (`6px` aprox.).
- Mantener peso visual: label `600`, valor `700` en badges de métrica.
- Evitar crear nuevos prefijos de clase; extender familias existentes detectadas.
- Alinear colores de badges con la matriz de acentos de §4.1 (cielo = interacción, menta = positivo, coral = humano, oro = señal puntual).
- Reservar variantes locales (`s6-*`) para documentos exportados; no trasladarlas directo a UI operativa.

### 9.3 Colores de badges (actual + acento recomendado)

| Tipo                            | Clase / variante                                | Color actual (resumen)                    | Acento recomendado (unificación)                   | Ejemplo visual                         |
| ------------------------------- | ----------------------------------------------- | ----------------------------------------- | -------------------------------------------------- | -------------------------------------- |
| **Estado — activo**             | `.status-active`                                | Fondo menta suave + texto éxito           | **Menta** (`#14B8A6` / soft `#E0F7F3`)             | `[[BADGE_PREVIEW:status-active]]`      |
| **Estado — pausado/procesando** | `.status-paused`, `.status-processing`          | Fondo ámbar suave + texto ámbar           | **Oro señal** (`#FFCC00` con texto profundidad)    | `[[BADGE_PREVIEW:status-paused]]`      |
| **Estado — completado**         | `.status-completed`                             | Token de acento de tema                   | **Cielo** (`#00C8FF` / soft `rgba(0,200,255,.14)`) | `[[BADGE_PREVIEW:status-completed]]`   |
| **Estado — error (hallazgos)**  | `.hallazgos-status--error`                      | Fondo rojo suave + texto rojo             | **Sin acento de marca** (mantener rojo sistema)    | `[[BADGE_PREVIEW:status-error]]`       |
| **Métrica base**                | `.findings-metric-badge`                        | Borde neutro + texto oscuro               | **Profundidad** (`#005A7F`) para versión neutra    | `[[BADGE_PREVIEW:metric-base]]`        |
| **Métrica — temperatura**       | `[data-metric-hint-key="temperature"]`          | Borde/fondo ámbar en drawer               | **Oro señal** (`#FFCC00`)                          | `[[BADGE_PREVIEW:metric-temperature]]` |
| **Métrica — abstracción**       | `[data-metric-hint-key="abstraction"]`          | Borde/fondo menta en drawer               | **Menta** (`#14B8A6`)                              | `[[BADGE_PREVIEW:metric-abstraction]]` |
| **Métrica — narrativas**        | `[data-metric-hint-key="narrativeCountByItem"]` | Borde/fondo coral en drawer               | **Coral** (`#E86050` / soft `#FFEEEA`)             | `[[BADGE_PREVIEW:metric-narratives]]`  |
| **Métrica — mensaje**           | `.findings-metric-badge--quote-message`         | Borde/fondo cian + valor claro            | **Cielo** (`#00C8FF`)                              | `[[BADGE_PREVIEW:metric-message]]`     |
| **Etiqueta emoji**              | `.findings-entity-summary-chip--emoji`          | Neutro oscuro translúcido                 | **Profundidad** (`#005A7F` soft)                   | `[[BADGE_PREVIEW:chip-emoji]]`         |
| **Etiqueta de tag**             | `.findings-entity-summary-chip--tag`            | Color dinámico de etiqueta + texto blanco | **Coral/Menta/Profundidad** según categoría        | `[[BADGE_PREVIEW:chip-tag]]`           |
| **Microbadge numérico**         | `.findings-mini-badge--numeric`                 | Superficie neutra + borde tenue           | **Profundidad suave** (`rgba(0,90,127,.16)`)       | `[[BADGE_PREVIEW:mini-numeric]]`       |
| **ID/código**                   | `.findings-drawer-code-pill`                    | Lavanda/azul translúcido + texto claro    | **Profundidad + cielo** (blend técnico)            | `[[BADGE_PREVIEW:code-pill]]`          |

Notas:

- Donde hay `var(...)`, el valor exacto depende del tema (`Claro`/`Oscuro`) y debe mantener contraste WCAG.
- Para nuevas variantes, reutilizar esta paleta antes de introducir nuevos colores.
- En `manual-de-marca.html`, la columna "Ejemplo visual" se renderiza como badge real para cada fila.

---

## 10. Sistema reutilizable de botones

### 10.1 Colores de botones (actual + acento recomendado)

| Variante           | Clase base                   | Color actual (resumen)                                    | Acento recomendado (unificación)                              | Ejemplo visual                 |
| ------------------ | ---------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------ |
| **Primario**       | `.btn.btn-primary`           | Fondo `var(--accent)`, texto blanco                       | **Cielo** (`#00C8FF`) con texto profundidad (`#003549`)       | `[[BUTTON_PREVIEW:primary]]`   |
| **Secundario**     | `.btn.btn-secondary`         | Uso real en vistas; estilo pendiente de consolidar global | **Profundidad suave** (`#005A7F` sobre fondo claro)           | `[[BUTTON_PREVIEW:secondary]]` |
| **Fantasma**       | `.btn.btn-ghost`             | Fondo transparente, borde tenue, texto secundario         | **Profundidad** para texto y borde (`#005A7F` + alfa)         | `[[BUTTON_PREVIEW:ghost]]`     |
| **Peligro**        | `.btn.btn-danger`            | Fondo `var(--danger)`, texto blanco                       | **Sin acento de marca** (rojo de sistema)                     | `[[BUTTON_PREVIEW:danger]]`    |
| **Ícono circular** | `.btn.btn-icon` (+ variante) | Botón circular 40x40, color según variante combinada      | **Cielo** para acción principal, **Fantasma** para secundaria | `[[BUTTON_PREVIEW:icon]]`      |

### 10.2 Símbolos base para botones

| Acción                  | Símbolo base               | Semántica visual                      | Uso recomendado                                |
| ----------------------- | -------------------------- | ------------------------------------- | ---------------------------------------------- |
| **Agregar / crear**     | `[[BUTTON_ICON:add]]`      | `+` directo, alta detectabilidad      | Altas de configuración, invitaciones, análisis |
| **Importar**            | `[[BUTTON_ICON:import]]`   | Bandeja + flecha de entrada (adjunto) | Cargar JSON/archivos al sistema                |
| **Exportar**            | `[[BUTTON_ICON:export]]`   | Bandeja + flecha de salida            | Descargar CSV/JSON o reporte                   |
| **Editar**              | `[[BUTTON_ICON:edit]]`     | Lápiz sobre objeto                    | Edición de entidad existente                   |
| **Eliminar**            | `[[BUTTON_ICON:delete]]`   | Papelera                              | Acciones destructivas con confirmación         |
| **Procesar**            | `[[BUTTON_ICON:process]]`  | Engranaje                             | Disparar procesamiento por lote                |
| **Enviar**              | `[[BUTTON_ICON:send]]`     | Avión de papel                        | Envío de mensaje/formulario                    |
| **Filtrar**             | `[[BUTTON_ICON:filter]]`   | Embudo                                | Aplicar criterios/filtros en listados          |
| **Ordenar ascendente**  | `[[BUTTON_ICON:sortUp]]`   | Flecha hacia arriba                   | Ordenar de menor a mayor / A-Z                 |
| **Ordenar descendente** | `[[BUTTON_ICON:sortDown]]` | Flecha hacia abajo                    | Ordenar de mayor a menor / Z-A                 |
| **Cerrar**              | `[[BUTTON_ICON:close]]`    | X de cierre                           | Cerrar modales, popovers o paneles             |
| **Etiquetar**           | `[[BUTTON_ICON:tag]]`      | Etiqueta (tag)                        | Asignar o editar etiquetas                     |
| **Reacciones**          | `[[BUTTON_ICON:reaction]]` | Carita/emoji                          | Agregar o gestionar reacciones                 |
| **Ver**                 | `[[BUTTON_ICON:view]]`     | Ojo                                   | Ver detalle o vista previa                     |
| **Pausar**              | `[[BUTTON_ICON:pause]]`    | Doble barra vertical                  | Pausar flujo o reproducción activa             |
| **Reanudar**            | `[[BUTTON_ICON:resume]]`   | Triángulo de play                     | Retomar flujo pausado                          |
| **Resetear / volver**   | `[[BUTTON_ICON:reset]]`    | Flecha hacia la izquierda             | Volver estado/filtro al valor inicial          |

### 10.3 Tamaños y composición

- Tamaños estándar: `.btn-sm`, base `.btn`, `.btn-lg`.
- Orden recomendado de clases: `.btn` + variante de intención + tamaño + modificador (`.btn-icon`, utilitarios).
- En modales: acción primaria a la derecha; cancelar/fantasma a la izquierda.
- No crear botones ad-hoc por pantalla si una combinación existente cubre el caso.
- En `manual-de-marca.html`, las columnas de ejemplo visual y símbolo base se renderizan como controles reales para revisión.

---

## 11. Forma, movimiento y profundidad

| Token                         | Valor                                | Uso                          |
| ----------------------------- | ------------------------------------ | ---------------------------- |
| `--radius-sm` … `--radius-xl` | 8 / 12 / 16 / 20 px                  | Controles, tarjetas, modales |
| Transición base               | 200ms `cubic-bezier(0.4, 0, 0.2, 1)` | Interacción por defecto      |
| Transición lenta              | 400ms (mismo easing)                 | Pliegues o secciones amplias |

**Acento en controles nativos (checkbox, radio, rango, listas desplegables):** en implementación, `accent-color` alineado al **cielo** (`#00C8FF`, p. ej. vía `var(--accent)`) evita el azul genérico del sistema en muchos motores. **Limitación:** en `<select>`, el color de la fila resaltada o elegida al abrir la lista **suelen pintarla el SO o el propio navegador**; no siempre se puede sustituir por cielo solo con CSS. Si hiciera falta un aspecto 100% controlado, el camino es un desplegable **accesible** (combobox) con estilos de la marca, no un `<select>` puramente nativo.

---

## 12. Voz y UI en español

- Títulos de modales, etiquetas y botones: **oración capitalizada** (p. ej. "Guardar", "Agregar una nueva configuración"); nombre del producto: **Voces.ai** como marca registrada en copy.
- Mensajes de error hacia quien usa el producto: **español** claro, accionable, alineado a LNI del repositorio cuando aplica.

---

## 13. Referencia técnica (mantenimiento)

| Recurso                              | Ruta o nota                                                                                                                                         |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design system (tokens en producción) | `apps/admin-web/public/css/styles.css` — `accent-color` + tokens por `data-voces-ui-theme`; revisar restos de legado (p. ej. entrevista) por módulo |
| Favicon                              | `src/constants/micFaviconSvg.js`, rutas en `src/app.js`                                                                                             |
| HTML de referencia                   | `apps/admin-web/public/admin.html`, `apps/interview-web/public/interview.html`                                                                      |
| Bocetos cromáticos (investigación)   | `docs/_research/landing/light-clear-themes/` (HTMLs de prueba; no reemplazan este manual)                                                           |

**Cuando** se actualicen colores, familias o nombres de tema en CSS o producto, **actualizar este documento** y, si aplica, añadir una nota al pie de sección 13 o una entrada breve bajo _Historial_ al final.

---

## Historial

| Fecha        | Cambio                                                                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abril 2026   | Se separa el símbolo de ordenar en dos acciones: ascendente (flecha arriba) y descendente (flecha abajo).                                           |
| Abril 2026   | Se agregan símbolos base de filtrar, ordenar, cerrar, etiquetar, reacciones y ver en la sección 10.                                                 |
| Abril 2026   | Se agrega símbolo base de resetear (flecha a la izquierda) y se separan pausar/reanudar como acciones independientes en sección 10.                 |
| Abril 2026   | Se amplía sección 10 con matriz de colores de botones (actual + acento recomendado), preview visual por fila y símbolos base canónicos de acción.   |
| Abril 2026   | Se mejora sección 9.3 con recomendación de acentos por tipo de badge y ejemplo visual por fila en la versión HTML del manual.                       |
| Abril 2026   | Se elige de forma definitiva `Plus Jakarta Sans` (`600`) para `🎙️Voces.ai` y se actualizan lineamientos de lockup en el manual.                     |
| Abril 2026   | Se agrega inventario real de badges y se define set reutilizable oficial de badges y botones (variantes, tamaños y reglas de composición).          |
| Abril 2026   | Se mueven 3 pruebas tipográficas de `🎙️Voces.ai` a sección 1 (Identidad y posicionamiento), se mantiene alcance exclusivo a wordmark y sin espacio. |
| Abril 2026   | Se añade matriz de uso de acentos en UI (sección 4.1) con casos recomendados, anti-patrones y tokens CSS sugeridos para implementación.             |
| Abril 2026   | Opción A tipográfica: pesos recomendados por familia, escala explícita (`display` a `mono-sm`) y reglas de uso para `Fraunces`/`JetBrains Mono`.    |
| Abril 2026   | JetBrains Mono cargada en admin, entrevista, data-protection y popups de JSON/salida de análisis; UI usa `var(--font-mono)`.                        |
| Abril 2026   | `accent-color` cielo en controles nativos; nota de limitación en `<select>` (lista desplegable depende del SO/navegador).                           |
| Abril 2026   | Manual unificado: temas **Claro** y **Oscuro**, base NST + familias coral/menta/oro/cielo/profundidad, sin nombres alternativos de producto.        |
| Feb–Abr 2026 | Versiones anteriores descritas en bloque; enfoque en legado oscuro y violeta en el repo.                                                            |
