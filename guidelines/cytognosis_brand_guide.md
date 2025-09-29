# Cytognosis Brand Design Guide v2.0
## Complete Visual Identity, Implementation Standards & Developer Themes

---

## Table of Contents
1. Brand Overview
2. Logo Guidelines
3. Core Brand Palette
4. **Developer Color System (NEW)**
5. Typography
6. Visual Elements
7. Voice & Messaging
8. **Developer Environment Standards v2 (UPDATED)**
9. Accessibility Standards
10. Implementation Resources

---

## 1. Brand Overview

### Mission Statement
"Revolutionize global healthcare from reactive treatment to proactive prevention through pioneering AI-native technologies that detect and prevent disease before symptoms emerge, with particular emphasis on reducing health disparities and ensuring equitable access to life-saving technologies for underserved populations worldwide."

### Brand Taglines
- **Primary:** "Before diagnosis. Before symptoms. There's Cytognosis."
- **Secondary:** "Transforming lives before disease defines them."

### Brand Positioning
Cytognosis represents the intersection of advanced AI technology and human-centered healthcare innovation. Our brand embodies precision, prevention, and hope through a sophisticated yet approachable visual identity that bridges cutting-edge science with human empathy.

---

## 2. Logo Guidelines
*[Previous logo guidelines remain unchanged]*

---

## 3. Core Brand Palette

### Primary Gradient Colors
| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| <span style="color: #4A6AD0">**Deep Blue**</span> | <span style="color: #4A6AD0">`#4A6AD0`</span> | 74, 106, 208 | Gradient start |
| <span style="color: #6585E5">**Cytognosis Blue**</span> | <span style="color: #6585E5">`#6585E5`</span> | 101, 133, 229 | Primary actions |
| <span style="color: #9095F5">**Transition Purple**</span> | <span style="color: #9095F5">`#9095F5`</span> | 144, 149, 245 | Mid-gradient |
| <span style="color: #AA9AFA">**Cytognosis Purple**</span> | <span style="color: #AA9AFA">`#AA9AFA`</span> | 170, 154, 250 | Accent |
| <span style="color: #C0A0FF">**Light Purple**</span> | <span style="color: #C0A0FF">`#C0A0FF`</span> | 192, 160, 255 | Gradient end |
| <span style="color: #E84A8C">**Tech Pink**</span> | <span style="color: #E84A8C">`#E84A8C`</span> | 232, 74, 140 | Critical accent |

---

## 4. Developer Color System (NEW)

### Philosophy
Our developer themes use soothing pastel colors inspired by Catppuccin's Frappé and Macchiato palettes, creating a calm, positive, and optimistic coding environment. We default to dark mode for reduced eye strain while providing both dark and light variants optimized for ADHD, dyslexia, and other neurodivergent conditions.

### Cytognosis Dusk (Primary Dark Theme) - DEFAULT
Inspired by Catppuccin Macchiato with softer pastels for maximum calm

#### Base Colors
| Element | Hex | Contrast Ratio | Purpose |
|---------|-----|----------------|---------|
| Background | #24273a | - | Soft dark indigo |
| Surface | #303446 | - | Gentle raised surface |
| Overlay | #414559 | - | Subtle overlays |

#### Syntax Colors (Soothing Pastels)
| Token Type | Hex | Feeling | WCAG AA |
|------------|-----|---------|----------|
| Keywords | <span style="color: #8caaee">`#8caaee`</span> | <span style="color: #8caaee">Soft sky blue</span> | ✓ |
| Strings | <span style="color: #a6d189">`#a6d189`</span> | <span style="color: #a6d189">Gentle sage</span> | ✓ |
| Functions | <span style="color: #ca9ee6">`#ca9ee6`</span> | <span style="color: #ca9ee6">Soft lavender</span> | ✓ |
| Variables | <span style="color: #f4b8e4">`#f4b8e4`</span> | <span style="color: #f4b8e4">Pastel pink</span> | ✓ |
| Numbers | <span style="color: #ef9f76">`#ef9f76`</span> | <span style="color: #ef9f76">Warm peach</span> | ✓ |
| Comments | <span style="color: #9399b2">`#9399b2`</span> | <span style="color: #9399b2">Calm gray-blue</span> | ✓ |
| Errors | <span style="color: #e78284">`#e78284`</span> | <span style="color: #e78284">Soft coral</span> | ✓ |
| Warnings | <span style="color: #e5c890">`#e5c890`</span> | <span style="color: #e5c890">Gentle yellow</span> | ✓ |
| Success | <span style="color: #a6d189">`#a6d189`</span> | <span style="color: #a6d189">Mint green</span> | ✓ |

