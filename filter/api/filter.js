const params = (url, q = {}) => {
  url.replace(/([^?&=]+)=([^&]*)/g, (_,k,v) => q[k] = v)
  return q;
}