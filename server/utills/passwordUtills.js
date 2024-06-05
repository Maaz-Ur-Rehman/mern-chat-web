const bycrpt = require('bcryptjs');


const hashPassword = (password) => {

    const salt = bycrpt.genSaltSync(10);
    const hash = bycrpt.hashSync(password, salt);

    return hash;
}
const comparePassword = (password, hashPassword) => {
    const isMatch = bycrpt.compareSync(password, hashPassword);
    return isMatch;

}

module.exports = { hashPassword, comparePassword };