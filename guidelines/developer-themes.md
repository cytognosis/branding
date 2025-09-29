# Developer Environment Standards v2

## Cytognosis Developer Theme System

### Core Principles
1. **Dual Theme Support**: Both dark (Dusk) and light (Dawn) modes
2. **Semantic Consistency**: Colors maintain meaning across themes
3. **Reduced Cognitive Load**: Muted, harmonious palettes
4. **Accessibility First**: Optimized contrast ratios (3:1-4:1)
5. **Brand Integration**: Cytognosis gradient incorporated subtly

## VS Code Configuration

### Theme Installation
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

## Terminal Configuration (Starship)

### Cytognosis Starship Preset
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

[palettes.cytognosis_dawn]
# Light theme palette
rosewater = "#dc8a78"
flamingo = "#dd7878"
pink = "#ea76cb"
mauve = "#8839ef"
red = "#e64553"
maroon = "#e64553"
peach = "#fe640b"
yellow = "#df8e1d"
green = "#40a02b"
teal = "#179299"
sky = "#04a5e5"
sapphire = "#209fb5"
blue = "#7287fd"
lavender = "#7287fd"
text = "#4c4f69"
subtext1 = "#5c5f77"
subtext0 = "#6c6f85"
overlay2 = "#7c7f93"
overlay1 = "#8c8fa1"
overlay0 = "#9ca0b0"
surface2 = "#acb0be"
surface1 = "#bcc0cc"
surface0 = "#ccd0da"
base = "#eff1f5"
mantle = "#e6e9ef"
crust = "#dce0e8"
```

## Accessibility Features

### Mandatory Settings
- **Line Height**: 1.8x minimum for code
- **Letter Spacing**: 0.05em (0.5px at 14px)
- **Bracket Pair Colorization**: Always enabled
- **Semantic Highlighting**: Required for variable tracking
- **Font Size**: 14px minimum, 16px recommended

### Optional Enhancements
- **Minimap**: Disabled by default (reduces distraction)
- **Breadcrumbs**: Enabled for navigation context
- **Sticky Scroll**: Enabled for scope awareness
- **Word Wrap**: Enabled at 80 characters

## Theme Variants

### Cytognosis Dusk (Default Dark)
- Soft dark indigo background (#24273a)
- Soothing pastel syntax colors
- Optimized for extended coding sessions
- Reduced eye strain in low-light environments

### Cytognosis Dawn (Light Alternative)
- Soft cloud white background (#eff1f5)
- Light pastel syntax colors
- Excellent for daytime coding
- High contrast for bright environments

## Installation & Setup

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

### Supported Environments
- **VS Code**: JSON theme files
- **Starship**: TOML configuration
- **Geany**: XML color schemes
- **Terminal Apps**: Various formats
- **Vim/Neovim**: Theme scripts

## Customization Guidelines

### Brand Color Integration
- Use Cytognosis brand colors sparingly as accents
- Maintain the soothing pastel base palette
- Ensure accessibility standards are preserved
- Test with colorblind simulators

### Personal Modifications
- Font family can be customized per preference
- Font size should respect minimum accessibility requirements
- Line height must remain at 1.8x minimum for code
- Color modifications should maintain contrast ratios
