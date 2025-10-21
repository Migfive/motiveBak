# 💫 Motive Backend

**Motive Backend** es un pequeño servidor construido con **Node.js + Express (Vercel Functions)**  
que actúa como proxy para obtener frases motivacionales desde la API pública [ZenQuotes.io](https://zenquotes.io).  
Su función principal es evitar errores de **CORS** cuando se usa en aplicaciones **Flutter Web**, **Android**, o cualquier otro frontend.

---

## 🚀 Tecnologías utilizadas

- ⚙️ Node.js (ES Modules)
- 🌐 Fetch API (mediante `node-fetch`)
- ☁️ Despliegue en [Vercel](https://vercel.com)
- 🔒 CORS habilitado para todas las peticiones

---

## 📂 Estructura del proyecto

## 🌐 API Pública
Puede acceder a la API pública desde aquí 👉 https://motive-bak-gmma.vercel.app/api/quotes