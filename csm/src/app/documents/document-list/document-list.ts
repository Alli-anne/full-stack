import { Component, EventEmitter, Output } from '@angular/core';

import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
documents: Document[] = [
   new Document(1, 'Document 1', 'Document 1 description', 'https://www.google.com', []),
    new Document(2, 'Document 2', 'Document 2 description', 'https://www.google.com', []),
    new Document(3, 'Document 3', 'Document 3 description', 'https://www.google.com', []),
    new Document(4, 'Document 4', 'Document 4 description', 'https://www.google.com', []),
    new Document(5, 'Document 5', 'Document 5 description', 'https://www.google.com', []),
]
   
}


