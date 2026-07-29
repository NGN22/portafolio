import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  readonly isExpanded = signal(false);
  
  toggleAbout(){
    this.isExpanded.update((value) => !value);
  }

}
