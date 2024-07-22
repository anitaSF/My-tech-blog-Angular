import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from './../../services/post.service';
import { HeaderComponent } from '../../components/header/header.component';
import Post from '../../models/post';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {

  selectedPost: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    public postService: PostService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.getPostData(id);
  }

  getPostData(id: number) {
    this.postService.getPost(id).subscribe({
      next: (data) => {
        this.selectedPost = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
