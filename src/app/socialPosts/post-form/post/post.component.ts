import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() post : Post;

}
