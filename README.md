# 🏛️ Luxury Furniture E-Commerce

Este proyecto es una plataforma completa de comercio electrónico para la venta de muebles de lujo, desarrollada con **NestJS** en el backend y **Next.js** en el frontend. Proporciona una experiencia fluida y segura para la gestión de productos, pedidos y facturación.

## 🚀 Características

- 🔐 **Autenticación y autorización** (JWT + Roles)
- 👤 **Gestión de usuarios** (registro, inicio de sesión, perfil, roles)
- 🛋️ **Catálogo de productos** con imágenes y descripciones detalladas
- 🛒 **Gestión de órdenes de compra** con estados de pedido
- 🧾 **Generación de facturas** en formato PDF
- 🎨 **Interfaz moderna y responsive** con Next.js y TailwindCSS
- 📡 **API RESTful** documentada con Swagger
- 📊 **Dashboard de administración** con estadísticas de ventas

## 🛠️ Tecnologías Utilizadas

### Backend (NestJS)
- **Lenguaje:** TypeScript
- **Framework:** NestJS
- **Base de datos:** PostgreSQL con TypeORM
- **Autenticación:** Passport.js + JWT
- **Documentación:** Swagger / OpenAPI

### Frontend (Next.js)
- **Lenguaje:** TypeScript
- **Framework:** Next.js 14
- **Estilos:** TailwindCSS
- **Estado Global:** Zustand
- **Petición de datos:** React Query

## 📂 Estructura del Proyecto

```
📦 luxury-furniture
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 modules (usuarios, productos, órdenes, facturas)
 ┃ ┃ ┣ 📂 common
 ┃ ┃ ┣ 📄 main.ts
 ┣ 📂 frontend
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📄 app.tsx
 ┣ 📄 docker-compose.yml
 ┣ 📄 README.md
 ┣ 📄 package.json
```

## ⚙️ Instalación y Ejecución

### 📌 Requisitos previos

- **Node.js 18+**
- **Docker (opcional)**
- **PostgreSQL**

### 🚀 Configuración rápida

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/luxury-furniture.git
   cd luxury-furniture
   ```

2. Configurar las variables de entorno en `.env` para backend y frontend

3. Iniciar el backend:
   ```bash
   cd backend
   npm install
   npm run start:dev
   ```

4. Iniciar el frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

5. Acceder a la API en `http://localhost:3000` y al frontend en `http://localhost:4000`

### 🐳 Ejecución con Docker

```bash
docker-compose up -d
```

## 📌 Endpoints Principales

- **Usuarios**: `/api/users` (registro, autenticación, roles)
- **Productos**: `/api/products` (CRUD de productos)
- **Órdenes**: `/api/orders` (gestión de pedidos)
- **Facturación**: `/api/invoices` (generación de facturas)

## 📜 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir! 🚀

