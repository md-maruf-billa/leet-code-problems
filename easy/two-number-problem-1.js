const two_number_sum = (nums, target) => {
    const seen = new Map()

    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(num, i);
    }
}

console.log(two_number_sum([2,7,11,15],9))