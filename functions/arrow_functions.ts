//--- Arrow fn/ Flat fn/ Lambda fn:
setTimeout(() => {
    console.log("Hello using arrow function");
}, 2000);

setTimeout(function(){
    console.log("Hello using anonymous function");
}, 2000);

var add = (n1: number, n2: number) => {
    return n1+n2;
}
console.log( add(1,2) );