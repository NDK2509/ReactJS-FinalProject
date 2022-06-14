const getNumber = (str) => {
    try {
        return Number.parseInt(str.match(/\d+/g).join(""))
    }
    catch(e) {
        return 0
    }
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
export {getNumber, getRandomIntInclusive}