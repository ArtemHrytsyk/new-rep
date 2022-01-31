import React from 'react'
import ContactsList from '../ContactsList/ContactsList'

class Contacts extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      name: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('Ім\'я, що було надіслано: ' + this.state.value);
    event.preventDefault();


  }


  render() {
    return (
      <>
        <ContactsList addContact={this.addContact}
          inputValue={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
      </>
    )
  }
}

export default Contacts;
