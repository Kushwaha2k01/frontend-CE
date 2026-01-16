const https = require('https');

const url = 'https://prod.spline.design/68SQQ9coxlXeFVpr/scene.splinecode';

https.get(url, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
