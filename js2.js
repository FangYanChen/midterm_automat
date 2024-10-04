function isPalindrome(str) {
      const cleanStr = str.toLowerCase().replace(/[\W_]/g, ''); // Remove non-alphanumeric characters
      return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("Hello")); // false
  