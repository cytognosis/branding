# Cytognosis Foundation Icon Assets

Icon collection for the Cytognosis Foundation brand system, designed for consistency across digital and print applications.

## 🚧 Current Status

**This directory is currently in development.** The icon collection is being expanded to include:

### Planned Icon Categories

#### Core Brand Icons
- [ ] **Favicon collection** - Multiple sizes (16x16, 32x32, 48x48, 64x64)
- [ ] **App icons** - iOS, Android, and desktop application icons
- [ ] **Social media icons** - Profile pictures and thumbnails

#### Functional Icons
- [ ] **Navigation icons** - Menu, search, close, back/forward
- [ ] **Action icons** - Download, upload, share, edit, delete
- [ ] **Status icons** - Success, warning, error, info
- [ ] **Interface icons** - Settings, user, notifications, help

#### Scientific Icons
- [ ] **Research icons** - Microscope, DNA, cells, data visualization
- [ ] **Health icons** - Medical symbols, wellness indicators
- [ ] **Technology icons** - Computing, AI, analysis tools

#### Communication Icons
- [ ] **Social platforms** - Branded icons for various social media
- [ ] **Contact methods** - Email, phone, location, web
- [ ] **Document types** - PDF, presentations, reports

## 🎨 Design Specifications

### Style Guidelines
- **Design language**: Consistent with Cytognosis visual identity
- **Style**: Clean, scientific, accessible
- **Color palette**: Aligned with brand colors from `../guidelines/colors.md`
- **Accessibility**: WCAG 2.1 AA compliant contrast ratios

### Technical Specifications
- **Primary format**: SVG for scalability
- **Fallback format**: PNG in multiple sizes
- **Color variants**: Full color, monochrome, and reversed versions
- **Grid system**: Consistent sizing and alignment

### Size Standards
- **Small**: 16x16px (UI elements)
- **Medium**: 24x24px (navigation)
- **Large**: 32x32px (prominent actions)
- **Extra Large**: 48x48px+ (app icons, headers)

## 📋 Usage Guidelines

### Icon Selection
- Use icons consistently across similar functions
- Maintain visual hierarchy with appropriate sizing
- Ensure sufficient contrast with backgrounds
- Test icons at actual usage sizes

### Accessibility Requirements
- Provide alternative text for screen readers
- Ensure 3:1 contrast ratio minimum
- Don't rely solely on icons to convey information
- Include text labels when possible

### File Naming Convention
```
cytognosis-icon-[category]-[name]-[size].[format]

Examples:
cytognosis-icon-nav-menu-24.svg
cytognosis-icon-action-download-32.png
cytognosis-icon-brand-favicon-16.ico
```

## 🔧 Implementation

### Web Usage
```html
<!-- SVG icon -->
<img src="icons/cytognosis-icon-nav-menu-24.svg" alt="Menu" width="24" height="24">

<!-- Inline SVG for styling -->
<svg class="icon icon-menu" width="24" height="24">
  <use href="#icon-menu"></use>
</svg>
```

### CSS Integration
```css
.icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--color-primary-default);
}

.icon-small { width: 1rem; height: 1rem; }
.icon-large { width: 2rem; height: 2rem; }
```

## 📦 Planned Deliverables

### Icon Packages
- [ ] **Web icon font** - Complete icon set as web font
- [ ] **SVG sprite sheet** - Optimized for web performance
- [ ] **React icon library** - Component-based icons for React apps
- [ ] **Design system icons** - Figma/Sketch library for designers

### Documentation
- [ ] **Icon catalog** - Visual reference of all available icons
- [ ] **Usage examples** - Implementation guides for different platforms
- [ ] **Accessibility guide** - Best practices for icon accessibility

## 🚀 Contributing

Icon development follows the brand guidelines established in:
- **[Visual Elements](../../guidelines/visual-elements.md)** - Icon design principles
- **[Colors](../../guidelines/colors.md)** - Approved color palette
- **[Accessibility](../../guidelines/accessibility.md)** - Accessibility requirements

### Design Requirements
1. **Brand alignment** - Icons must reflect Cytognosis visual identity
2. **Accessibility first** - Meet WCAG 2.1 AA standards
3. **Scalability** - Work effectively at all required sizes
4. **Consistency** - Follow established design patterns

## 📞 Questions & Requests

For icon requests or questions:
- **General inquiries**: branding@cytognosis.org
- **Design specifications**: See [visual-elements.md](../../guidelines/visual-elements.md)
- **Implementation help**: Check [web assets documentation](../../web/README.md)

---

**Status**: In active development  
**Priority**: Medium (see [TODO.md](../../TODO.md) for timeline)  
**Last updated**: 2025-01-15
