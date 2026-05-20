# Proyecto: pagina-roro

## Stack técnico
- **Frontend**: React 19+, TypeScript, Tailwind CSS v4, Vite
- **Bundler**: Vite
- **Linter**: ESLint (configuración plana)

## Convenciones
- No usar CSS plano ni CSS Modules. Todo el estilo con Tailwind CSS.
- Código limpio, tipado y sin comentarios.
- Nombres de componentes en PascalCase, archivos en kebab-case.
- Props tipadas con TypeScript (interfaces o type).
- Funciones flecha para componentes.

## Estructura del proyecto
```
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas/vistas
│   ├── hooks/         # Custom hooks
│   ├── types/         # Interfaces y tipos
│   ├── assets/        # Imágenes, fuentes
│   ├── App.tsx        # Componente raíz
│   ├── main.tsx       # Entry point
│   └── index.css      # Import de Tailwind
├── .opencode/
│   ├── agents/        # Agentes y subagentes
│   ├── instructions/  # Instrucciones globales
├── opencode.json      # Configuración de opencode
└── index.html
```

## Reglas generales
- No hardcodear valores sensibles. Usar variables de entorno.
- Diseño responsive mobile-first.
- Accesibilidad: usar elementos semánticos y roles ARIA donde corresponda.
- Mantener la estructura de carpetas existente.
