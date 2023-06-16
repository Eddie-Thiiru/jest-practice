const capitalize = (str) => {
  let firstLetter = str.charAt(0).toUpperCase();
  return str.replace(str.charAt(0), firstLetter);
};

module.exports = capitalize;
