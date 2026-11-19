# Rediseño Web Oficial — Colegio Uruguay Curicó (`www.colegiouruguay.cl`)

Paquete completo listo para subir a tu servidor (`public_html/` en cPanel/FTP o Firebase Hosting).

## Archivos Incluidos

```text
colegiouruguay-web-2027/
├── index.html                                    # Página principal completa y responsiva
├── css/
│   └── styles.css                                # Estilos institucionales, carrusel y galerías
├── js/
│   └── main.js                                   # Carrusel, actividades, dependencias y calendario
├── img/
│   ├── banner-prematricula-2027.jpg              # Banner Pre-Matrícula 2027 (enlace directo a /prematricula)
│   ├── inauguracion-juegos-parvularia.jpg        # Inauguración Juegos Parvularia (Aniversario N° 102)
│   ├── formacion-integral-deporte.jpg            # Selección deportiva (Slide 3 y Actividades)
│   ├── actividad-debate-centro-estudiantes.jpg   # Actividad: Debate Centro de Estudiantes
│   ├── actividad-resimple.jpg                    # Actividad: Taller de Reciclaje ReSimple
│   ├── actividad-simulacro.jpg                   # Actividad: Simulacro Integral PISE
│   ├── actividad-trueque-libros.jpg              # Actividad: Trueque de Libros y Fomento Lector
│   ├── dependencia-biblioteca.jpg                # Dependencia: Biblioteca CRA
│   ├── dependencia-cancha-multiuso.jpg           # Dependencia: Cancha Multiuso Techada
│   ├── dependencia-comedor-estudiantes.jpg       # Dependencia: Comedor de Estudiantes
│   ├── dependencia-hall-parvularia.jpg           # Dependencia: Hall de Educación Parvularia
│   ├── dependencia-laboratorio-ciencias.jpg      # Dependencia: Laboratorio de Ciencias
│   ├── dependencia-laboratorio-computacion.jpg   # Dependencia: Laboratorio de Computación
│   └── escudo-colegio-uruguay.svg                # Escudo institucional vectorial
└── README.md
```

## Instrucciones de Publicación

1. Descomprime este archivo `.zip`.
2. Sube todos los archivos y carpetas (`index.html`, `css/`, `js/`, `img/`) a la carpeta raíz pública de tu hosting (`public_html/`) reemplazando los archivos anteriores.
3. Para editar actividades, dependencias o fechas futuras, abre `js/main.js` y modifica `NOTICIAS_DATA`, `DEPENDENCIAS_DATA` o `EVENTOS_DATA`.
