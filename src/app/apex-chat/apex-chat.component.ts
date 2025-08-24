import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environment/environment';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { TypingEffectDirective } from './custom-directives/typing-effect.directive';
import { MarkdownModule, MarkdownComponent } from 'ngx-markdown';

const genAI = new GoogleGenerativeAI(environment.apiKeyGemini);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface Message {
  text: string;
  who: 'user' | 'bot';
  typed?: string;
}

@Component({
  selector: 'app-apex-chat',
  imports: [FormsModule, CommonModule, TypingEffectDirective, MarkdownComponent],
  templateUrl: './apex-chat.component.html',
  styleUrl: './apex-chat.component.css'
})
export class ApexChatComponent {
  @ViewChild('messagesContainer', { static: false }) messagesContainer!: ElementRef<HTMLDivElement>;
  userInput: string = '';
  messages: Message[] = [
    { text: 'Hey! This is <b>apexchat.ai</b>, your all time AI companion.<br> How can I assist you today?', who: 'bot' }
  ];
  showScrollBtn = false;
  geminiResponse: string = '';
  typedText: any;

  onTypingUpdate(msg: any, typed: string) {
    msg.typed = typed;
    this.autoScrollWhileTyping();
  }

  private autoScrollWhileTyping() {
    const el = this.messagesContainer?.nativeElement;
    if (!el) return;

    const distanceFromBottom = el.scrollHeight - (el.scrollTop + el.clientHeight);
    const ALLOW_AUTO_SCROLL_THRESHOLD = 120; // px

    if (distanceFromBottom > ALLOW_AUTO_SCROLL_THRESHOLD) {
      return;
    }

    requestAnimationFrame(() => {
      try {
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      } catch {
        el.scrollTop = el.scrollHeight;
      }
    });
  }

  scrollToBottom() {
    const el = this.messagesContainer?.nativeElement;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    this.scrollToBottom();
    this.messages.push({ text: this.userInput, who: 'user' });
    const userText = this.userInput;
    this.userInput = '';
    this.scrollToBottom();

    setTimeout(async () => {
      const result = await model.generateContent([userText]);
      this.geminiResponse = result.response.text();
      this.messages.push({ text: this.geminiResponse, who: 'bot' });
      this.scrollToBottom();
    }, 250);
  }

  onScroll(): void {
    this.toggleScrollBtn();
  }

  toggleScrollBtn(): void {
    const msgs = this.messagesContainer.nativeElement;
    const atBottom = Math.abs(msgs.scrollHeight - msgs.scrollTop - msgs.clientHeight) < 4;
    this.showScrollBtn = !atBottom;
  }

  profileClicked(): void {
    const url = 'https://www.linkedin.com/in/kumar-vivek';
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
