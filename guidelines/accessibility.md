# Accessibility Guidelines

## Core Principles

The Cytognosis Foundation is committed to creating inclusive brand experiences that work for everyone, including users with ADHD, dyslexia, and other accessibility needs.

## Neurodiversity Support

### Contrast Ratios
- **Optimal range**: 3:1-4:1 (specifically optimized for dyslexia)
- **WCAG AA minimum**: 4.5:1 for normal text
- **WCAG AA minimum**: 3:1 for large text
- **Maximum colors**: 8 distinct colors per view to reduce cognitive load

### Animation & Motion
- **Default state**: Reduced or disabled animations
- **Respect system preferences**: `prefers-reduced-motion`
- **Essential animations only**: Progress indicators, state changes
- **Smooth transitions**: 200-300ms duration maximum

### Focus Management
- **Focus indicators**: 3px solid border in <span style="color: #8caaee">brand blue (`#8caaee`)</span>
- **Logical tab order**: Follow visual flow
- **Skip links**: Provide shortcuts to main content
- **Visible focus**: Never remove focus indicators

### Error States
- **Multi-modal feedback**: Never rely solely on color
- **Clear messaging**: Specific, actionable error descriptions
- **Icon support**: Use icons alongside color coding
- **Persistent visibility**: Errors remain visible until resolved

## ADHD Considerations

### Visual Design
- **Reduce visual clutter**: Use plenty of white space
- **Clear hierarchy**: Make information structure obvious
- **Minimal distractions**: Avoid unnecessary animations or movement

### Content Structure
- **Chunked information**: Break content into digestible sections
- **Clear headings**: Use descriptive, scannable headings
- **Bullet points**: Use lists instead of long paragraphs
- **Progress indicators**: Show where users are in multi-step processes

## Dyslexia Considerations

### Typography
- **Sans-serif fonts**: Easier to read than serif fonts
- **Adequate spacing**: 1.5x line height minimum
- **Left alignment**: Avoid justified text
- **Consistent formatting**: Maintain predictable text styling

### Content Presentation
- **Short sentences**: Keep sentences under 20 words when possible
- **Simple language**: Use clear, direct language
- **Visual breaks**: Use headings, lists, and white space
- **Avoid italics**: Use bold for emphasis instead

## Color & Contrast

### WCAG 2.1 AA Compliance
- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text**: 3:1 contrast ratio minimum
- **UI elements**: 3:1 contrast ratio for interactive elements

### Color Blindness
- **Don't rely on color alone**: Use icons, patterns, or text labels
- **Test with simulators**: Verify designs work for different types of color blindness
- **High contrast**: Ensure sufficient contrast for all users

## Interactive Elements

### Focus States
- **Visible focus indicators**: Clear outline or highlight on keyboard focus
- **Logical tab order**: Ensure keyboard navigation follows visual flow
- **Skip links**: Provide shortcuts to main content

### Touch Targets
- **Minimum size**: 44px × 44px for touch targets
- **Adequate spacing**: Prevent accidental activation
- **Clear boundaries**: Make clickable areas obvious

## Testing Requirements

### Mandatory Validation
- [ ] Validate with WAVE or axe DevTools
- [ ] Test with screen readers (NVDA, JAWS, VoiceOver)
- [ ] Verify with colorblind simulators
- [ ] User test with neurodiverse developers
- [ ] Monitor with analytics for accessibility settings usage

### Automated Testing
- Use accessibility testing tools (axe, WAVE, Lighthouse)
- Validate HTML markup and semantic structure
- Check color contrast ratios automatically
- Test keyboard navigation paths

### Manual Testing
- Navigate using only keyboard
- Test with users who have accessibility needs
- Review content with plain language principles
- Verify with different font sizes and zoom levels

## Implementation Checklist

- [ ] All text meets contrast requirements
- [ ] Interactive elements have focus states
- [ ] Content is structured with proper headings
- [ ] Images have descriptive alt text
- [ ] Forms have clear labels and error messages
- [ ] Content is readable without CSS
- [ ] Page works with screen readers
- [ ] Keyboard navigation is logical and complete
