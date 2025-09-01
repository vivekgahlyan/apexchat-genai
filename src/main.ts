import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MarkdownModule } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MarkdownModule.forRoot(),
      FormsModule,
      CommonModule,
      HttpClientModule
    ),
  ]
},)
  .catch((err) => console.error(err));