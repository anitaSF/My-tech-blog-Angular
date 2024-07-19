import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'newpost', component: NewPostComponent },
    { path: ':id', component: PostDetailComponent },

];
