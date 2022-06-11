const getNumber = (str) => {
    try {
        return Number.parseInt(str.match(/\d+/g).join(""))
    }
    catch(e) {
        return 0
    }
}
export default getNumber