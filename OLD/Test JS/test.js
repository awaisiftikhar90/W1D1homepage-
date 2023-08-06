$(function() { alert("Hello World") });


// setTimeout(function () { 
//     console.log("world"); 
// }, 2000); console.log("hello");


// console.log(1); 
// const a = setTimeout(function(){ console.log(2); }, 1000); 
// const b = setTimeout(function(){ console.log(3); }, 0); 
// console.log(4); 
setTimeout(() => { console.log('timeout'); }, 0);
 setImmediate(() => { console.log('immediate'); });
 process.nextTick(()=> console.log('nexttick'));
