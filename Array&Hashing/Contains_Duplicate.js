export class ArraysAndHashing {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uniqueArray = [...new Set(nums)];
    return uniqueArray.length < nums.length;
  }
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length === t.length) {
      const charSArray = [...s];
      const chatTArray = [...t];
      return charSArray.sort().join("") === chatTArray.sort().join("");
    }
  }
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {}
}

const TestFunction = new ArraysAndHashing();
console.log(TestFunction.isAnagram("car", "rac"));