### Cytognosis Dawn (Light Theme)
Soft pastels on a warm, calming light background

#### Base Colors
| Element | Hex | Contrast Ratio | Purpose |
|---------|-----|----------------|---------|
| Background | #eff1f5 | - | Soft cloud white |
| Surface | #e6e9ef | - | Gentle gray |
| Overlay | #dce0e8 | - | Light overlays |
| Text Primary | #4c4f69 | 3.8:1 | Soft charcoal |
| Text Secondary | #6c6f85 | 3.2:1 | Muted purple-gray |
| Text Muted | #9ca0b0 | 2.9:1 | Light gray |

#### Syntax Colors (Light Pastels)
| Token Type | Hex | Contrast | Feeling |
|------------|-----|----------|---------|
| Keywords | #7287fd | 3.3:1 | Periwinkle |
| Strings | #40a02b | 3.8:1 | Fresh green |
| Functions | #8839ef | 3.4:1 | Soft purple |
| Variables | #ea76cb | 3.2:1 | Rose pink |
| Numbers | #fe640b | 3.6:1 | Soft orange |
| Comments | #8c8fa1 | 3.1:1 | Gentle gray |
| Errors | #e64553 | 3.7:1 | Warm red |
| Warnings | #df8e1d | 3.5:1 | Golden |
| Success | #40a02b | 3.8:1 | Spring green |

### Semantic Color Tokens
| Semantic Role | Dark Mode (Dusk) | Light Mode (Dawn) | Emotion |
|---------------|------------------|-------------------|---------|
| primary.default | #8caaee | #7287fd | Trust, calm |
| primary.hover | #99b8f5 | #8396ff | Gentle interaction |
| accent.default | #f4b8e4 | #ea76cb | Joy, optimism |
| accent.muted | #e5a3d5 | #dd7878 | Soft warmth |
| surface.raised | #363a4f | #e6e9ef | Subtle elevation |
| border.default | #494d64 | #ccd0da | Soft boundaries |
| border.focus | #8caaee | #7287fd | Gentle attention |

### Cytognosis Brand Palette (Softened Pastels)
| Color Name | Original | Pastel Version | Usage |
|------------|----------|----------------|-------|
| Deep Blue | #4A6AD0 | #8caaee | Primary actions |
| Cytognosis Blue | #6585E5 | #89b4fa | Links, highlights |
| Transition Purple | #9095F5 | #ca9ee6 | Functions, methods |
| Cytognosis Purple | #AA9AFA | #cba6f7 | Variables |
| Light Purple | #C0A0FF | #f4b8e4 | Accents |
| Tech Pink | #E84A8C | #e78284 | Errors (softened) |

---

## 5. Typography

### Font Stack
```css
/* Code Editor */
font-family: 'Recursive Mono', 'JetBrains Mono', 'Cascadia Code', 
             'Fira Code', monospace;

/* UI Elements */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', sans-serif;

/* Documentation */
font-family: 'Lexend', 'Inter', sans-serif; /* Accessibility mode */
```

### Typography Settings for Neurodiversity
```css
/* Optimized for ADHD/Dyslexia */
--line-height-code: 1.8;      /* 180% for code */
--line-height-ui: 1.6;         /* 160% for UI text */
--letter-spacing: 0.05em;      /* Increased spacing */
--font-size-min: 14px;         /* Minimum readable */
--font-size-default: 16px;     /* Comfortable default */
--max-line-length: 80ch;       /* Optimal for scanning */
```

---

## 6. Visual Elements
*[Previous visual elements section remains unchanged]*

---

## 7. Voice & Messaging
*[Previous voice & messaging section remains unchanged]*

---

## 8. Developer Environment Standards v2

### Cytognosis Developer Theme System

