# Assets Directory
## Static Resources for the Website

This directory contains all static assets used throughout the site.

---

## 📁 Structure

```
assets/
├── css/           # Stylesheets
│   ├── style.css      # Main styles (GeoCities aesthetic)
│   └── themes.css     # Color theme variations
│
├── js/            # JavaScript files
│   ├── main.js        # Core functionality
│   ├── terminal.js    # Terminal emulator
│   ├── quotes.js      # Quote generator
│   └── guestbook.js   # Guestbook system
│
└── images/        # Images and icons (future)
```

---

## 🎨 CSS Files

### `style.css`
**Purpose:** Main stylesheet with GeoCities aesthetic  
**Contains:**
- Base styles and reset
- Typography (Times New Roman, Verdana, Comic Sans)
- Layout system (containers, grids)
- Component styles (buttons, forms, tables)
- Retro effects (marquee, blink)

**Key Features:**
- Bright color palette
- Beveled borders (ridge/outset)
- Tiled backgrounds
- 90s-style buttons
- HTML table layouts

### `themes.css`
**Purpose:** Color theme variations  
**Contains:**
- Default theme (bright & chaotic)
- Neon Paradise theme
- Sunset Boulevard theme
- Bubblegum Dream theme
- Lime Explosion theme
- Theme switcher styles

---

## ⚙️ JavaScript Files

### `main.js`
**Purpose:** Core website functionality  
**Features:**
- Theme switching with localStorage persistence
- Hit counter with animation
- Konami code detection
- Scroll effects
- Glitch effects
- Global state management

**Dependencies:** None (vanilla JS)

### `terminal.js`
**Purpose:** Fake terminal emulator  
**Features:**
- 15+ working commands (help, ls, cat, cowsay, hack, etc.)
- Command history (↑/↓ arrows)
- Tab autocomplete
- Simulated filesystem
- Output formatting

**Usage:** Include on pages with `.terminal-window` elements

### `quotes.js`
**Purpose:** Random quote generator  
**Features:**
- 30+ curated quotes
- Category filtering (Linux, Privacy, Hacking, etc.)
- Random selection
- Display formatting

**Usage:** Include on pages with `#quote-container` elements

### `guestbook.js`
**Purpose:** Client-side guestbook system  
**Features:**
- localStorage-based persistence
- Form validation
- Entry display
- Sample entries included
- CRUD operations

**Usage:** Include on guestbook page

---

## 🖼️ Images Directory

**Status:** Currently empty  
**Future Use:**
- Retro GIF animations
- Web badges (88x31 buttons)
- Background textures
- Icon sets
- ASCII art images

---

## 📝 For AI Agents

### Adding New CSS
1. Add to `style.css` for global styles
2. Add to `themes.css` for theme-specific colors
3. Use existing class naming conventions
4. Test across all themes

### Adding New JavaScript
1. Create new file in `js/` directory
2. Use vanilla JavaScript (no frameworks)
3. Follow existing code structure
4. Add comments for clarity
5. Include in relevant HTML pages

### Modifying Themes
1. Edit `themes.css`
2. Follow existing theme structure
3. Update theme switcher options in HTML
4. Test all color combinations

---

## 🎯 Best Practices

### CSS
- Use semantic class names
- Avoid inline styles (except for dynamic content)
- Keep specificity low
- Group related styles together
- Comment complex sections

### JavaScript
- Keep functions small and focused
- Use descriptive variable names
- Handle errors gracefully
- Avoid global namespace pollution
- Comment non-obvious code

### Performance
- Minimize file sizes
- Avoid external dependencies
- Use efficient selectors
- Lazy load when possible
- Cache static assets

---

## 🔧 Maintenance

### Regular Tasks
- Review and optimize CSS
- Test JavaScript across browsers
- Update quotes periodically
- Add new themes as desired
- Optimize images when added

### When Adding Features
1. Check if existing code can be reused
2. Follow established patterns
3. Update this README
4. Test thoroughly
5. Document changes

---

## 📊 File Sizes

- `style.css`: ~25KB
- `themes.css`: ~8KB
- `main.js`: ~8KB
- `terminal.js`: ~12KB
- `quotes.js`: ~6KB
- `guestbook.js`: ~7KB

**Total:** ~66KB (uncompressed)

---

## 🔗 Related Documentation

- [Main README](../README.md)
- [Quick Start Guide](../docs/QUICK_START.md)
- [Content Templates](../docs/CONTENT_TEMPLATES.md)

---

**Keep it simple. Keep it retro. Keep it fun.**
