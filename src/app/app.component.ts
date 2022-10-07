import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  
  private toggleEvent;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.toggleEvent = this.createToggleEvent();
    this.getFaqHeaders().forEach((c) =>
      c.addEventListener('click', this.toggleEvent)
    );
  }

  private createToggleEvent() {
    return this.toggleFaq.bind(this);
  }

  toggleFaq(event) {
    this.closeOpenNodes(event);
    event.target.parentNode.classList.toggle('header-red');
    // this.getFaqHeaders().removeEventListener('click', this.toggleEvent);
  }

  private closeOpenNodes(event) {
    this.getFaqHeaders().forEach((c) => {
      if (c != event.target) {
        c.parentNode.classList.remove('header-red');
      }
    });
  }

  // ngOnDestroy(): void {
  // 	console.log('on destroy called!');
  // 	this.getFaqHeaders().removeEventListener('click', this.createToggleEvent());
  // }

  private getFaqHeaders() {
    return this.elementRef.nativeElement.querySelectorAll('.faq-container>h2');
  }
}
