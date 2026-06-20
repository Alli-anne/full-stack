import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService  {
  documents: Document[] = [];
  documentSelectedEvent = new Subject<Document>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;
  constructor(private http: HttpClient) {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

   getDocuments() {
  this.http.get<Document[]>(
    'https://csm-wdd430-default-rtdb.firebaseio.com/documents.json'
  ).subscribe(
    (documents: Document[]) => {
      this.documents = documents;

      this.maxDocumentId = this.getMaxId();

      this.documents.sort((a: Document, b: Document) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });

      this.documentListChangedEvent.next(this.documents.slice());
    },
    (error: any) => {
      console.error(error);
    }
  );
}
    getDocument(id: string) {
      return this.documents.find(document => document.id === id);
  }
  deleteDocument(document: Document) {
   if (!document) {
      return;
   }
   const pos = this.documents.indexOf(document);
   if (pos < 0) {
      return;
   }
   this.documents.splice(pos, 1);
   this.storeDocuments();
}
getMaxId() {
  let maxId = 0;
  for (const document of this.documents) {
    const currentId = parseInt(document.id, 10);
    if (currentId > maxId) {
      maxId = currentId;
    }
  }
  return maxId;
 
}
addDocument(newDocument: Document) {
  if (!newDocument) {
    return;
  }
  this.maxDocumentId++;
  newDocument.id = this.maxDocumentId.toString();
  this.documents.push(newDocument);
  this.storeDocuments();

}
updateDocument(originalDocument: Document, newDocument: Document) {
  if (!originalDocument || !newDocument) {
    return;
  }
  const pos = this.documents.indexOf(originalDocument);
  if (pos < 0) {
    return;
  }
  newDocument.id = originalDocument.id;
  this.documents[pos] = newDocument;
  this.storeDocuments();
}
storeDocuments() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const documentList = JSON.stringify(this.documents);

  this.http.put(
    'https://csm-wdd430-default-rtdb.firebaseio.com/documents.json',
    documentList,
    { headers: headers }
  ).subscribe(
    () => {
      this.documentListChangedEvent.next(this.documents.slice());
    },
  (error:any) => {
    console.log(error);
  }
  );

}
}