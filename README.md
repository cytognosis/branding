# 🌌 Cytognosis Foundation Branding

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Brand Guidelines](https://img.shields.io/badge/Brand-Guidelines-blue.svg)](./guidelines/)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](./guidelines/accessibility.md)

**Official visual identity and design system** for the Cytognosis Foundation - a comprehensive branding repository that provides everything needed to implement consistent, accessible brand experiences across all touchpoints.

## ✨ What's Included

- **🎨 Complete Visual Identity** - Logos, colors, typography, and layout systems
- **♿ Accessibility-First Design** - WCAG 2.1 AA compliant with neurodiversity support
- **💻 Developer Experience** - Themes for VS Code, terminals, and development tools
- **🌐 Web Assets** - Production-ready CSS, components, and templates
- **📋 Brand Guidelines** - Comprehensive documentation with visual examples
- **📄 Templates** - Ready-to-use assets for presentations, documents, and social media

## 🚀 Quick Start

### For Designers
```bash
# Clone the repository
git clone https://github.com/cytognosis/branding.git

# Access logos and brand assets
cd branding/logos/
# Use SVG files for scalable graphics, PNG for raster needs
```

### For Developers
```bash
# Use web assets in your project
<link rel="stylesheet" href="branding/web/css/brand-variables.css">
<link rel="stylesheet" href="branding/web/css/base.css">

# Install VS Code theme
# Copy branding/themes/vscode/cytognosis_vscode_theme.json to your VS Code themes
```

### For Content Creators
- **Brand Guidelines**: Start with [`guidelines/brand-overview.md`](./guidelines/brand-overview.md)
- **Colors**: Visual color system in [`guidelines/colors.md`](./guidelines/colors.md)
- **Templates**: Ready-to-use templates in [`templates/`](./templates/) *(coming soon)*

## 📖 Documentation

All brand guidelines include visual examples and are optimized for quick reference:

- **[Brand Overview](./guidelines/brand-overview.md)** - Mission, values, and brand voice
- **[Colors](./guidelines/colors.md)** - Complete color system with visual styling
- **[Typography](./guidelines/typography.md)** - Font stacks and accessibility features
- **[Logo Guidelines](./guidelines/logo-guidelines.md)** - Usage rules and specifications
- **[Accessibility](./guidelines/accessibility.md)** - WCAG compliance and neurodiversity support
- **[Web Assets](./web/README.md)** - Implementation guide for web developers

## 🎯 Brand Principles

1. **🔬 Scientific Clarity** - Visuals evoke trust, precision, and rigor
2. **👥 Human-Centered** - Emphasize health, care, and accessibility
3. **🌌 Cosmic but Grounded** - Bridge the cellular with the universal
4. **♿ Accessible by Design** - Optimized for neurodivergence and visual clarity
5. **🎨 Consistency Across Mediums** - Unified style reduces cognitive load

## 📁 Repository Structure  

---

## 📖 Contents

### 🎨 Visual Identity
- **[`logos/`](./logos/)** - Complete logo system with multiple formats
  - `svg/` - Vector logos (primary format)
  - `png/` - Raster logos for various applications
  - `arc_version/` - Archive versions and variants

### 📋 Brand Guidelines  
- **[`guidelines/`](./guidelines/)** - Complete brand documentation
  - [`colors.md`](./guidelines/colors.md) - Visual color system with live color previews
  - [`typography.md`](./guidelines/typography.md) - Font stacks with neurodiversity support
  - [`accessibility.md`](./guidelines/accessibility.md) - WCAG 2.1 AA compliance guidelines
  - [`layout.md`](./guidelines/layout.md) - Grid systems and responsive design
  - [`logo-guidelines.md`](./guidelines/logo-guidelines.md) - Complete logo usage specifications

### 🎯 Developer Experience
- **[`themes/`](./themes/)** - Development environment themes
  - [`vscode/`](./themes/vscode/) - VS Code theme with soothing pastels
  - [`starship/`](./themes/starship/) - Cross-shell prompt configuration
  - [`geany/`](./themes/geany/) - Lightweight IDE theme

### 📄 Templates & Assets
- **[`templates/`](./templates/)** - Ready-to-use branded templates *(in development)*
  - `slides/` - Presentation templates *(coming soon)*
  - `documents/` - Document templates *(coming soon)*
  - `social/` - Social media assets *(coming soon)*
- **[`assets/`](./assets/)** - Additional brand assets
  - [`icons/`](./assets/icons/) - Icon collection *(expanding)*

### 🌐 Web Assets
- **[`web/`](./web/)** - Production-ready web development assets
  - [`css/`](./web/css/) - Brand-aligned stylesheets with CSS custom properties
  - [`js/`](./web/js/) - JavaScript components and utilities
  - [`html/`](./web/html/) - HTML templates and examples
  - [`assets/`](./web/assets/) - Web-optimized images and media
  - [`fonts/`](./web/fonts/) - Web font files *(coming soon)*
  - [`components/`](./web/components/) - Reusable UI components

### 📖 Brand Story
- **[`story/`](./story/)** - Narrative elements and messaging
  - [`tagline.md`](./story/tagline.md) - Mission statements and tagline options
  - [`metaphors.md`](./story/metaphors.md) - Visual and storytelling themes
  - [`iconography.md`](./story/iconography.md) - Iconographic elements and meanings  

## 🎨 Key Features

### ♿ Accessibility-First Design
- **WCAG 2.1 AA compliant** throughout all assets
- **Neurodiversity support** - Optimized for ADHD, dyslexia, and other conditions
- **Contrast ratios** - Enhanced 3:1-4:1 ratios for better readability
- **Reduced motion** support for accessibility preferences

### 🎨 Visual Color System
- **Live color previews** in all documentation
- **Dual themes** - Cytognosis Dusk (dark) and Dawn (light)
- **Soothing pastels** designed for extended use
- **CSS custom properties** for easy implementation

### 💻 Developer Experience
- **Modern web standards** - CSS custom properties, responsive design
- **Framework agnostic** - Works with React, Vue, WordPress, and more
- **Performance optimized** - Efficient loading and rendering
- **Modular architecture** - Use only what you need

## 📋 Current Status

### ✅ Complete
- Brand guidelines with visual styling
- Logo specifications and assets
- Web CSS framework with components
- Developer themes (VS Code, Starship, Geany)
- Accessibility documentation
- Legal framework (licensing, trademarks)

### 🚧 In Development
- Template library (slides, documents, social media)
- Expanded icon collection
- Additional editor themes
- Web font integration

See [`TODO.md`](./TODO.md) for detailed development roadmap.

## 🤝 Usage & Licensing

### Code & Configurations
**MIT Licensed** - Freely use, modify, and distribute:
- CSS stylesheets and web components
- Developer themes and configurations
- Template structures and layouts

### Brand Assets
**Trademark Protected** - Usage governed by [`TRADEMARK.md`](./TRADEMARK.md):
- Cytognosis name and logos
- Brand colors and visual identity
- Requires permission for commercial use

### Attribution
See [`ATTRIBUTION.md`](./ATTRIBUTION.md) for:
- Citation guidelines for publications
- Co-branding requirements
- Proper attribution formats

## 🛠️ Implementation Examples

### Web Development
```html
<!-- Basic implementation -->
<link rel="stylesheet" href="css/brand-variables.css">
<link rel="stylesheet" href="css/base.css">
<button class="btn btn-primary">Get Started</button>
```

### React/Next.js
```jsx
import '../css/brand-variables.css';
import '../css/base.css';

function MyComponent() {
  return <button className="btn btn-primary">Get Started</button>;
}
```

### CSS Custom Properties
```css
.my-component {
  background-color: var(--color-primary-default);
  color: var(--dawn-text-primary);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}
```

## 🔗 Related Resources

- **[Cytognosis Foundation](https://cytognosis.org)** - Main website
- **[Research Tools](https://github.com/cytognosis)** - Open source tools and datasets
- **[Documentation](https://docs.cytognosis.org)** - Technical documentation

## 📞 Support

- **Brand Guidelines**: Questions about implementation → [`guidelines/`](./guidelines/)
- **Technical Issues**: Web assets and themes → [`web/README.md`](./web/README.md)
- **Licensing**: Usage permissions → [`TRADEMARK.md`](./TRADEMARK.md)
- **General**: Contact → branding@cytognosis.org

---

**Cytognosis Foundation** - Mapping Health Before Disease Begins  
*Building accessible, scientifically-grounded tools for understanding human health*

