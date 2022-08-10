import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../reddit';

@Component({
  selector: 'app-reddit-single-result',
  templateUrl: './reddit-single-result.component.html',
  styleUrls: ['./reddit-single-result.component.css']
})
export class RedditSingleResultComponent implements OnInit {

@Input() children:Child = {} as Child;

  constructor() { }

  ngOnInit(): void {
  }

}
