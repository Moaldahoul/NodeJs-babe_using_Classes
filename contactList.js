// Constact list class
// Add a contact 
// Remove a contact 
/**
 * Class for create contact list
 */
export class ConstactList {
    list_of_contacts = []; // we can add this property and remove the constructor()
    
    // constructor() { // because beofer ES6 didn't allow us to add property attach to the class, but babel doing this transformation for me 
    //     this.list_of_contacts = []; // Array

    // }
    /**
     * Add a contact to the contact list 
     * @param {number} contact is an object that represent a contact
     * @description 
     * first create a new contact with the class Contact like so
     */
    addContact(contact) {
        // check if is of type contact
        if(!(contact instanceof Contact)) {
            console.log("Sorry is not a vaild contact type, Contact should contain name and phone properties,\nyou gave", JSON.stringify(contact));
            return;     
        }
        // I need to check if contact exist
        let exist = false;
        this.list_of_contacts.forEach((contact_in_the_list) => {
            exist = (contact.name === contact_in_the_list.name || contact.phone === contact_in_the_list.phone)
        });
        if (exist) {
            //do nothing or -->
            console.log(`Sorry the contact ((${contact.name})) already exist!`);
            
        } else {
            this.list_of_contacts.push(contact);
        }

    }
    /**
     * Remove a contact from the list
     * @param {number} i is the index of the array of the contact list
     */
    removeContact(i) {
        if (this.list_of_contacts[i]) {
            this.list_of_contacts.splice(i, 1);
        }
    }

    /**
     * remove all contacts
     */
    removeAllContacts() {
        this.list_of_contacts = [];
    }
    /**
     * 
     * @param {string} name of contact
     */
    searchByName(name) {
        let phone;
        this.list_of_contacts.forEach((contact) => {
            if (contact.name === name) {
                phone = contact.phone;
            }
        });
        return phone;
    }
}

export class Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is  the phone number of the contact
     * @example
     * first create a new contact with the clas Contact list so:
     *  const contact = new Contact("mohamed", 32453455);
     */
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

}

export class VipContact extends Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {*} phone is the phone number if the contact
     * @param {*} secret_phone is the secret phone number if the contact
     */
    constructor(name, phone, secret_phone) {
        super(name, phone); // this for calling constructor() from the extends class Contact // it is same as // new Contact(name, phone);
        this.secret_phone = secret_phone; // this propoty belong only to VipContact class.
    }
}
