import { Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-document-edit',
  standalone: false,
  templateUrl: './document-edit.html',
  styleUrl: './document-edit.css',

})
export class DocumentEdit implements OnInit {
    originalDocument: Document;
    document: Document;
    editMode: boolean = false;

    constructor(private documentService: DocumentsService, 
      private router: Router, 
      private route: ActivatedRoute) {
      
    }


    ngOnInit(): void {
  this.route.params.subscribe(
    (params: Params) => {
      const id = params['id'];
      if (!id) {
        this.editMode = false;  // ✅ correct
        return;                  // ✅ correct
      }
      this.editMode = true;
      this.originalDocument = this.documentService.getDocument(id);
      if (!this.originalDocument) {
        return; // ✅ correct
      }
      this.document = JSON.parse(JSON.stringify(this.originalDocument)); 
    }
  );
    }
   onSubmit(form: NgForm) {
  const value = form.value;

  const newDocument = new Document(
    this.originalDocument?.id,
    value.name,
    value.description,
    value.url,
    []
  );


  if (this.editMode) {
    this.documentService.updateDocument(
      this.originalDocument,
      newDocument
    );
  } else {
    this.documentService.addDocument(newDocument);
  }

  this.router.navigate(['/documents']);
}
    onCancel() {
    this.router.navigate(['/documents'])    }
  
  }
  