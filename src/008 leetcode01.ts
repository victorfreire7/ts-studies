var twoSumTS = function (nums: Array<number>, target: number) {
    for(var i : number = 0; i <= nums.length; i++ ){
        for(var j : number = 0; j <= nums.length; j++ ){
            var soma : number = nums[i] + nums[j];

            if(soma == target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSumTS([2,7,11,15], 9));
