import { Injectable, Type } from '@angular/core';
import { Logger } from './logger.service';
import { Contact } from '../contact/contact.model';
import { Gender } from '../contact/gender.model';

const CONTACTS: Contact[] = [
        new Contact(1, 'Maria', 'Magdalena', 'deva@heaven.com', '0666 123 456', '69 Heaven str.'),
        new Contact(2, 'Jesus', 'Christ', 'son@heaven.com', '0666 234 567', '68 Heaven str.'),
        new Contact(2, 'Lou', 'Cifer', 'master@hell.com', '0666 666 666', '666 Hell blvd.'),
        new Contact(2, 'Dusty', 'Raven', 'dusty@raven.com', '0878 510 454', '3 Patr. Evtimyi blvd.')
      ];


const GENDERS: Gender[] = [
        { value: 1, display: 'Female' },
        { value: 2, display: 'Male' }
    ];


@Injectable()
export class BackendService {

    constructor(private logger: Logger) { }

    public getAll(type: Type<any>): Promise<any> {
        if (type === Contact) {
            this.logger.log('Backend service called for contacts');

            if (!localStorage.getItem("contacts"))
                localStorage.setItem("contacts", JSON.stringify(CONTACTS));
            /*
            let allContacts: Contact[] = [];
            let tmp = JSON.parse(localStorage.getItem("contacts"));

            for (let c of tmp) {
                allContacts.push(new Contact(c.gender, c.name, c.family, c.email, c.phone, c.address));
            }
            */
            return Promise.resolve(JSON.parse(localStorage.getItem("contacts"))); // TODO get from the database
        }
        else if (type === Gender) {
            this.logger.log('Backend service called for genders');
            return Promise.resolve(GENDERS);
        }


        let err = new Error(`Cannot get object of this type : ${type}`);
        return Promise.reject(err);
    }

    public updateContact(contact: Contact): Promise<any> {

        let allContacts = JSON.parse(localStorage.getItem("contacts"));

        for (let idx in allContacts) {
            if (allContacts[idx].id === contact.id)
                allContacts[idx] = contact;
        }
        localStorage.setItem("contacts", JSON.stringify(allContacts));

        return Promise.resolve(contact);
    }

}
