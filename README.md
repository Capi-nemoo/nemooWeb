# iusenixbtw.com

Personal website of Renato Ramirez (Capi_nemoo)

## About

Minimalist, brutalist-style personal website inspired by old-school Unix developers. 
Built with pure HTML/CSS - no frameworks, no build tools, no bloat.

## Structure

```
.
├── index.html          # Main page
├── style.css           # Styles (with dark mode support)
├── CNAME              # Domain configuration
└── README.md          # This file
```

## Features

- **Pure HTML/CSS**: No JavaScript dependencies (except one line for timestamp)
- **Dark mode**: Automatic based on system preference
- **Responsive**: Works on all screen sizes
- **Fast**: No build process, no dependencies
- **Accessible**: Semantic HTML, keyboard-friendly

## Customization

Edit `index.html` to:
- Update your contact links (email, GitHub, LinkedIn, etc.)
- Add your projects
- Modify the about section

Edit `style.css` to:
- Change colors (see CSS variables in `:root`)
- Adjust fonts
- Modify layout

## Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Point to main branch, root directory
4. Your CNAME file will handle the custom domain

### Any static host
Just upload `index.html`, `style.css`, and `CNAME` to your web server.

## Old Hugo Files

The old Hugo-based site files are still in the repository:
- `content/`, `layouts/`, `config.toml`, etc.

You can safely delete these if you want to clean up:
```bash
rm -rf content/ layouts/ data/ assets/ resources/ public/ config.toml theme.toml .hugo_build.lock
```

## License

MIT License - See LICENSE file

---

Built with ❤️ and plain text
