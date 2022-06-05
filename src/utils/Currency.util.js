/**
 * 
 * @param {String} moneyStr 
 * @returns 
 */
const getMoney = (moneyStr) => {
    try {
       return moneyStr.match(/\d+/g).join("")
    } catch (e) {
        return null
    }
}
const formatMoney = (money) => {
    try {
      const moneyFormated = new Intl.NumberFormat().format(money);
      // eslint-disable-next-line
      if (moneyFormated != 0) {
        return moneyFormated;
      }
      throw new Error();
    } catch (e) {
        return "Liên hệ để biết giá"
    }
}
export {getMoney, formatMoney}