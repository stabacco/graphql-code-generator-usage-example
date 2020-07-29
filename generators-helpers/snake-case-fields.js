var change_case_1 = require("change-case");

function snakeCaseFields(name) {

  /* python cannot handle fields named 'in' */
  if (name=== "in") {
      return  "in_";
  }
  return change_case_1.snakeCase(name || '');

}

module.exports = snakeCaseFields;
