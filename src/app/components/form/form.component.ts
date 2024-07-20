import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  postForm: FormGroup;
  id: FormControl;
  title: FormControl;
  text: FormControl;
  author: FormControl;
  publishDate: FormControl;
  image: FormControl;

  constructor(public postService: PostService, private router: Router) {
    this.id = new FormControl('');
    this.title = new FormControl('');
    this.text = new FormControl('');
    this.author = new FormControl('');
    this.publishDate = new FormControl('');
    this.image = new FormControl('');

    this.postForm = new FormGroup({
      id: this.id,
      title: this.title,
      text: this.text,
      author: this.author,
      publishDate: this.publishDate,
      image: this.image,
    });
  }

  postNewPost() {
    console.log(this.postForm.value);
    this.postService.postNewPost(this.postForm.value).subscribe({
      next: (data) => {
        console.log('Nuevo post creado:', data);
        this.postForm.reset();
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
