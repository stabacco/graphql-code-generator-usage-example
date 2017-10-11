"use strict";
exports.__esModule = true;
var graphql_tag_1 = require("graphql-tag");
var graphql_tools_1 = require("graphql-tools");
var resolvers_1 = require("./resolvers");
var typeDefs = (_a = ["\n  type Author @entity {\n    id: Int! @id\n    firstName: String! @column\n    lastName: String! @column\n    posts(findTitle: String): [Post]\n  }\n  \n  type Post @entity {\n    id: Int! @id\n    title: String! @column\n    author: Author! @link\n  }\n  \n  type Query {\n    posts: [Post]\n  }\n  \n  schema {\n    query: Query\n  }\n\n  # Table\n  directive @entity(embedded: Boolean) on OBJECT\n\n  # Field\n  directive @stringManipulation(lowercase: Boolean, trim: Boolean, uppercase: Boolean) on FIELD_DEFINITION\n\n  directive @validation(min: Int, max: Int) on FIELD_DEFINITION\n\n  directive @match(regex: String!, error: String) on FIELD_DEFINITION\n\n  directive @column(index: Boolean, unique: Boolean, type: String, ref: String, isArray: Boolean) on FIELD_DEFINITION\n\n  directive @id on FIELD_DEFINITION\n\n  directive @link on FIELD_DEFINITION\n\n  directive @embedded on FIELD_DEFINITION\n\n  # Union\n  directive @discrimination on UNION\n"], _a.raw = ["\n  type Author @entity {\n    id: Int! @id\n    firstName: String! @column\n    lastName: String! @column\n    posts(findTitle: String): [Post]\n  }\n  \n  type Post @entity {\n    id: Int! @id\n    title: String! @column\n    author: Author! @link\n  }\n  \n  type Query {\n    posts: [Post]\n  }\n  \n  schema {\n    query: Query\n  }\n\n  # Table\n  directive @entity(embedded: Boolean) on OBJECT\n\n  # Field\n  directive @stringManipulation(lowercase: Boolean, trim: Boolean, uppercase: Boolean) on FIELD_DEFINITION\n\n  directive @validation(min: Int, max: Int) on FIELD_DEFINITION\n\n  directive @match(regex: String!, error: String) on FIELD_DEFINITION\n\n  directive @column(index: Boolean, unique: Boolean, type: String, ref: String, isArray: Boolean) on FIELD_DEFINITION\n\n  directive @id on FIELD_DEFINITION\n\n  directive @link on FIELD_DEFINITION\n\n  directive @embedded on FIELD_DEFINITION\n\n  # Union\n  directive @discrimination on UNION\n"], graphql_tag_1["default"](_a));
exports.schema = graphql_tools_1.makeExecutableSchema({
    allowUndefinedInResolve: true,
    typeDefs: typeDefs,
    resolvers: resolvers_1.resolvers
});
exports["default"] = exports.schema;
var _a;
