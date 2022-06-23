//Remove duplicates from sorted array

//Method 1 // Using extra array

// function removeDuplicates(nums:number[]){
//     let unique_nums:number[] = [];
//     unique_nums.push(nums[0]);

//     let n = nums.length;
//     // nums.forEach((value,index)=>{
//     // console.log(value);
//     // })
//         for(let i:number = 1 ; i<n ; i++){
//             if( nums[i] ! == nums[i-1]){
//                 unique_nums.push(nums[i]);
//             }
//         }
//         return unique_nums.length;
// }

//Method 2 // Without  extra array

/**
 * @param {number[]} nums
 * @return {number}
 */

//  function removeDuplicates(nums:number[]): number{
//     if(nums.length < 1 ) return 0;
//     let i1:number = 0;
//     for(let i2:number = 1 ; i2 < nums.length ; i2++){
//         if( nums[i1] != nums[i2]){
//             i1++;
//             nums[i1] = nums[i2];
//         }
//     }

//     return i1+1;
// }
//Method 3 // Most fastest

/**
 * @param {number[]} nums
 * @return {number}
 */

 function removeDuplicates(nums:number[]): number{
    if(nums.length == 0 ) return 0;
    let i1:number = 0 ,i2: number = 1;

    while(i2 < nums.length){
        if(nums[i1] == nums[i2] ){
            i2++;
        }else{
            i1++;
            nums[i1] = nums[i2];
            i2++;
        }

    }

    return i1+1;
}


let nums:number[] =[1,2,2,3,3,4];
console.log(removeDuplicates(nums));


