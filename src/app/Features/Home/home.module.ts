import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavBarComponent } from 'src/app/Common-layout/nav-bar/nav-bar.component';
import { CreatePostContainerComponent } from './create-post-container/create-post-container.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { NewsFeedScreenComponent } from './news-feed-screen/news-feed-screen.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post/post.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [HomeScreenComponent, LeftSideBarComponent,
    PostComponent,
    RightSideBarComponent,
    PostContainerComponent,
    CreatePostContainerComponent,
    NewsFeedScreenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AvatarModule
  ]
})
export class HomeModule { }
