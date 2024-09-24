const {generateKeyPairSync} =require ('crypto')
const { format } = require('path')
const {privateKey, publicKey} = generateKeyPairSync('rsa',{
    modulusLength:2048,//the length of your key in bits
    publicKeyEncoding:{
        type: 'spki', //recommended to be spki
    },
    privateKeyEncoding:{
        type: 'pkcs8',//recommended to be pkcs8
        format:'pen',
    
    },
});
console.log(publicKey);
console.log(privateKey);

module.exports={
    privateKey,publicKey
}