const caesarCipher = (str, shift) => {
  let string = str.toLowerCase();
  let pattern = /[a-zA-Z]/;
  let cipherArr = [];

  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    // Check if string matches pattern
    if (pattern.test(element)) {
      let char = string.charCodeAt(i);

      for (let i = 0; i < shift; i++) {
        // Wraps from z to a
        if (char === 122) {
          char = 97;
        } else {
          char += 1;
        }
      }

      cipherArr.push(String.fromCharCode(char));
    } else {
      cipherArr.push(element);
    }
  }
  return cipherArr.join("");
};

module.exports = caesarCipher;
