"use client";
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

const SafeHtmlContent = ({ htmlContent }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState('');

  useEffect(() => {
    setSanitizedHtml(DOMPurify.sanitize(htmlContent));
  }, [htmlContent]);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className='productDescription'/>
  );
};

export default SafeHtmlContent;