import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    // Set document title
    document.title = 'Pit Glam | Premium Brows & Lashes in Nairobi, Kenya';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Pit Glam - Because your Brows & Lashes Matter. Expert lash extensions, brow shaping, lash lifts, and brow lamination in Nairobi. Premium, hypoallergenic products. Book your appointment today!'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pit Glam - Because your Brows & Lashes Matter. Expert lash extensions, brow shaping, lash lifts, and brow lamination in Nairobi. Premium, hypoallergenic products. Book your appointment today!';
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'lash extensions Nairobi, brow shaping Kenya, lash lift Nairobi, volume lashes Kenya, classic lashes Nairobi, brow lamination Kenya, eyebrow tinting Nairobi, lash artist Kenya, Pit Glam, best lashes Nairobi'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'lash extensions Nairobi, brow shaping Kenya, lash lift Nairobi, volume lashes Kenya, classic lashes Nairobi, brow lamination Kenya, eyebrow tinting Nairobi, lash artist Kenya, Pit Glam, best lashes Nairobi';
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
