import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
 
import { Message } from '../message.model';
@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
 @ViewChild('subject') subject: ElementRef;
 @ViewChild('msgText') msgText: ElementRef;
 @Output() addMessageEvent = new EventEmitter<Message>();
onSendMessage() {
  const subjectValue = this.subject.nativeElement.value;
  const msgTextValue = this.msgText.nativeElement.value;
  const message = new Message(0, subjectValue, msgTextValue, 'Allison Price');
  this.addMessageEvent.emit(message);
  this.onClear();
}
 onClear() {
   this.subject.nativeElement.value = '';
   this.msgText.nativeElement.value = '';
 }
}
