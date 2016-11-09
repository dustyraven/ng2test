import { Component, Input } from '@angular/core';
import { Contact } from './contact.model';

@Component({
    selector: 'contact-edit',
    templateUrl: './contact-edit.component.html'
})

export class ContactEditComponent {
    @Input()
    public contact: Contact;
}
