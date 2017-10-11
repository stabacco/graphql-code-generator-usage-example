import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { allPostsQuery } from '../graphql/all-posts.query';
import { AllPosts } from '../types';

@Injectable()
export class DataService {

  constructor(private apollo: Apollo) { }

  getData(): ApolloQueryObservable<AllPosts.Query> {
    return this.apollo.watchQuery<AllPosts.Query>({
      query: allPostsQuery,
    });
  }

}
