import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers  implements OnInit {
  allowNewServer = false;

  constructor() {
   setTimeout(() => {
    this.allowNewServer = true;
   }, 2000);
  }
  ngOnInit(){
  }
}

