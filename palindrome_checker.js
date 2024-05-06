function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Base case: if the string is empty or has only one character, it is a palindrome
    if (cleanedStr.length <= 1) {
      return true;
    }
  
    // Recursive case: check the first and last characters of the string
    // If they are not the same, return false
    // Otherwise, remove the first and last characters and check the rest of the string
    if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
      return false;
    }
    return isPalindrome(cleanedStr.slice(1, -1));
  }