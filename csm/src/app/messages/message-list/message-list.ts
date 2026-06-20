import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
 
import { Message } from '../message.model';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList implements OnInit {
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        this.changeDetectorRef.detectChanges();
      }
    )

    this.messageService.getMessages();
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
  
}
