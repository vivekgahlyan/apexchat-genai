import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApexChatComponent } from './apex-chat/apex-chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApexChatComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apexchat';
}
