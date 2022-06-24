/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums: number[], val: number): number {
    let len: number = nums.length;
    let pointer: number = 0;
    if (len == 0) return 0;
    else if (len == 1) return (val == nums[0]) ? 0 : 1;
    while (pointer < len) {

        if (val == nums[pointer]) {
            nums[pointer] = nums[len - 1];
            len--;
        }
        else {
            pointer++;
        }
    }
    return len;
}
let nums: number[] = [1, 2, 2, 3, 3, 4];
//let nums:number[] = [1,1,2];


console.log(removeDuplicates(nums, 2));
