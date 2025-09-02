import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApexChatComponent } from './feature/apex-chat/apex-chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  providers: [],
  imports: [ApexChatComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apexchat';
}
