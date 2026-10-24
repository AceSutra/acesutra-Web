import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

export function useDocumentTitle({ title, description }: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const fullTitle = title.includes('AceSutra') ? title : `${title} | AceSutra`;
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
