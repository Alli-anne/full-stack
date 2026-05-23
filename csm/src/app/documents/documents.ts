import { Component, OnInit, EventEmitter } from '@angular/core';

import { Document } from './document.model';
import { DocumentsService } from './documents.service';
@Component({
  selector: 'app-documents',
  standalone: false,
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents implements OnInit {
  selectedDocument: Document | null = null;
  constructor(private documentsService: DocumentsService) {}


 ngOnInit() {
  this.documentsService.documentSelectedEvent.subscribe(
    (document: Document) => {
      this.selectedDocument = document;
    }
  )
}


}
