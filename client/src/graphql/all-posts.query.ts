import gql from 'graphql-tag';

export const allPostsQuery = gql`
  query allPosts {
    posts {
      id
      title
      author {
        lastName
        firstName
        id
      }
    }
  }
`;
