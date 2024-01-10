import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookWrapper, Subtitle, Title } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <PhonebookWrapper>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <Subtitle>Contacts ({contacts.length})</Subtitle>
        <Filter />
        {contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <Contacts contacts={contacts} onDelete={this.deleteContact} />
        )}
      </PhonebookWrapper>
    );
  }
}
