import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set document title
    document.title = 'Nairobi Glam Lounge | Premium Beauty Salon in Nairobi, Kenya';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Nairobi Glam Lounge - Luxury beauty experiences in Nairobi. Expert makeup, hair styling, nails, and bridal packages for the modern African woman. Book your appointment today!'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Nairobi Glam Lounge - Luxury beauty experiences in Nairobi. Expert makeup, hair styling, nails, and bridal packages for the modern African woman. Book your appointment today!';
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'beauty salon Nairobi, makeup artist Kenya, hair salon Westlands, bridal makeup Nairobi, nail art Kenya, luxury beauty Kenya, African beauty, Nairobi Glam Lounge'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'beauty salon Nairobi, makeup artist Kenya, hair salon Westlands, bridal makeup Nairobi, nail art Kenya, luxury beauty Kenya, African beauty, Nairobi Glam Lounge';
      document.head.appendChild(meta);
    }

    // Set viewport
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }

    // Set theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#E8A9A9');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#E8A9A9';
      document.head.appendChild(meta);
    }
  }, []);

  return null;
}
