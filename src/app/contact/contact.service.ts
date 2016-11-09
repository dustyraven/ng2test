import { BackendService } from '../shared/backend.service';
import { Logger } from '../shared/logger.service';
import { Contact } from './contact.model';
import { Gender } from './gender.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
    private contacts: Contact[] = [];
    private genders: Gender[] = [];

    constructor(private backend: BackendService, private logger: Logger) {}

    public getContacts() {
        this.backend.getAll(Contact).then( (contacts: Contact[]) => {
            this.logger.log(`Fetched ${contacts.length} contacts.`);
            console.log(contacts);
            // this.contacts.push(...contacts);
            this.contacts = contacts;
        }).catch(
            err => this.logger.error(`ContactService error: ${err}`)
        );

        return this.contacts;
    }

    public getGenders() {
        this.backend.getAll(Gender).then( genders => {
            this.logger.log(`Fetched ${genders.length} genders.`);
            // this.contacts.push(...contacts);
            this.genders = genders;
        }).catch(
            err => this.logger.error(`ContactService error: ${err}`)
        );

        return this.genders;
    }

    public update(contact: Contact) {

        this.backend.updateContact(contact).then( contact => {
            this.logger.log(`Contact ${contact.name} ${contact.family} updated.`);
        }).catch(
            err => this.logger.error(`ContactService error: ${err}`)
        );
    }
}
