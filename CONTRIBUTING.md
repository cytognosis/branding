# Contributing to Cytognosis Branding

Thank you for your interest in contributing to the Cytognosis Foundation branding repository! This document provides guidelines for contributing to our brand assets, documentation, and code.

## 🎯 Types of Contributions

### 🎨 Brand Assets
- Logo refinements and new variants
- Icon design and expansion
- Template creation (slides, documents, social media)
- Photography and illustration guidelines

### 💻 Code Contributions
- Web component improvements
- CSS enhancements and optimizations
- Theme development for new editors/tools
- Build tools and automation

### 📖 Documentation
- Brand guideline improvements
- Usage examples and tutorials
- Accessibility enhancements
- Translation and localization

### 🐛 Bug Reports
- Broken links or missing files
- Accessibility issues
- Inconsistencies in brand application
- Technical problems with assets

## 🚀 Getting Started

### Prerequisites
- Git knowledge for version control
- Understanding of brand guidelines (see [`guidelines/`](./guidelines/))
- Familiarity with accessibility standards (WCAG 2.1 AA)

### Development Setup
```bash
# Clone the repository
git clone https://github.com/cytognosis/branding.git
cd branding

# Create a feature branch
git checkout -b feature/your-contribution-name

# Make your changes
# ...

# Test your changes (see Testing section below)
# ...

# Commit and push
git add .
git commit -m "feat: add new slide templates"
git push origin feature/your-contribution-name
```

## 📋 Contribution Guidelines

### Brand Asset Guidelines

#### Logo Contributions
- Must maintain brand consistency and recognition
- Require approval from brand team before implementation
- Should include multiple formats (SVG, PNG)
- Must meet accessibility contrast requirements

#### Icon Design Standards
- Follow established design language
- Provide multiple sizes (16px, 24px, 32px, 48px)
- Include both color and monochrome versions
- Test at actual usage sizes

#### Template Requirements
- Use official brand colors and typography
- Include proper logo placement and clear space
- Provide editable source files when possible
- Include usage instructions

### Code Contributions

#### CSS/Web Assets
- Follow existing naming conventions
- Use CSS custom properties for theming
- Ensure cross-browser compatibility
- Maintain accessibility standards (WCAG 2.1 AA)

#### Theme Development
- Test in target applications
- Provide installation instructions
- Include screenshots of the theme in use
- Follow application-specific guidelines

### Documentation Standards

#### Writing Style
- Clear, concise, and actionable
- Use inclusive language
- Include visual examples when helpful
- Follow existing documentation structure

#### Accessibility Requirements
- Alt text for all images
- Proper heading hierarchy
- Sufficient color contrast
- Screen reader friendly formatting

## 🧪 Testing Requirements

### Brand Asset Testing
- [ ] Visual consistency with existing brand elements
- [ ] Accessibility contrast ratios (use tools like WebAIM)
- [ ] Scalability across different sizes
- [ ] Cross-platform compatibility

### Code Testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness
- [ ] Accessibility validation (axe, WAVE)
- [ ] Performance impact assessment

### Documentation Testing
- [ ] Link validation
- [ ] Spelling and grammar check
- [ ] Accessibility review
- [ ] Accuracy of technical information

## 📝 Pull Request Process

### Before Submitting
1. **Review guidelines** - Ensure your contribution aligns with brand standards
2. **Test thoroughly** - Complete all relevant testing requirements
3. **Update documentation** - Include any necessary documentation updates
4. **Check TODO.md** - Verify your contribution addresses items in the roadmap

### Pull Request Template
```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Brand asset (logo, icon, template)
- [ ] Code (CSS, JavaScript, theme)
- [ ] Documentation
- [ ] Bug fix

## Testing Completed
- [ ] Visual consistency check
- [ ] Accessibility validation
- [ ] Cross-browser/platform testing
- [ ] Documentation accuracy

## Screenshots (if applicable)
Include before/after screenshots for visual changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally
```

### Review Process
1. **Automated checks** - CI/CD pipeline validates basic requirements
2. **Brand review** - Brand team reviews for consistency and guidelines
3. **Technical review** - Code review for quality and standards
4. **Accessibility review** - Validation of accessibility requirements
5. **Final approval** - Maintainer approval and merge

## 🎨 Brand Guidelines Compliance

### Required Reading
- [`guidelines/brand-overview.md`](./guidelines/brand-overview.md) - Core brand principles
- [`guidelines/colors.md`](./guidelines/colors.md) - Official color palette
- [`guidelines/accessibility.md`](./guidelines/accessibility.md) - Accessibility requirements
- [`TRADEMARK.md`](./TRADEMARK.md) - Legal usage guidelines

### Key Principles
1. **Scientific Clarity** - Maintain trust and precision
2. **Human-Centered** - Prioritize accessibility and inclusivity
3. **Consistency** - Follow established patterns and standards
4. **Quality** - High standards for all contributions

## 🚫 What Not to Contribute

### Restricted Contributions
- Modifications to core logo design (requires special approval)
- Changes that violate accessibility standards
- Assets that don't align with brand principles
- Copyrighted material without proper licensing

### Legal Considerations
- All contributions must be original work or properly licensed
- Contributors grant Cytognosis Foundation rights to use contributions
- Trademark and copyright laws must be respected
- See [`LICENSE`](./LICENSE) for detailed terms

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `brand-asset` - Logo, icon, or template related
- `code` - CSS, JavaScript, or technical implementation
- `documentation` - Guides, README, or instructional content
- `accessibility` - WCAG compliance or inclusive design
- `bug` - Something isn't working correctly
- `enhancement` - New feature or improvement
- `good-first-issue` - Suitable for newcomers
- `help-wanted` - Extra attention needed
- `priority-high` - Critical issues requiring immediate attention

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Focus on the contribution, not the contributor
- Help create a welcoming environment for all

### Communication Channels
- **GitHub Issues** - Bug reports and feature requests
- **Pull Requests** - Code and asset contributions
- **Email** - branding@cytognosis.org for general inquiries
- **Documentation** - In-repository guides and examples

## 🎓 Learning Resources

### Brand Design
- [Brand Guidelines](./guidelines/) - Complete brand documentation
- [Accessibility Guide](./guidelines/accessibility.md) - WCAG compliance
- [Color Theory](./guidelines/colors.md) - Brand color system

### Web Development
- [Web Assets Guide](./web/README.md) - Implementation documentation
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - Modern CSS techniques
- [Accessibility Testing](https://www.w3.org/WAI/test-evaluate/) - Testing methodologies

### Design Tools
- **Figma** - Collaborative design platform
- **Adobe Creative Suite** - Professional design tools
- **Inkscape** - Open-source vector graphics
- **GIMP** - Open-source image editing

## 📞 Getting Help

### Questions About Contributing
- **General questions** - Create a GitHub issue with the `question` label
- **Brand guidelines** - Email branding@cytognosis.org
- **Technical implementation** - Check existing documentation or create an issue

### Mentorship
New contributors are welcome! We're happy to provide guidance on:
- Understanding brand guidelines
- Technical implementation
- Accessibility best practices
- Design tool usage

## 🙏 Recognition

Contributors are recognized in several ways:
- **GitHub contributors page** - Automatic recognition for merged PRs
- **CHANGELOG.md** - Major contributions noted in release notes
- **Community highlights** - Outstanding contributions featured in communications

---

**Thank you for contributing to the Cytognosis Foundation branding!**

Your contributions help us maintain a consistent, accessible, and high-quality brand experience across all touchpoints. Together, we're building tools and resources that advance scientific understanding and human health.

*For questions about this contributing guide, please contact branding@cytognosis.org*
