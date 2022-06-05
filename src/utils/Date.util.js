/**
 *
 * @param {String} date
 */
const formatDate = (date) => {
  try {
    return date.match(/\d+/g).join("/");
  } catch (e) {
    return null;
  }
};
export { formatDate };
