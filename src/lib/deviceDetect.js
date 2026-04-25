export function getDeviceType() {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  return 'desktop';
}
