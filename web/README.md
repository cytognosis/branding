# Web Branding Assets

This directory contains all web development assets for implementing Cytognosis Foundation branding on websites and web applications, organized according to modern web development best practices.

## Directory Structure

### Core Stylesheets
- **`css/brand-variables.css`** - Official brand colors, typography, and design tokens
- **`css/base.css`** - Foundation styles, reset, and accessibility features
- **`css/components/`** - Component-specific stylesheets
  - `buttons.css` - Button variants and states
  - `forms.css` - Form elements and validation styles
  - `navigation.css` - Header, footer, and navigation components
  - `cards.css` - Card layouts and content blocks
- **`css/utilities/`** - Utility classes and helpers
- **`css/themes/`** - Theme variations (dark/light mode)

### JavaScript
- **`js/main.js`** - Main application JavaScript from website
- **`js/components/`** - Reusable JavaScript components
- **`js/utilities/`** - Helper functions and utilities

### HTML Templates
- **`html/index.html`** - Main website template
- **`html/components/`** - Reusable HTML components
- **`html/layouts/`** - Page layout templates

### Assets
- **`assets/images/`** - Web-optimized images and graphics
- **`assets/icons/`** - Icon sets and SVG assets
- **`assets/logos/`** - Logo files optimized for web

### Fonts
- **`fonts/woff2/`** - Modern web font format (primary)
- **`fonts/woff/`** - Fallback web font format

### Components
- **`components/navigation/`** - Header and navigation components
- **`components/forms/`** - Form templates and validation
- **`components/layout/`** - Grid and layout components

## Quick Start

### Basic Implementation
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cytognosis Foundation</title>
  
  <!-- Core brand styles -->
  <link rel="stylesheet" href="css/brand-variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components/buttons.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

### CSS Custom Properties
All styles use CSS custom properties for easy theming:
```css
/* Use brand colors */
.my-component {
  background-color: var(--color-primary-default);
  color: var(--dawn-text-primary);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}
```

## Brand Alignment

### Color System
- **Automatic theme switching** based on user preferences
- **Accessibility-first** with WCAG AA compliance
- **Neurodiversity support** with optimized contrast ratios (3:1-4:1)

### Typography
- **Font stacks** aligned with brand guidelines
- **Accessibility features** including dyslexia-friendly spacing
- **Responsive scaling** across all device sizes

### Components
- **Consistent styling** across all interactive elements
- **Focus management** for keyboard navigation
- **Reduced motion** support for accessibility

## Browser Support

### Modern Browsers
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Progressive Enhancement
- Graceful fallbacks for older browsers
- CSS custom properties with fallbacks
- Modern features with polyfill support

## Performance Optimization

### CSS
- **Modular architecture** for selective loading
- **Critical CSS** inlining support
- **Utility-first approach** for minimal file sizes

### Images
- **WebP format** with JPEG/PNG fallbacks
- **Responsive images** with srcset attributes
- **Lazy loading** implementation ready

### Fonts
- **WOFF2 format** for modern browsers
- **Font display: swap** for performance
- **Preload hints** for critical fonts

## Accessibility Features

### Built-in Support
- **WCAG 2.1 AA compliance** throughout
- **Keyboard navigation** for all interactive elements
- **Screen reader optimization** with semantic markup
- **Reduced motion** preferences respected
- **High contrast** mode support

### Testing
- Use provided accessibility checklist
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Validate with automated tools (axe, WAVE)

## Integration Examples

### React/Next.js
```jsx
import '../css/brand-variables.css';
import '../css/base.css';

function MyComponent() {
  return (
    <button className="btn btn-primary">
      Get Started
    </button>
  );
}
```

### Vue.js
```vue
<template>
  <button class="btn btn-primary">
    Get Started
  </button>
</template>

<style>
@import '../css/brand-variables.css';
@import '../css/base.css';
</style>
```

### WordPress
```php
// In functions.php
function enqueue_cytognosis_styles() {
    wp_enqueue_style('cytognosis-brand', get_template_directory_uri() . '/css/brand-variables.css');
    wp_enqueue_style('cytognosis-base', get_template_directory_uri() . '/css/base.css');
}
add_action('wp_enqueue_scripts', 'enqueue_cytognosis_styles');
```

## Customization Guidelines

### Extending Styles
- Use CSS custom properties for theme customization
- Follow the established naming conventions
- Maintain accessibility standards in custom components

### Brand Compliance
- Always use official brand colors from `brand-variables.css`
- Follow typography guidelines from brand documentation
- Test custom components with brand guidelines checklist

## Support

For questions about web asset implementation:
- **Technical Issues**: Check `implementation-resources.md`
- **Brand Compliance**: Refer to brand guidelines in `/guidelines/`
- **Accessibility**: See `accessibility.md` for detailed requirements
