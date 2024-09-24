//HMAC refferes to Hash based authentication code
// here the hashed code would also need a password to be decrypted


const { createHmac} = require ('crypto');

const key = 'super-secret!';
const message ='boo';

const hmac = createHmac('sha256', key).update(message).digest('hex');
console.log(hmac)

