'use client';

import { useState, useEffect } from 'react';
import { getDeviceType } from '@/lib/deviceDetect';
import { STORE_LINKS } from '@/lib/constants';

export default function SmartDownloadButton({ messages, locale, className = '' }) {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    setDevice(getDeviceType());
  }, []);

  const isAppStoreReady = STORE_LINKS.appStore !== '#';

  if (device === 'android') {
    return (
      <a
        href={STORE_LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 bg-prime-accent hover:bg-prime-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-prime-accent/25 ${className}`}
      >
        <GooglePlayIcon />
        <span>{messages.download.android}</span>
      </a>
    );
  }

  if (device === 'ios') {
    return (
      <a
        href={isAppStoreReady ? STORE_LINKS.appStore : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 ${isAppStoreReady ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-600 text-gray-300 cursor-not-allowed'} font-semibold px-8 py-4 rounded-xl transition-all duration-300 ${isAppStoreReady ? 'hover:scale-105' : ''} ${className}`}
      >
        <AppleIcon />
        <span>{isAppStoreReady ? messages.download.ios : messages.download.comingSoon}</span>
      </a>
    );
  }

  // Desktop: show both
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href={STORE_LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-prime-accent hover:bg-prime-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-prime-accent/25"
      >
        <GooglePlayIcon />
        <span>{messages.download.android}</span>
      </a>
      <a
        href={isAppStoreReady ? STORE_LINKS.appStore : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 ${isAppStoreReady ? 'bg-white text-black hover:bg-gray-100 hover:scale-105' : 'bg-gray-600 text-gray-300 cursor-not-allowed'} font-semibold px-8 py-4 rounded-xl transition-all duration-300`}
      >
        <AppleIcon />
        <span>{isAppStoreReady ? messages.download.ios : `${messages.download.ios} (${messages.download.comingSoon})`}</span>
      </a>
    </div>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 3.458L16.8 9.79l-2.302 2.302L5.864 3.458z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
