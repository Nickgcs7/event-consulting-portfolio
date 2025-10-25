# Event Consulting Portfolio

A modern, animated portfolio website for event consulting services built with GSAP (GreenSock Animation Platform).

🔗 **Live Site**: [https://nickgcs7.github.io/event-consulting-portfolio](https://nickgcs7.github.io/event-consulting-portfolio)

## Features

- ✨ Beautiful, responsive design
- 🎬 Smooth GSAP animations throughout
- 📱 Mobile-friendly layout
- 🎯 Three main sections:
  - **Home**: Hero section with floating animations, services showcase, statistics, and testimonials
  - **Portfolio**: Showcase of real events with scroll-triggered animations
  - **Contact**: Interactive contact form with animated feedback

## Real Events Featured

- **LiveFest Naples** - Ideation, planning, and execution from inaugural year through 3 sold-out years
- **QBE Shootout** - Tiburon Naples PGA Tour event
- **CME LPGA Championship** - Season-ending championship event
- **Valero Texas Open** - PGA Tour event

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Gradients)
- JavaScript (ES6+)
- GSAP 3.12.5
- ScrollTrigger Plugin

## GSAP Animation Features

- **Timeline Animations**: Sequential page load animations
- **Scroll Triggers**: Content reveals on scroll
- **Stagger Effects**: Cascading element animations
- **Hover Interactions**: Smooth scale and position transitions
- **Floating Elements**: Continuous looping animations
- **Counter Animations**: Animated statistics
- **Form Interactions**: Input focus effects and submission animations
- **Custom Cursor**: Enhanced cursor interaction on desktop

## Getting Started

### View Locally

1. Clone the repository:
```bash
git clone https://github.com/Nickgcs7/event-consulting-portfolio.git
```

2. Open `index.html` in your web browser

### Deploy to GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save
6. Your site will be live at `https://nickgcs7.github.io/event-consulting-portfolio`

## File Structure

```
├── index.html          # Home page
├── portfolio.html      # Portfolio showcase
├── contact.html        # Contact form
├── styles.css          # Global styles
├── main.js             # Shared GSAP utilities
└── README.md           # This file
```

## Customization

To customize the site:

1. **Colors**: Edit the gradient values in `styles.css`
2. **Content**: Update HTML files with your information
3. **Animations**: Modify timing and effects in the `<script>` sections
4. **Services**: Edit the service cards in `index.html`
5. **Portfolio Items**: Add/remove portfolio items in `portfolio.html`
6. **Contact Info**: Update contact details in `contact.html`

## Animation Examples

### Hero Timeline Animation
```javascript
const heroTl = gsap.timeline();
heroTl
    .from('.nav', { y: -100, opacity: 0, duration: 0.8 })
    .from('.title-line', { y: 100, opacity: 0, stagger: 0.2 })
    .from('.cta-button', { scale: 0, ease: 'back.out(1.7)' });
```

### Scroll-Triggered Animations
```javascript
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    stagger: 0.2
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The site is optimized for performance:
- GSAP animations use GPU acceleration
- Minimal external dependencies
- Efficient scroll triggers
- Smooth 60fps animations

## Credits

Built with:
- [GSAP](https://greensock.com/gsap/) - Animation library
- [ScrollTrigger](https://greensock.com/scrolltrigger/) - Scroll-based animations

## License

Free to use for personal and commercial projects.

---

Created with ❤️ using GSAP