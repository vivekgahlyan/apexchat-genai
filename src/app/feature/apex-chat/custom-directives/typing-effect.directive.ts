import { Directive, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]'
})
export class TypingEffectDirective implements OnChanges {
  @Input('appTypingEffect') text: string = '';
  @Input() speed: number = 1;
  @Output() typingUpdate = new EventEmitter<string>();

  private typed = '';

  ngOnChanges() {
    if (this.text) {
      this.startTyping();
    }
  }

  private async startTyping() {
    this.typed = '';
    for (let i = 0; i < this.text.length; i++) {
      this.typed += this.text.charAt(i);
      this.typingUpdate.emit(this.typed);
      await new Promise(resolve => setTimeout(resolve, this.speed));
    }
  }
}