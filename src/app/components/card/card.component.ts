import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from './../../services/post.service';
import Post from '../../models/post';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
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
