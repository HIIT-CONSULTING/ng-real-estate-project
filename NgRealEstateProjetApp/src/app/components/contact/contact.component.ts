import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  
  constructor(
    private translate: TranslateService,
  ) {}

  navLinks = [
    { path: 'contactform', label: "Contact.title",icon:'list_alt' },
    { path: 'contactlist', label: 'Contact.title-list',icon:'' },
  ];
}

