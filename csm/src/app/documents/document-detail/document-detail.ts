import { Component, OnInit} from '@angular/core';
import { WinRef } from '../../../win-ref';
import { DocumentsService } from '../documents.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',

})


export class DocumentDetail implements OnInit {
  document: Document | null = null;
  constructor(private documentService: DocumentsService, private router: Router, private route: ActivatedRoute, private winRef: WinRef) {}
  nativeWindow: any;
 ngOnInit() {
  this.route.params.subscribe((params) => {
    const id = params['id'];
    this.document = this.documentService.getDocument(id);
    this.nativeWindow = this.winRef.getNativeWindow();
    
  });
  
}
 onView() {
     this.nativeWindow.open(this.document.url);
   }
   onDelete() {
  this.documentService.deleteDocument(this.document);
  this.router.navigateByUrl('/documents');
}
}
