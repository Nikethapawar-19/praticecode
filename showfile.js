console.log(__filename);
console.log(__dirname);

function printstuff(){
    console.log("this is a settimeout");
}
setTimeout(printstuff,5000);
setInterval(printstuff,3000);