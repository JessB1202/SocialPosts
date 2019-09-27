import { Component, OnInit } from '@angular/core';
import { Post } from '../interface';

@Component({
  selector: 'app-socialPosts',
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class SocialPostComponent implements OnInit {

  constructor() { }

  title = "My Thoughts";

  ngOnInit() {
  }

  posts: Post[] = [{
    subject: "Pizza is AMAZING!!!",
    body: "Pizza is sucha fast and easy dinner option. Growing up it was just about the only thing I ate. I'm a classic pep and cheese kind of girl, but sometimes I go for the itialian sausage too. Yes, I was eatting pizza when I made this post."
  },
  {
    subject: "The New Dumbo...",
    body: "WHAT A DISAPPOINTMENT! The majority of the main story line was not included. I was looking forward to the crows and a few of the orignal songs that they just didn't show or play. They added new songs, which was okay, but only played the melody to the originals. What a slap in the face, but I'll aways have the original Dumbo."
  },
  {
    subject: "A Sunday Stroll",
    body: "On Sunday, I took my dogs downtown for a walk with a few other friends that I meet up with. We walked from Campuis Martius, down the Riverwalk to the Outdoor Adventure Center. On our way by to Campius Martius, we stopped a Townhouse because they have pet friendly outdoor sitting where we could eat and the dogs could rest. It was a great Sunday hanging with friends and puppies."
  }

  ]

  onSubmit(post) {
    console.log(post)
    this.posts.push(post)
    this.openForm = false;
  }

  openForm : boolean = false;

  onNewPost()  {
    this.openForm = true;
  }

}

