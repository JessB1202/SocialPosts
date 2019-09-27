import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() openForm : boolean;

  newSubject : string;
  newBody: string;

  @Output() submitted = new EventEmitter<Post>();

  submitPost() {
    this.submitted.emit({
      subject: this.newSubject,
      body: this.newBody
    });
  }

}
