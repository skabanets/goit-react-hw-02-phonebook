import { ContactForm } from 'components/ContactForm/ContactForm';
import React, { Component } from 'react';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}
