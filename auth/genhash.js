const bcrypt = require("bcrypt");
const genHash = (pass) => {
  return bcrypt.hashSync(pass, Number(process.env.SALT_ROUND));
};
module.exports = genHash;
