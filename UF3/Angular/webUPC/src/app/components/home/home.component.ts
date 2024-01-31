import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Racing, the never Ending...";
  currentTitle = '';

  ngOnInit() {
    this.typeTitle();
  }

  typeTitle() {
    let index = 0;
    const intervalId = setInterval(() => {
      this.currentTitle += this.title[index];
      index++;
      if (index === this.title.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }
}
