import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  http = inject(HttpClient);

  markRequestHit() {
    return this.http.get('https://dotnet-test-ci4i.onrender.com/api/ApexChat/MarkRequestHit');
  }
}
