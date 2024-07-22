import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URL = 'https://668acfdc2c68eaf3211de9ad.mockapi.io/app/posts';
  posts: Post[];

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  // Petición API listado post (get)
  getPosts() {
    return this.http.get<Post[]>(this.API_URL)
  }

  // Petición API detalle post (.get)
  getPost(id: number) {
    return this.http.get<Post>(`${this.API_URL}/${id}`)
  }

  // Petición API para añadir nuevo post (.post)
  postNewPost(post: Post) {
    return this.http.post<Post>(this.API_URL, post)
  }

  // Petición API para eliminar post (.delete)
  deletePost(id: number) {
    return this.http.delete<Post>(`${this.API_URL}/${id}`)
  }

}
