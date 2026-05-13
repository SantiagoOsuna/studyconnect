# StudyConnect

Plataforma de estudio colaborativo para estudiantes. Construida con React, Vite y Tailwind CSS.

## Requisitos Previos

- Node.js 16+ 
- npm o yarn
- Git
- AWS CLI (para despliegue)

## Instalación Local

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd studyconnect
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local
```

Editar `.env.local` con tus valores:
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ENV=development
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Visualiza la compilación de producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige errores de linting automáticamente

## Despliegue en AWS

### Opción 1: AWS Amplify (Recomendado)

1. **Conectar el repositorio a Amplify**
   ```bash
   amplify init
   ```

2. **Configurar el build**
   ```bash
   amplify add hosting
   ```

3. **Desplegar**
   ```bash
   amplify publish
   ```

### Opción 2: AWS S3 + CloudFront

1. **Compilar la aplicación**
   ```bash
   npm run build
   ```

2. **Subir a S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name/
   ```

3. **Configurar CloudFront** para cacheo y distribución global

### Opción 3: AWS Elastic Beanstalk

1. **Instalar EB CLI**
   ```bash
   pip install awsebcli --upgrade --user
   ```

2. **Inicializar EB**
   ```bash
   eb init -p "Node.js 18 running on 64bit AL2" studyconnect
   ```

3. **Compilar la aplicación**
   ```bash
   npm run build
   ```

4. **Desplegar**
   ```bash
   eb create studyconnect-env
   eb deploy
   ```

## Variables de Entorno (AWS)

Para AWS, configurar las siguientes variables de entorno en Elastic Beanstalk o Amplify:

```env
VITE_API_BASE_URL=https://your-api-endpoint/api
VITE_ENV=production
```

## Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
├── containers/      # Componentes contenedores
├── pages/          # Páginas principales
├── services/       # Servicios de API
├── App.jsx         # Componente principal
└── main.jsx        # Punto de entrada

public/            # Archivos estáticos
dist/              # Build de producción (generado)
```

## Tecnologías Utilizadas

- **React 19** - Biblioteca UI
- **Vite** - Empaquetador y servidor de desarrollo
- **React Router** - Enrutamiento
- **Tailwind CSS** - Estilos
- **ESLint** - Linting

## Consideraciones de Producción

✅ **Completado:**
- Variables de entorno configuradas
- Compilación optimizada (Terser)
- Console.logs removidos
- Meta tags SEO
- .gitignore actualizado
- .ebignore para AWS

## Troubleshooting

### Error de conexión a API
- Verificar que la URL de API en `.env.local` es correcta
- Revisar que la API está disponible
- Verificar CORS en el backend

### Build fallando
```bash
npm install
npm run lint:fix
npm run build
```

### Puerto 5173 en uso
```bash
npm run dev -- --port 3000
```

## Soporte

Para reportar problemas o sugerencias, crear un issue en el repositorio.

## Licencia

MIT

