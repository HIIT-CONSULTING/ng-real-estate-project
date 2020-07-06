import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "@shared/models/Agent.model";
import { ContactService } from "../contact.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<any[]>;
  contacts: any[];
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.contacts$ = this.contactService.getContacts();
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      console.log("contacts", this.contacts);
    });
  }

  onClick() {
    this.router.navigate(["/contact/contactform"]);
  }
  Delete(id: number) {
    this.contactService
      .deleteContact(id)
      .subscribe(
        (data) => {
          console.log("success");
          debugger;
          this.snackBar.open('le candidat est supprimé avec succès!', '', { duration: 1000 ,panelClass: ['blue-snackbar'] ,  verticalPosition: 'top', horizontalPosition:'end' });

        },
        (error) => {
          this.snackBar.open("veuillez vérifier vos informations!", '', { duration: 1000, panelClass: ['blue-snackbar'], verticalPosition: 'top', horizontalPosition:'end'});
    
        });
      this.contacts$ = this.contactService.getContacts();
      this.contactService.getContacts().subscribe(
        (contacts) => {
        this.contacts = contacts;
        console.log("contacts", this.contacts);
      });
  }

  Update(id: number) {

    this.router.navigate(["/contact", id, "update"]);
  }
  details(id: number) {
    this.router.navigate(["/contact", id, "details"]);
  }
}
