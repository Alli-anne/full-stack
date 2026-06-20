import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';


@Component({
  selector: 'app-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList  implements OnInit, OnDestroy {
  documents: Document[] = [];
  subscription: Subscription;


  constructor(
    private documentsService: DocumentsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  onSelectedDocument(document: Document) {
    this.documentsService.documentSelectedEvent.next(document);
  }
  
 ngOnInit() {
  this.subscription = this.documentsService.documentListChangedEvent.subscribe(
    (documents: Document[]) => {
      this.documents = documents;
      this.changeDetectorRef.detectChanges();
    }
  )

  this.documentsService.getDocuments();
}
   
ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
}
