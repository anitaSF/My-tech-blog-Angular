import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  selectedPost: number = 0;

  constructor(public postService: PostService) {
  }

  ngOnInit(): void {
    this.getPostsData();
  }

  getPostsData() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.postService.posts = data;
        console.log("posts importados", this.postService.posts)
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getPostsData();
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  selectPost(id: number) {
    this.selectedPost = id;
  }

}
