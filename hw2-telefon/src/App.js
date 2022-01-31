import Contacts from './Contacts/Contacts'
import './App.css';
import Clock from './Clock'
import React from 'react'

class App extends React.Component {
  state = {
    contacts: [
      { name: 'Artem', tel: '1234567890', id: 0 },
      { name: 'Oleh', tel: '112345567890', id: 1 }
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  addOnClick = () => {
    let contact = { name: this.state.name, tel: this.state.number }
    this.setState((prev) => (
      { contacts: [...prev.contacts, contact], name: '', number: '' }
    ));
  }




  render() {
    return <div className="App">
      <header className="App-header">
        <div>Phonebook</div>
        <div>Name</div>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <div>Number</div>
        <input
          onChange={this.handleChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button onClick={this.addOnClick}>Add contact</button>
        <div>Contacts</div>
        <div>{this.state.contacts.map((contact) => (
          <div key={contact.id}>
            {contact.name}:{contact.tel}
          </div>
        ))}</div>
      </header>
    </div>;
  }
}

export default App;
