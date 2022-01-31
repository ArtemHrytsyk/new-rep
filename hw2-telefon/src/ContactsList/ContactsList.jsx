import React from 'react'

const ContactsList = ({ inputValue, handleSubmit, handleChange }) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br/>
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <br/>
                <input type="submit" value="Add Contact" />
            </form>
        </div>
    )
}

export default ContactsList;

