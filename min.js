console.log(Math.floor(Math.random()*10+1));

myVar="Pratima";
console.log(myVar.charAt(Math.floor(Math.random()*myVar.length)));

console.log("pratima".charAt(Math.floor(Math.random()*4)));

const mail=(email) => {
    return email.slice(0,email.indexOf("@"));
}
console.log(mail("abc@gmail.com"));

