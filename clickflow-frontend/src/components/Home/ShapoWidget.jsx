import React, { useEffect } from 'react';

const ShapoWidget = () => {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.id = 'shapo-embed-js';
    script.src = 'https://cdn.shapo.io/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="shapo-widget-52e72b8ffdb466db21b9"></div>;
};

export default ShapoWidget;