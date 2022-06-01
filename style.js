let num = [1,2,3,4,5,6,7,8]

function prt(params) {
   let y = Math.max(...params)
   let t = params.indexOf(y)
   params.splice(t,1)
   let b = Math.max(...params)


   return b
   // console.log(params);
   // console.log(y);
   // console.log(t);
}

console.log(prt(num));

function get(word,num) {
let ted = word
let number = num
for (let i = 0;i < ted; i++  ){
   i +1
   let y  = String.fromCharCode(65 + Math.floor(Math.random()*25))
   console.log(y);
}
for (let i = 0; i< number; i++){
i+1
let z = String.fromCharCode(48 + Math.round(Math.random()*9));
console.log(z);
}
}

console.log(get(4,3));