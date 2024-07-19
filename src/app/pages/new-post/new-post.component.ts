import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [HeaderComponent, FormComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

}
