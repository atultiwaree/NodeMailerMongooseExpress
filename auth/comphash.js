const bcrypt = require("bcrypt");
const compHash = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};
module.exports = compHash;
