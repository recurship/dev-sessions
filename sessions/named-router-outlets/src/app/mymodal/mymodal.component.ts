import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.css']
})
export class MymodalComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;

  modalRef: BsModalRef;
  params$ = this.activatedRoute.params;

  constructor(
    private modalService: BsModalService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.modalRef = this.modalService.show(this.template);
  }

  hide() {
    this.location.back();
  }

  ngOnDestroy() {
    this.modalRef.hide();
  }

}
