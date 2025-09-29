# Typography Guidelines

## Font Stack

### Code Editor
```css
font-family: 'Recursive Mono', 'JetBrains Mono', 'Cascadia Code', 
             'Fira Code', monospace;
```

### UI Elements
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', sans-serif;
```

### Documentation
```css
font-family: 'Lexend', 'Inter', sans-serif; /* Accessibility mode */
```

## Typography Settings for Neurodiversity

```css
/* Optimized for ADHD/Dyslexia */
--line-height-code: 1.8;      /* 180% for code */
--line-height-ui: 1.6;         /* 160% for UI text */
--letter-spacing: 0.05em;      /* Increased spacing */
--font-size-min: 14px;         /* Minimum readable */
--font-size-default: 16px;     /* Comfortable default */
--max-line-length: 80ch;       /* Optimal for scanning */
```

## Type Scale

### Headings
- **H1**: 48px / 3rem (Desktop), 36px / 2.25rem (Mobile)
- **H2**: 36px / 2.25rem (Desktop), 28px / 1.75rem (Mobile)
- **H3**: 28px / 1.75rem (Desktop), 24px / 1.5rem (Mobile)
- **H4**: 24px / 1.5rem (Desktop), 20px / 1.25rem (Mobile)
- **H5**: 20px / 1.25rem (Desktop), 18px / 1.125rem (Mobile)
- **H6**: 18px / 1.125rem (Desktop), 16px / 1rem (Mobile)

### Body Text
- **Large**: 18px / 1.125rem
- **Regular**: 16px / 1rem
- **Small**: 14px / 0.875rem
- **Caption**: 12px / 0.75rem

## Line Height & Spacing

- **Code**: 1.8x font size (minimum for accessibility)
- **UI Text**: 1.6x font size
- **Headings**: 1.2x font size
- **Body Text**: 1.5x font size
- **Captions**: 1.4x font size

## Developer Environment Settings

### Mandatory Settings
- **Line Height**: 1.8x minimum for code
- **Letter Spacing**: 0.05em (0.5px at 14px)
- **Font Size**: 14px minimum, 16px recommended
- **Max Line Length**: 80 characters for optimal scanning

### Recommended Fonts

#### Code Editors
1. **Recursive Mono** - Variable font with excellent readability
2. **JetBrains Mono** - Designed for developers, great ligatures
3. **Cascadia Code** - Microsoft's developer font
4. **Fira Code** - Popular choice with ligature support

#### UI and Documentation
1. **Inter** - Excellent for UI, highly legible
2. **Lexend** - Specifically designed for reading proficiency
3. **System fonts** - Native platform fonts as fallback

## Accessibility Considerations

### ADHD/Dyslexia Friendly
- Use sans-serif fonts for better readability
- Avoid italics for large blocks of text
- Maintain generous line spacing (1.8x for code, 1.6x for UI)
- Use left-aligned text (avoid justified text)
- Increased letter spacing (0.05em minimum)

### General Accessibility
- Minimum 14px font size for code, 16px for body text
- High contrast between text and background
- Avoid all-caps for long text passages
- Provide sufficient white space around text blocks
- Support for system font size preferences
