/**
 * 
 * @param {String} moneyStr 
 * @returns 
 */
const getMoney = (moneyStr) => {
    try {
       const digits = moneyStr.match(/\d+/g).join("")
       return new Intl.NumberFormat().format(digits) + " đ"
    } catch (e) {
        return null
    }
}
export {getMoney}