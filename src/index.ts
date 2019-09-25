const Nexmo = require('nexmo');
import './config';

const nexmoInstance = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
});

const today = new Date();
const time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const sampleNumber = '+48 999 999 999';

nexmoInstance.message.sendSms(
  'Nexmo Test',
  sampleNumber,
  `Now it's ${time}`,
  {
    type: 'unicode',
  },
  (err: any, responseData: any) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === '0') {
        console.log('Message sent successfully.');
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]['error-text']}`,
        );
      }
    }
  },
);
