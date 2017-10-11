"use strict";
exports.__esModule = true;
var authors = [
    { id: 1, firstName: 'Dotan', lastName: 'Simha' },
    { id: 2, firstName: 'David', lastName: 'Yahalomi' },
];
var posts = [
    { id: 1, authorId: 1, title: 'GraphQL' },
    { id: 2, authorId: 2, title: 'Code' },
    { id: 3, authorId: 2, title: 'Generator' },
];
exports.resolvers = {
    Query: {
        posts: function () {
            return posts;
        }
    },
    Author: {
        posts: function (author, args) {
            return posts.filter(function (post) { return post.authorId === author.id; });
        }
    },
    Post: {
        author: function (post) {
            return authors.find(function (author) { return author.id === post.authorId; });
        }
    }
};
