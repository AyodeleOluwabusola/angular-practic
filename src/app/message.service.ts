import { Injectable } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
  constructor() { }

  clear() {
    this.messages = [];
  }
}
