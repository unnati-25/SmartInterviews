function findLongestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        let substr = str.slice(i, j + 1);
        if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
    return longest;
  }
  
  console.log(findLongestPalindrome("banana")); // "anana"
  console.log(findLongestPalindrome("madam")); //"madam"