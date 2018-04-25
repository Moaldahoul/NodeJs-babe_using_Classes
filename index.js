import { ConstactList, Contact, VipContact } from "./contactList";
// Here started to use my classes

let my_contact_list = new ConstactList();
let my_vip_contact_list = new ConstactList();

const contact = new Contact('Mohamed', 43635234);
const contact1 = new Contact('Gary', 98789666);
const contact2 = new Contact('Gary', 34575234);
const vip_contact = new VipContact("Abo Ismail", 543453426, 4566588);

my_contact_list.addContact(contact);
my_contact_list.addContact(contact1);
my_contact_list.addContact(contact2);
my_vip_contact_list.addContact(vip_contact);
my_contact_list.addContact({
    name: "Inarah",
    mobile_phone: 675344478
})

const mohameds_phone = my_contact_list.searchByName("Mohamed");
console.log('Mohamed_phone', mohameds_phone);


console.log(my_contact_list.list_of_contacts);
console.log(my_vip_contact_list.list_of_contacts);

my_contact_list.removeContact(0);

console.log(my_contact_list.list_of_contacts);
