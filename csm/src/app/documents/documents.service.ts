import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documents: Document[] = [];

  documentSelectedEvent = new Subject<Document>();
  documentListChangedEvent = new Subject<Document[]>();

  constructor(private http: HttpClient) {}

  getDocuments() {
    this.http
      .get<{ message: string; documents: Document[] }>(
        'http://localhost:3000/documents'
      )
      .subscribe((responseData) => {
        this.documents = responseData.documents || [];

        this.sortAndSend();
      });
  }

  getDocument(id: string) {
    return this.documents.find(doc => doc.id === id);
  }

  addDocument(document: Document) {
    if (!document) return;

    document.id = '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .post<{ message: string; document: Document }>(
        'http://localhost:3000/documents',
        document,
        { headers }
      )
      .subscribe((responseData) => {
        this.documents.push(responseData.document);
        this.sortAndSend();
      });
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) return;

    const pos = this.documents.findIndex(
      d => d.id === originalDocument.id
    );

    if (pos < 0) return;

    newDocument.id = originalDocument.id;

    // Only keep this if your model actually has _id
    newDocument._id = originalDocument._id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http
      .put(
        'http://localhost:3000/documents/' + originalDocument.id,
        newDocument,
        { headers }
      )
      .subscribe(() => {
        this.documents[pos] = newDocument;
        this.sortAndSend();
      });
  }

  deleteDocument(document: Document) {
    if (!document) return;

    const pos = this.documents.findIndex(
      d => d.id === document.id
    );

    if (pos < 0) return;

    this.http
      .delete('http://localhost:3000/documents/' + document.id)
      .subscribe(() => {
        this.documents.splice(pos, 1);
        this.sortAndSend();
      });
  }

  private sortAndSend() {
    this.documents.sort((a: Document, b: Document) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.documentListChangedEvent.next(this.documents.slice());
  }
}