"use strict";
exports.__esModule = true;
var graphql_tag_1 = require("graphql-tag");
var graphql_tools_1 = require("graphql-tools");
var resolvers_1 = require("./resolvers");
var typeDefs = (_a = ["\n  directive @entity on OBJECT\n\n  type Author @entity {\n    id: Int!\n    firstName: String! @deprecated\n    lastName: String!\n    posts(findTitle: String): [Post]\n  }\n  \n  type Post @entity {\n    id: Int!\n    title: String!\n    author: Author!\n  }\n  \n  type Query {\n    posts: [Post]\n  }\n  \n  schema {\n    query: Query\n  }\n\n"], _a.raw = ["\n  directive @entity on OBJECT\n\n  type Author @entity {\n    id: Int!\n    firstName: String! @deprecated\n    lastName: String!\n    posts(findTitle: String): [Post]\n  }\n  \n  type Post @entity {\n    id: Int!\n    title: String!\n    author: Author!\n  }\n  \n  type Query {\n    posts: [Post]\n  }\n  \n  schema {\n    query: Query\n  }\n\n"], graphql_tag_1["default"](_a));
exports.schema = graphql_tools_1.makeExecutableSchema({
    allowUndefinedInResolve: true,
    typeDefs: typeDefs,
    resolvers: resolvers_1.resolvers
});
exports["default"] = exports.schema;
var _a;
