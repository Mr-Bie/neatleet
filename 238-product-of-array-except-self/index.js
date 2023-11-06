var productExceptSelf = function (nums) {
  if (nums.length === 1) return nums;
  let zero = -1;
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zero !== -1) return nums.fill(0);
      else zero = i;
    } else product *= nums[i];
  }

  console.log(product);

  return nums.map((v) => {
    if (zero !== -1) return v === 0 ? product : 0;
    return product / v;
  });
};

console.log(productExceptSelf([0, 0, 3, 4]));
