import { Component } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css'
})
export class AcercadeComponent {
  contador: number = 0;

  constructor(private postsService: PostsService ) {}

  onClick(): void {
this.postsService.changePost(`Clicks:${++this.contador}`); }
}
