import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { Gender } from './gender.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'contact-list',
    templateUrl: './contact-list.component.html'
})


export class ContactListComponent implements OnInit {
    public contacts: Contact[] = [];
    public genders: Gender[] = [];
    public selectedContact: Contact;

    constructor(private service: ContactService) { }

    public ngOnInit () {
        this.contacts = this.service.getContacts();
        this.genders = this.service.getGenders();
    }

    public selectContact(contact: Contact): void {
        console.log(`Contact selected ${JSON.stringify(contact)}`);
        this.selectedContact = contact;
    }
}
