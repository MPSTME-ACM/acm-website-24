const QRCode = require('qrcode');

const options = {
  color: {
    dark: '#111', // Black dots
    light: '#F3E3CA', // Background
  },
};

const content = 'https://yashd.vercel.app/';

QRCode.toFile('qr-code.png', content, options, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log('QR code generated and saved as qr-code.png');
  }
});
