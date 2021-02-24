module.exports = {
  isValid,
};

function isValid(user) {
  console.log('hi')
  return Boolean(user.username && user.password && typeof user.password === "string");
}
