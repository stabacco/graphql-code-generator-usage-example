const Handlebars = require('handlebars');
var change_case_1 = require("change-case");

const declareField = '{{ snakeCaseFields name }}: {{#unless isRequired}}typing.Optional[{{/unless}}{{#if isArray}}typing.List[{{/if}}{{ toPrimitive type }}{{#if isArray}}]{{/if}}{{#unless isRequired}}]{{/unless}}'
const declareImports = `
# generated automatically
# pylint: skip-file

import typing
import attr
import datetime as py_datetime

{{#eachImport this }}
from .{{file}} import {{ name }}
{{/eachImport}}
`
const baseClasses = `{{#if hasInterfaces}}({{#each interfaces}}{{this}}{{#unless @last}},{{/unless}}{{/each}}){{/if}}`
const docstring = `"""{{ description }}

Attributes
----------
{{#each fields}}
{{#unless isDeprecated}} 
{{> declareField }}
  {{ description }}
{{/unless}}
{{/each}}
"""
`
Handlebars.registerPartial('declareField', declareField);
Handlebars.registerPartial('declareImports', declareImports);
Handlebars.registerPartial('baseClasses', baseClasses);
Handlebars.registerPartial('docstring', docstring);


/* dummy function */
function registerPartials(name) {
  return null;
}

module.exports = registerPartials;
