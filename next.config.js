const pages = require("./static-pages.json");

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      ...pages
    };
  }
};
