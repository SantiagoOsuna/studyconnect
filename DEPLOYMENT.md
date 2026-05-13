# 🚀 Checklist de Despliegue a AWS

## Pre-Deployment Checklist

### 1. Configuración de Código
- [x] Variables de entorno configuradas (.env.example)
- [x] Console.logs removidos
- [x] URLs de API usando variables de entorno
- [x] Configuración de Vite optimizada para producción
- [x] ESLint sin errores

### 2. Dependencias
- [x] package.json actualizado
- [x] Versión actualizada a 1.0.0
- [x] Scripts de build configurados

### 3. Archivos de Configuración
- [x] .env.example creado
- [x] .env.local para desarrollo
- [x] .gitignore completado
- [x] .ebignore para Elastic Beanstalk
- [x] vite.config.js optimizado

### 4. Documentación
- [x] README.md con instrucciones de deployment
- [x] Meta tags en index.html

## Pasos para Desplegar en AWS

### Paso 1: Preparar el Build
```bash
npm install
npm run lint
npm run build
```

### Paso 2: Verificar el Build Localmente
```bash
npm run preview
```

### Paso 3: Preparar AWS
- [ ] Crear cuenta/acceso AWS
- [ ] Configurar AWS CLI con credenciales
- [ ] Crear S3 bucket si usas S3 + CloudFront
- [ ] Crear Elastic Beanstalk environment

### Paso 4: Desplegar Según la Opción

**Opción A: AWS Amplify (Recomendado)**
```bash
amplify init
amplify add hosting
amplify publish
```

**Opción B: S3 + CloudFront**
```bash
aws s3 sync dist/ s3://tu-bucket/
```

**Opción C: Elastic Beanstalk**
```bash
eb init -p "Node.js 18 running on 64bit AL2" studyconnect
eb create studyconnect-env
eb deploy
```

### Paso 5: Post-Deployment
- [ ] Verificar que la aplicación carga correctamente
- [ ] Revisar que las variables de entorno son correctas
- [ ] Probar funcionalidad de login/registro
- [ ] Verificar conexión a API
- [ ] Revisar rendimiento y load times
- [ ] Configurar DNS/Custom domain

## Problemas Comunes y Soluciones

### "API connection failed"
- Verificar VITE_API_BASE_URL en variables de entorno de AWS
- Revisar CORS en backend
- Verificar que la API está disponible desde AWS

### "White screen al cargar"
- Revisar la consola del navegador para errores
- Verificar que index.html se carga correctamente
- Revisar rutas de assets en dist/

### "Build fallando"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Monitoreo en Producción

1. **CloudWatch Logs** - Monitorear errores
2. **CloudFront/ALB Metrics** - Performance
3. **Error Tracking** - Implementar Sentry o similar
4. **Uptime Monitoring** - Verificar disponibilidad

## Notas Importantes

⚠️ **IMPORTANTE:**
- Nunca someter .env archivos con datos sensibles
- Usar AWS Secrets Manager para credenciales
- Habilitar HTTPS/SSL
- Configurar backups automáticos
- Revisar security groups y permisos IAM
