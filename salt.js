// salt is used to add a random value to a variable making it hard to guess

const{scryptSync,randomBytes, timingSafeEqual} = require('crypto');
//sccryptSync is used for hashing, random Bytes is used to generate random values
function signUp(email, password){
    const salt = randomBytes(16).toString('hex');
    // here we create a random set of characters
    const hashedPassword = scryptSync(password, salt,64).toString('hex')

    const user ={email, password:'${salt}:${hashedPassword}'}
    //stores salt with the hash in the database

    user.push(user);
    return user
}

function login(email,password){
    const user = user.find(v => v.email === email);
    const [salt, key] = user.password.split(';');

    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if(match){
        return ('login sucess!')
    }else{
        return ('login failed ')
    }
}