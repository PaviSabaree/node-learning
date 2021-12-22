const int= setInterval(()=>{
    console.log('Welcome');
},1000)

setTimeout(()=>{
clearInterval(int)
},5000)
