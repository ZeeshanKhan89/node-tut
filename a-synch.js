// console.log("1st Program");

// setTimeout(()=>{
//     console.log("2st Program");
// },5000)

// console.log("3st Program");

// let a=10;
// let b=0;
// setTimeout(()=>{
//     let=20;
// },2000)
// console.log(a+b)

//Handle the asych data
let a = 20;

let waitingdata = new Promise((resolve, rejected)=>{
    setTimeout(() => {
        resolve(30)
    },2000);
})

waitingdata.then((data)=>{
    console.log(a+data)
})