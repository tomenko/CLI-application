const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");
const { v1 } = require('uuid');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    error.message = "Cannot read contacts file";
    return error;
  }
}

const getContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find(contact => contact.id === contactId);
    if (!contactById) {
      throw new Error("Id incorrect");
    }
    return contactById
  } catch (error) {
    return error.message;
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.find(contact => contact.id === contactId);
    if (index === -1) throw new Error('Error: ID is incorrect');
    const contactsUpdate = contacts.filter(contact => contact.id !== contactId);
    const contactsList = JSON.stringify([...contactsUpdate]);
    fs.writeFile(contactsPath, contactsList);
    

    return (`Contact with id ${contactId} was removed`);
  } catch (error) {
    console.error(error);
  }
}

const addContact =async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: v1(),
      name,
      email,
      phone,
    };
    const newContacts = JSON.stringify([...contacts, newContact]);
    fs.writeFile(contactsPath, newContacts);
    return newContact;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};