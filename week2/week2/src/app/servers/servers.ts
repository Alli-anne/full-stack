import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers  implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  
  constructor() {
   setTimeout(() => {
    this.allowNewServer = true;
   }, 100);

  }
  ngOnInit(){
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
   this.serverName = (<HTMLInputElement>event.target).value;
  }

  
}
