# CSS Stylesheets

This directory contains CSS files for implementing Cytognosis Foundation branding on web properties.

## Files Structure

- **`brand.css`** - Core brand styles (colors, typography, spacing)
- **`components.css`** - Reusable UI components
- **`layout.css`** - Grid system and layout utilities
- **`accessibility.css`** - Accessibility-focused styles
- **`themes/`** - Alternative theme variations

## Usage

### Basic Implementation
```html
<link rel="stylesheet" href="css/brand.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/accessibility.css">
```

### CSS Custom Properties
All styles use CSS custom properties (variables) for easy theming:
```css
:root {
  --brand-primary: #000000;
  --brand-secondary: #000000;
  --font-family-primary: 'Font Name', sans-serif;
}
```

## Browser Support
- Modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
- Progressive enhancement for older browsers
- Fallbacks provided for critical styles
