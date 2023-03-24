const urls = {};

function generateShortUrl(longUrl) {
  let shortUrl = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (let i = 0; i < 6; i++) {
    shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  urls[shortUrl] = longUrl;
  
  return shortUrl;
}

function getLongUrl(shortUrl) {
  const longUrl = urls[shortUrl];
  
  return longUrl || null;
}
