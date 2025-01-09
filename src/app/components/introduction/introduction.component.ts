import { AfterViewInit, Component, ElementRef, inject, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-introduction',
  imports: [ContactComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements AfterViewInit {

  platformId = inject(PLATFORM_ID);

  @ViewChild('backend', { static: true}) backendDiv!: ElementRef;
  @ViewChild('backendText', { static: true}) backendText!: ElementRef;
  @ViewChild('terminal', {static: true} ) terminal!: ElementRef;
  @ViewChild('aiText', { static: true }) aiText!: ElementRef;
 
  visible = signal(true);
  waiting = signal(false);
  aiActiveAnimation = signal(false);
  letterCount = 1;
  keyboardInterval = 1;

  taglines = [
    "that positively impact communities",
    "that empower people to do more",
    "that are secure and accessible"
  ]

  backendDisplayText = "Backend";
  aiDisplayText = "Machine Learning & AI";

  stackTexts = ["Frontend", "Backend", "Machine Learning & AI"]


  ngAfterViewInit(): void {
  
      // check first whether its the browser
      // for the backend console typing
      this.animateConsoleEffect();
      // for the  ML text animation & gsap
      this.animateAI();
      
  }



  private animateConsoleEffect(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.typeText();
    }
  }

  private typeText(): void {
    setInterval(() => {
      if(this.letterCount === 0 && this.waiting() === false) {
        this.waiting.set(true);
        this.backendText.nativeElement.innerHTML = this.stackTexts[0].substring(0, this.letterCount);
        this.resetConfig();
      } else if (this.letterCount === this.stackTexts[0].length + 1 && this.waiting() === false) {
        this.waiting.set(true)
        this.backSpace()
      }  else if (this.waiting() === false) {
        this.backendText.nativeElement.innerHTML = this.stackTexts[0].substring(0, this.letterCount);
        this.letterCount += this.keyboardInterval;
      }
    }, 150);
    this.blinkUnderscore();
  }


  private resetConfig(): void {
    setTimeout(() => {
      let usedWord = this.stackTexts[0]
      this.stackTexts.shift();
      this.stackTexts.push(usedWord)
      this.keyboardInterval = 1;
      this.letterCount += this.keyboardInterval;
      this.waiting.set(false);
    }, 1200)
  }


  private backSpace(): void {
    // deletes each character one at a time
    setTimeout(() => {
      this.keyboardInterval = -1;
      this.letterCount += this.keyboardInterval;
      this.waiting.set(false)
    }, 1500)
  }


  private blinkUnderscore(): void {
    // mimic terminal behaviour by hiding and unhiding the underscore every 400ms
    setInterval(() => {
      if (this.visible() === true) {
        this.terminal.nativeElement.classList.add('invisible');
        this.visible.set(false);
      } else {
        this.terminal.nativeElement.classList.remove('invisible');
        this.visible.set(true);
      }
    }, 400)
  }


  private animateAI(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.scrambleText();
    }
  }

  private randomArrElement = (arr: string[]) => {
    return arr[(arr.length * Math.random()) | 0];
  };

  private replaceCharacter = (char: string, index: number, randomChar: string) => {
    return `${char.substring(0, index)}${randomChar}${char.substring(index + 1)}`;
  }

  private scrambleText(): void {
    if(this.aiActiveAnimation() === false) {
      const solveTime = 800;
      const characterSelectionTime = 40;
      let delay = 200;
      let delayBetweenSelection = 0;
      const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*&^%$#@!"];
      const chars = [...this.aiDisplayText];
      const lockMilliseconds = delay * chars.length + solveTime;
      this.aiActiveAnimation.set(true);

      setTimeout(() => {
        this.aiActiveAnimation.set(false);
      }, lockMilliseconds)

      chars.forEach((char, index) => {
        setTimeout(() => {
          let intervalId = setInterval(() => {
            const randomChar = this.randomArrElement(letters);
            this.aiText.nativeElement.innerText = this.replaceCharacter(this.aiText.nativeElement.innerText , index, randomChar);
            setTimeout(() => {
              clearInterval(intervalId);
              this.aiText.nativeElement.innerText = this.replaceCharacter(this.aiText.nativeElement.innerText , index, chars[index]);
            }, solveTime);
          }, characterSelectionTime);
        }, delayBetweenSelection === 0 ? (delayBetweenSelection += 1) : delayBetweenSelection +=delay );
      })
    }
  }
}
