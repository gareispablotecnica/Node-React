# 💻 Proyecto Backend con Node.js + Express + SQLite3

 -Este proyecto es una API REST construida con Node.js, Express y SQLite3.
Su propósito es manejar una base de datos de ejemplo (escuela.db) en la que se gestionan Alumnos.

## Datos del Curso:
- Materia: Proyecto, Diseño e Implementación de Sistemas Computacionales
- Carrera: Técnicatura en Programación
- Institución: Técnica N°1
- Curso: 7°2 - Grupo de Taller: 7.4
- Docente: Prof. Gareis Pablo


## Tecnologías utilizadas

- Node.js (JavaScript en backend)

- Express (framework para crear el servidor HTTP)

- SQLite3 (base de datos ligera, embebida en archivos .db)

- Dotenv (para manejar variables de entorno)


## Proyecto Node + React + SQLite3

Este proyecto es una aplicación FullStack compuesta por:

BackEnd: API REST construida con Node.js + Express + SQLite3 para gestionar una base de datos de ejemplo (escuela.db) con información de Alumnos.

FrontEnd: Interfaz web desarrollada en React + Vite, que consume la API para mostrar y modificar datos de alumnos.

## Estructura del Proyecto
```
NODE-REACT/
├─ BackEnd/                # Servidor en Node.js (API REST)
│  ├─ node_modules/
│  ├─ .env                  # Variables de entorno (PORT)
│  ├─ index.js              # Punto de entrada del servidor Express
│  ├─ db/escuela.db         # Base de datos SQLite
│  └─ package.json
│
├─ FrontEnd/               # Aplicación React (Vite)
│  ├─ node_modules/
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ Components/
│  │  │  ├─ Header/
│  │  │  │  └─ Encabezado.jsx   # Menú de navegación con Links
│  │  │  ├─ Main/
│  │  │  │  └─ Main.jsx
│  │  │  └─ Pages/
│  │  │     └─ VerTabla.jsx     # Tabla que lista los alumnos
│  │  ├─ Layouts.jsx            # Define las rutas con react-router-dom
│  │  ├─ Layouts.css
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ Global.css             # Estilos generales
│  ├─ index.html
│  ├─ package.json
│  └─ vite.config.js
│
└─ README.md
```

## Instalar Dependencias
# BackEnd
```shell
    cd BackEnd
    npm i
```
# Ejecutar el BackEnd
```shell
    npm run dev
```
# FrontEnd
```shell
    cd FrontEnd
    npm i
```
# Ejecutar el FrontEnd
```shell
    npm run dev
```
