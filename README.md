# Peluquería BellaDona - Website

A modern, responsive, and multilingual website for Peluquería BellaDona, a beauty salon. The website is built with HTML5, CSS3, and vanilla JavaScript, featuring a mobile-first design and trilingual support (Spanish, Catalan, and English).

## Features

- **Fully Responsive**: Looks great on all devices
- **Trilingual Support**: Spanish, Catalan, and English
- **Modern UI/UX**: Clean and professional design
- **Interactive Elements**: Smooth scrolling, animations, and form validation
- **Optimized Performance**: Fast loading times and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## Project Structure

```
belladona_last/
├── css/
│   ├── base.css           # Base styles and variables
│   ├── hero-services.css  # Hero and services section styles
│   ├── gallery-testimonials.css # Gallery and testimonials
│   ├── faq-contact.css    # FAQ and contact section styles
│   ├── footer-utilities.css # Footer and utility classes
│   └── styles.css         # Main stylesheet (imports all others)
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── i18n.js            # Internationalization (i18n)
├── img/
│   ├── flags/             # Country flags for language selection
│   ├── gallery/           # Gallery images
│   └── team/              # Team member photos
├── index.html             # Main HTML file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/belladona-peluqueria.git
   cd belladona-peluqueria
   ```

2. **Add your images**:
   - Place flag images in `img/flags/` (es.svg, ca.svg, gb.svg)
   - Add gallery images to `img/gallery/`
   - Add team photos to `img/team/`

3. **Open in browser**:
   - Simply open `index.html` in your preferred web browser

## Customization

### Colors
Edit the CSS variables in `css/base.css` to change the color scheme:

```css
:root {
    --primary-color: #c2185b;
    --secondary-color: #f8bbd0;
    --accent-color: #ff4081;
    --text-color: #333;
    --light-text: #fff;
    --dark-bg: #1a1a1a;
    --light-bg: #f9f9f9;
}
```

### Content
- Update text content directly in the HTML file
- Modify the language files in `js/i18n.js` for translations
- Add or remove services, gallery items, and team members as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 10+)
- Chrome for Android

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Your Name]
