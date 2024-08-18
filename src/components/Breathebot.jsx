import React, { useEffect } from 'react';

const Breathebot = () => {
  useEffect(() => {
    const existingScript = document.getElementById('chatling-embed-script');
    
    // If the script already exists, return early to prevent adding it again.
    if (existingScript) {
      console.log('Chatbot script already exists');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://chatling.ai/js/embed.js';
    script.async = true;
    script.setAttribute('data-id', '4695638649');
    script.setAttribute('data-display', 'page_inline');
    script.setAttribute('id', 'chatling-embed-script');
    script.type = 'text/javascript';
    document.body.appendChild(script);
    console.log('Script added to the DOM');

  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-blue-400">
      <div id="chatling-inline-bot" className="rounded-xl overflow-hidden mt-20" style={{ width: '80%', height: '500px' }}></div>
    </div>
  );
  
};

export default Breathebot;
