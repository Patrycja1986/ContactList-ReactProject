import './App.css';
import React, {Component} from 'react';
import AppHeader from "./AppHeader";
import ContactsList from "./ContactsList";

const allContacts=['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends Component {

    constructor() {
        super();
        this.state={filteredContacts: allContacts}
    }


    validateOutput(event){
        // eslint-disable-next-line no-unused-vars
        const text= event.currentTarget.value;
        const filteredContacts= this.getfilteredByEnteredText(text);
        this.setState({filteredContacts})
    }
    getfilteredByEnteredText(text) {
        return allContacts.filter(contact=>contact.toLowerCase().includes(text));
    }

render() {
    return(
        <div>
    <AppHeader onSearchInput={this.validateOutput.bind(this)} />
    <ContactsList contacts={this.state.filteredContacts}/>
        </div>
);
}

}


    export default App;
