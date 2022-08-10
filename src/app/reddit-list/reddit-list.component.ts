import { Component, OnInit } from '@angular/core';
import { Child, Reddit } from '../reddit';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})

export class RedditListComponent implements OnInit {

reddit:Reddit = {} as Reddit;

  constructor(private redditService:RedditService) { }

  ngOnInit(): void {

    this.redditService.getReddit().subscribe((response:Reddit)=> {
      this.reddit = response;
      console.log(response.data.children)
      response.data.children.forEach((r:Child)=>{
        console.log(r.data.author)
        console.log(r.data.thumbnail)

      });
    });

  }

}
