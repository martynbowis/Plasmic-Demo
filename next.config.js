
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['vsyvSbMSxVB3it8gpj6uQC'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  