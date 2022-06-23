//Remove duplicates from sorted array

//Method 1 // Using extra array

function removeDuplicates(nums:number[]){
    let unique_nums:number[] = [];
    unique_nums.push(nums[0]);

    let n = nums.length;
    // nums.forEach((value,index)=>{
    // console.log(value);
    // })
        for(let i:number = 1 ; i<n ; i++){
            if( nums[i] ! == nums[i-1]){
                unique_nums.push(nums[i]);
            }
        }
        return unique_nums.length;
}

let nums:number[] =[1,2,2,3,3,4];
console.log(removeDuplicates(nums));

