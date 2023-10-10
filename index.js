function hasTargetSum(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

module.exports = hasTargetSum;

