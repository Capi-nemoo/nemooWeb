---
title: "Como crear tu promio website en 5m"
date: 2024-09-12T14:05:45-05:00
draft: false
---

*Disclaimer* : Guía para usuarios de Unix-based-systems. 

[English](../posts/Your-Own-Website-or-Blog-Using-Hugo-engl.md)

# Hola amigazo 

Esto es una guía rápida de cómo hacer tu propio website/blog. Está enfocada para usuarios medianamente avanzados, así que realmente no explicaré nada en detalle. 

## 1. Hugo

Hugo es rápido, ligero y perfecto para crear websites con pocos recursos. Lo elegí por su velocidad y flexibilidad para proyectos personales y portafolios. La mayor ventaja que le veo, y lo que más me gusta, es que puedes hacer tu propio template de markdown!!! 🚀

## 2. Instalación en ~2 Minutos

Instalar Hugo es sencillo. Solo tienes que ejecutar uno de estos comandos dependiendo de tu sistema:

```bash
brew install hugo     # Para macOS
sudo apt install hugo  # Para Linux
sudo pacman -S hugo    # Para Linux++
```

## 3. Crea tu Website en 1 Comando

Inicia tu proyecto con este comando:

```bash
hugo new site mi-website  # Esto crea una carpeta (no hace falta ponerlo dentro de otra carpeta)

```

## 4. Elige un Tema y Personalízalo

Escoge un tema desde Hugo Themes:

```bash
git clone URL-TEMA themes/ ## copialo dentro de la carpeta themes
```

Ve a Hugo Themes, selecciona un tema, o si te animas, ¡puedes crear el tuyo propio! (al final del post te dejo mis recomendaciones personales). Personaliza el archivo `config.toml` para ajustar colores, fuentes y más.

Si tienes problemas o no eres web developer, lo único que tienes que saber es que:

- En `content/data` van los posts,
- En `config.toml` (directorio root) va la configuración principal del website.

## 5. Despliega Fácil con Netlify o GitHub Pages

Esta parte fue la más complicada para mí 😅. Nadie te explica cómo hacerlo bien, solo te dicen "usa GitHub Pages" y listo. Así que aquí va mi tutorial detallado:

1. Compra un dominio en Cloudflare (opcional, pero recomendado).
2. Ve a Git y verifica el dominio en la sección de Pages dentro de Settings.
3. Sube toda la carpeta que creaste con Hugo a tu repo en GitHub.
4. Luego, ve a Settings del repo y cliquea Pages.
5. Selecciona carpeta root y branch.
6. Agrega tu custom domain.
7. ¡Y ya terminamos! Ahora ve a Actions en tu repo, selecciona New workflow, busca Hugo, y listo, tienes tu nuevo website funcionando.
