import { Component, ViewChild, ElementRef } from '@angular/core';
 
import { Message } from '../message.model';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
 @ViewChild('subject') subject: ElementRef;
 @ViewChild('msgText') msgText: ElementRef;

 constructor(private messageService: MessageService) {}
onSendMessage() {
  const subjectValue = this.subject.nativeElement.value;
  const msgTextValue = this.msgText.nativeElement.value;
const message = new Message(
  '0',
  subjectValue,
  msgTextValue,
  '7',
  ''
);  this.messageService.addMessage(message);
  this.onClear();
}
 onClear() {
   this.subject.nativeElement.value = '';
   this.msgText.nativeElement.value = '';
 }
}
