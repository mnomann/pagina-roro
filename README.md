# nombre-generico | Portafolio Profesional

Portafolio web profesional de nombre-generico, desarrollador de software especializado en aplicaciones web modernas.

## Stack Tecnologico

- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS v4
- **Bundler**: Vite 8
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Enrutamiento**: React Router DOM
- **Contacto**: EmailJS (integracion con Gmail)

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx       # Navegacion principal con menu responsive
│   ├── Footer.tsx       # Footer profesional
│   ├── ScrollToTop.tsx  # Scroll automatico al cambiar de ruta
│   └── SectionWrapper.tsx # Wrapper de secciones con animacion
├── pages/               # Paginas del portafolio
│   ├── Home.tsx         # Pagina principal (Hero + Habilidades + Proyectos)
│   ├── Projects.tsx     # Pagina de proyectos
│   ├── About.tsx        # Pagina Sobre Mi
│   └── Contact.tsx      # Pagina de contacto con formulario
├── hooks/               # Custom hooks
│   └── useTheme.ts      # Hook para modo oscuro/claro
├── types/               # Interfaces y tipos TypeScript
│   └── index.ts         # Project, Skill, NavLink
├── assets/              # Recursos estaticos
├── App.tsx              # Configuracion de rutas y layout
├── main.tsx             # Entry point
└── index.css            # Estilos globales y tokens de diseno
```

## Diseno Visual

- **Modo oscuro por defecto** con toggle a modo claro
- **Paleta de colores**: Indigo + Slate (WCAG AA verificada)
- **Tipografia**: System-ui stack
- **Animaciones**: Entrada suave de secciones con framer-motion
- **Responsive**: Mobile-first, menu hamburguesa en dispositivos moviles

## Rutas

| Ruta          | Pagina     | Descripcion               |
|---------------|------------|---------------------------|
| `/`           | Home       | Hero, habilidades, proyectos |
| `/proyectos`  | Projects   | Portafolio de proyectos   |
| `/sobre-mi`   | About      | Experiencia y formacion   |
| `/contacto`   | Contact    | Formulario de contacto    |

## Instalacion y Uso

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd pagina-roro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de produccion
npm run build

# Vista previa del build
npm run preview
```

## Configuracion de EmailJS

El formulario de contacto utiliza EmailJS para enviar mensajes a hestor.chavez@gmail.com sin necesidad de backend.

1. Registrate en [EmailJS](https://www.emailjs.com/) (gratuito, 200 envios/mes)
2. Crea un servicio de email conectado a tu cuenta de Gmail
3. Crea una plantilla con las variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Crea un archivo `.env` en la raiz del proyecto y completa las variables:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> **Importante**: Las variables de entorno deben comenzar con `VITE_` para que Vite las exponga al frontend.

## Scripts Disponibles

| Comando           | Descripcion                     |
|-------------------|---------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo   |
| `npm run build`   | Compila TypeScript y empaqueta |
| `npm run preview` | Previsualiza el build           |
| `npm run lint`    | Ejecuta ESLint                  |

## Licencia

Todos los derechos reservados © 2025 nombre-generico.
