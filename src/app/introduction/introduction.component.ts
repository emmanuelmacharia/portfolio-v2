import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-introduction',
  imports: [ContactComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements OnInit {

  taglines = [
    "that positively impact communities",
    "that empower people to do more"
  ]

  displayText = this.taglines[0];

  timer = 60;

  ngOnInit() {
    this.startTimer();
  }


  private startTimer(): void {
    // setInterval(() => {
    //   if(!this.displayText) {
    //     this.displayText = this.taglines[0];
    //   } else if(this.displayText = this.taglines[0]) {
    //     this.displayText = this.taglines[1];
    //   } else {
    //     this.displayText = this.taglines[0]
    //   }
    // }, this.timer);
  }



}