#### Core Principles
1. **Dual Theme Support**: Both dark (Midnight) and light (Dawn) modes
2. **Semantic Consistency**: Colors maintain meaning across themes
3. **Reduced Cognitive Load**: Muted, harmonious palettes
4. **Accessibility First**: Optimized contrast ratios (3:1-4:1)
5. **Brand Integration**: Cytognosis gradient incorporated subtly

#### VS Code Configuration
```json
{
  "workbench.colorTheme": "Cytognosis Dusk",  // Default dark theme
  "editor.fontFamily": "'Recursive Mono', 'JetBrains Mono'",
  "editor.fontSize": 16,
  "editor.lineHeight": 28,
  "editor.letterSpacing": 0.5,
  "editor.tokenColorCustomizations": {
    "[Cytognosis Dusk]": {
      "textMateRules": [
        {
          "scope": "comment",
          "settings": {
            "foreground": "#9399b2",
            "fontStyle": "italic"
          }
        }
      ]
    }
  },
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.semanticHighlighting.enabled": true
}
```

#### Terminal Configuration (Starship)
```toml
# Cytognosis Starship Preset - Default to Dusk (dark)
palette = "cytognosis_dusk"  # Default dark theme
# palette = "cytognosis_dawn"  # Uncomment for light theme
add_newline = true

[palettes.cytognosis_dusk]
# Soothing pastel colors for dark background
rosewater = "#f2d5cf"
flamingo = "#eebebe"
pink = "#f4b8e4"
mauve = "#ca9ee6"
red = "#e78284"
maroon = "#ea999c"
peach = "#ef9f76"
yellow = "#e5c890"
green = "#a6d189"
teal = "#81c8be"
sky = "#99d1db"
sapphire = "#85c1dc"
blue = "#8caaee"
lavender = "#babbf1"
text = "#cdd6f4"
subtext1 = "#bac2de"
subtext0 = "#a6adc8"
overlay2 = "#9399b2"
overlay1 = "#838ba7"
overlay0 = "#737994"
surface2 = "#626880"
surface1 = "#51576d"
surface0 = "#414559"
base = "#303446"
mantle = "#292c3c"
crust = "#232634"
```

### Accessibility Features

#### Mandatory Settings
- **Line Height**: 1.8x minimum for code
- **Letter Spacing**: 0.05em (0.5px at 14px)
- **Bracket Pair Colorization**: Always enabled
- **Semantic Highlighting**: Required for variable tracking
- **Font Size**: 14px minimum, 16px recommended

#### Optional Enhancements
- **Minimap**: Disabled by default (reduces distraction)
- **Breadcrumbs**: Enabled for navigation context
- **Sticky Scroll**: Enabled for scope awareness
- **Word Wrap**: Enabled at 80 characters

---

## 9. Accessibility Standards

### Neurodiversity Support
- **Contrast Ratios**: 3:1-4:1 (optimal for dyslexia)
- **Color Count**: Maximum 8 distinct colors per view
- **Animation**: Reduced or disabled by default
- **Focus Indicators**: 3px solid border in brand blue
- **Error States**: Never rely solely on color

### Testing Requirements
- [ ] Validate with WAVE or axe DevTools
- [ ] Test with screen readers
- [ ] Verify with colorblind simulators
- [ ] User test with neurodiverse developers
- [ ] Monitor with analytics for accessibility settings usage

---

## 10. Implementation Resources

### Quick Start
```bash
# Install Cytognosis themes
git clone https://github.com/cytognosis/themes
cd themes
./install.sh

# Available for:
# - VS Code
# - Starship
# - Geany
# - Terminal.app / iTerm2
# - Vim / Neovim
```

### Color Format Exports
- **VS Code**: JSON theme files
- **Starship**: TOML configuration
- **Geany**: XML color schemes
- **CSS/SCSS**: Custom properties
- **Figma**: Shared libraries
- **Adobe**: ASE swatches

### Support & Feedback
- **Theme Issues**: themes@cytognosis.org
- **Accessibility**: accessibility@cytognosis.org
- **Brand Questions**: brand@cytognosis.org

---

**Version:** 2.0  
**Updated:** September 2025  
**Status:** Active  
© 2025 Cytognosis Foundation. All rights reserved.
