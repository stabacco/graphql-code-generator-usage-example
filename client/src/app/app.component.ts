import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AllPosts } from '../types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts$: Observable<AllPosts.Posts[]> = null;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.posts$ = this.dataService.getData().map(result => result.data.posts);
  }
}
