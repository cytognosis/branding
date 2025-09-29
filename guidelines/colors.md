# Color Guidelines

## Core Brand Palette

### Primary Gradient Colors
| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| <span style="color: #4A6AD0">**Deep Blue**</span> | <span style="color: #4A6AD0">`#4A6AD0`</span> | 74, 106, 208 | Gradient start |
| <span style="color: #6585E5">**Cytognosis Blue**</span> | <span style="color: #6585E5">`#6585E5`</span> | 101, 133, 229 | Primary actions |
| <span style="color: #9095F5">**Transition Purple**</span> | <span style="color: #9095F5">`#9095F5`</span> | 144, 149, 245 | Mid-gradient |
| <span style="color: #AA9AFA">**Cytognosis Purple**</span> | <span style="color: #AA9AFA">`#AA9AFA`</span> | 170, 154, 250 | Accent |
| <span style="color: #C0A0FF">**Light Purple**</span> | <span style="color: #C0A0FF">`#C0A0FF`</span> | 192, 160, 255 | Gradient end |
| <span style="color: #E84A8C">**Tech Pink**</span> | <span style="color: #E84A8C">`#E84A8C`</span> | 232, 74, 140 | Critical accent |

## Developer Color System

### Philosophy
Our developer themes use soothing pastel colors inspired by Catppuccin's Frappé and Macchiato palettes, creating a calm, positive, and optimistic coding environment. We default to dark mode for reduced eye strain while providing both dark and light variants optimized for ADHD, dyslexia, and other neurodivergent conditions.

### Cytognosis Dusk (Primary Dark Theme) - DEFAULT
Inspired by Catppuccin Macchiato with softer pastels for maximum calm

#### Base Colors
| Element | Hex | Contrast Ratio | Purpose |
|---------|-----|----------------|----------|
| Background | <span style="color: #24273a; background: #f0f0f0; padding: 2px 4px; border-radius: 3px;">`#24273a`</span> | - | Soft dark indigo |
| Surface | <span style="color: #303446; background: #f0f0f0; padding: 2px 4px; border-radius: 3px;">`#303446`</span> | - | Gentle raised surface |
| Overlay | <span style="color: #414559; background: #f0f0f0; padding: 2px 4px; border-radius: 3px;">`#414559`</span> | - | Subtle overlays |
| Text Primary | <span style="color: #cdd6f4; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#cdd6f4`</span> | 3.9:1 | Soft lavender-white |
| Text Secondary | <span style="color: #bac2de; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#bac2de`</span> | 3.4:1 | Muted text |
| Text Muted | <span style="color: #a6adc8; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#a6adc8`</span> | 2.9:1 | Disabled states |

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
|---------|-----|----------------|----------|
| Background | <span style="color: #eff1f5; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#eff1f5`</span> | - | Soft cloud white |
| Surface | <span style="color: #e6e9ef; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#e6e9ef`</span> | - | Gentle gray |
| Overlay | <span style="color: #dce0e8; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#dce0e8`</span> | - | Light overlays |
| Text Primary | <span style="color: #4c4f69">`#4c4f69`</span> | 3.8:1 | Soft charcoal |
| Text Secondary | <span style="color: #6c6f85">`#6c6f85`</span> | 3.2:1 | Muted purple-gray |
| Text Muted | <span style="color: #9ca0b0">`#9ca0b0`</span> | 2.9:1 | Light gray |

#### Syntax Colors (Light Pastels)
| Token Type | Hex | Contrast | Feeling |
|------------|-----|----------|----------|
| Keywords | <span style="color: #7287fd">`#7287fd`</span> | 3.3:1 | <span style="color: #7287fd">Periwinkle</span> |
| Strings | <span style="color: #40a02b">`#40a02b`</span> | 3.8:1 | <span style="color: #40a02b">Fresh green</span> |
| Functions | <span style="color: #8839ef">`#8839ef`</span> | 3.4:1 | <span style="color: #8839ef">Soft purple</span> |
| Variables | <span style="color: #ea76cb">`#ea76cb`</span> | 3.2:1 | <span style="color: #ea76cb">Rose pink</span> |
| Numbers | <span style="color: #fe640b">`#fe640b`</span> | 3.6:1 | <span style="color: #fe640b">Soft orange</span> |
| Comments | <span style="color: #8c8fa1">`#8c8fa1`</span> | 3.1:1 | <span style="color: #8c8fa1">Gentle gray</span> |
| Errors | <span style="color: #e64553">`#e64553`</span> | 3.7:1 | <span style="color: #e64553">Warm red</span> |
| Warnings | <span style="color: #df8e1d">`#df8e1d`</span> | 3.5:1 | <span style="color: #df8e1d">Golden</span> |
| Success | <span style="color: #40a02b">`#40a02b`</span> | 3.8:1 | <span style="color: #40a02b">Spring green</span> |

