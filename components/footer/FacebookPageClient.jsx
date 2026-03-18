'use client';

import React, { useEffect } from 'react';

const FacebookPageClient = () => {
  useEffect(() => {

    // Prevent adding the script multiple times
    if (document.getElementById('facebookjs-sdk')) return;

    const script = document.createElement('script');
    script.id = 'facebookjs-sdk';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0';

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <span className="caption">Like Us on Facebook</span>
      <div className='wrapper-facebook-plugin'>
        <div id="fb-root"></div>
        <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100068848209543" datatabs="timeline" data-width="" dataheight="" data-small-header="true" dataadapt-container-width="true" data-hidecover="false" data-showfacepile="true">
          <blockquote cite="https://www.facebook.com/profile.php?id=100068848209543" className="fb-xfbmlparse-ignore"><a href="https://www.facebook.com/profile.php?id=100068848209543">Life As You Know It</a></blockquote>
        </div>
      </div>
    </>
  );
}

export default FacebookPageClient
