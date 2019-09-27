import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialPostComponent } from './socialPosts/socialPosts.component';
import { PostComponent } from './socialPosts/post-form/post/post.component';
import { PostFormComponent } from './socialPosts/post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialPostComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