### Semantic Color Tokens
| Semantic Role | Dark Mode (Dusk) | Light Mode (Dawn) | Emotion |
|---------------|------------------|-------------------|----------|
| primary.default | <span style="color: #8caaee">`#8caaee`</span> | <span style="color: #7287fd">`#7287fd`</span> | Trust, calm |
| primary.hover | <span style="color: #99b8f5">`#99b8f5`</span> | <span style="color: #8396ff">`#8396ff`</span> | Gentle interaction |
| accent.default | <span style="color: #f4b8e4">`#f4b8e4`</span> | <span style="color: #ea76cb">`#ea76cb`</span> | Joy, optimism |
| accent.muted | <span style="color: #e5a3d5">`#e5a3d5`</span> | <span style="color: #dd7878">`#dd7878`</span> | Soft warmth |
| surface.raised | <span style="color: #363a4f; background: #f0f0f0; padding: 2px 4px; border-radius: 3px;">`#363a4f`</span> | <span style="color: #e6e9ef; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#e6e9ef`</span> | Subtle elevation |
| border.default | <span style="color: #494d64; background: #f0f0f0; padding: 2px 4px; border-radius: 3px;">`#494d64`</span> | <span style="color: #ccd0da; background: #2a2a2a; padding: 2px 4px; border-radius: 3px;">`#ccd0da`</span> | Soft boundaries |
| border.focus | <span style="color: #8caaee">`#8caaee`</span> | <span style="color: #7287fd">`#7287fd`</span> | Gentle attention |

### Cytognosis Brand Palette (Softened Pastels)
| Color Name | Original | Pastel Version | Usage |
|------------|----------|----------------|--------|
| <span style="color: #4A6AD0">**Deep Blue**</span> | <span style="color: #4A6AD0">`#4A6AD0`</span> | <span style="color: #8caaee">`#8caaee`</span> | Primary actions |
| <span style="color: #6585E5">**Cytognosis Blue**</span> | <span style="color: #6585E5">`#6585E5`</span> | <span style="color: #89b4fa">`#89b4fa`</span> | Links, highlights |
| <span style="color: #9095F5">**Transition Purple**</span> | <span style="color: #9095F5">`#9095F5`</span> | <span style="color: #ca9ee6">`#ca9ee6`</span> | Functions, methods |
| <span style="color: #AA9AFA">**Cytognosis Purple**</span> | <span style="color: #AA9AFA">`#AA9AFA`</span> | <span style="color: #cba6f7">`#cba6f7`</span> | Variables |
| <span style="color: #C0A0FF">**Light Purple**</span> | <span style="color: #C0A0FF">`#C0A0FF`</span> | <span style="color: #f4b8e4">`#f4b8e4`</span> | Accents |
| <span style="color: #E84A8C">**Tech Pink**</span> | <span style="color: #E84A8C">`#E84A8C`</span> | <span style="color: #e78284">`#e78284`</span> | Errors (softened) |

## Accessibility Considerations

All color combinations must meet WCAG 2.1 AA standards:
- Normal text: 4.5:1 contrast ratio minimum
- Large text: 3:1 contrast ratio minimum
- Optimal range for neurodiversity: 3:1-4:1 contrast ratios
- Consider colorblind users (8% of men, 0.5% of women)

## Color Formats

Colors are provided in multiple formats:
- **Hex**: For web development
- **RGB**: For digital design
- **CMYK**: For print materials
- **Pantone**: For brand merchandise
