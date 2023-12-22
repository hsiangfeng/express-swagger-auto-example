module.exports = {
  async checkAPIPath1(req, res, next) {
    // #swagger.ignore = true
    return next();
  },
  async checkAPIPath2(req, res, next) {
    // #swagger.auto = false
    return next();
  },
};