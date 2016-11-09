import { Component, Input } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent {
    @Input()
    public contact: Contact;

    constructor(private service: ContactService) { }

    save(): void {
        this.service.update(this.contact);
        // this.heroService.update(this.hero).then(() => this.goBack());

    }


}
