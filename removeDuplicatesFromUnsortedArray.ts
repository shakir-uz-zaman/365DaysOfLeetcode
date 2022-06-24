let a:number[] = [1,2,4,5,2,5,8];
let obj ={};
for(let i of a){
    obj[i] = true;
}
let b =Object.keys(obj);
console.log(b);
