# Layout Guidelines

## Grid System

### Desktop Grid
- **Columns**: 12-column grid
- **Gutter**: 24px between columns
- **Margins**: 48px on each side
- **Max width**: 1200px

### Tablet Grid
- **Columns**: 8-column grid
- **Gutter**: 20px between columns
- **Margins**: 32px on each side

### Mobile Grid
- **Columns**: 4-column grid
- **Gutter**: 16px between columns
- **Margins**: 16px on each side

## Spacing System

### Base Unit
- **Base**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Component Spacing
- **Micro**: 4px (internal component spacing)
- **Small**: 8px (related elements)
- **Medium**: 16px (component groups)
- **Large**: 24px (section spacing)
- **XLarge**: 32px (major sections)
- **XXLarge**: 48px+ (page sections)

## Logo Safe Zones

### Primary Logo
- **Minimum clear space**: Equal to the height of the logo mark
- **Minimum size**: 32px height (digital), 0.5 inch height (print)

### Icon/Favicon
- **Minimum clear space**: 25% of icon size on all sides
- **Minimum size**: 16px × 16px

## Responsive Breakpoints

### Standard Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Content Breakpoints
- **Small**: 480px
- **Medium**: 768px
- **Large**: 1024px
- **XLarge**: 1200px

## Layout Patterns

### Page Structure
```
Header (navigation, logo)
├── Hero/Banner section
├── Main content area
│   ├── Primary content
│   └── Sidebar (optional)
└── Footer
```

### Content Hierarchy
1. **Page title** (H1)
2. **Section headings** (H2)
3. **Subsection headings** (H3-H6)
4. **Body content**
5. **Supporting elements** (captions, metadata)

## Accessibility Layout Considerations

### Focus Management
- Maintain logical tab order
- Ensure focus indicators are visible
- Provide skip links for keyboard users

### Content Structure
- Use semantic HTML elements
- Maintain proper heading hierarchy
- Ensure content is readable without CSS

### Responsive Design
- Design mobile-first
- Ensure touch targets are at least 44px
- Test across different screen sizes and orientations
