const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
}

let answer = twoSum([2, 7, 11, 15], 9)

console.log(answer);
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));


