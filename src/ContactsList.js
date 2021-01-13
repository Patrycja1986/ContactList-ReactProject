import {Component} from "react";
import ContactItem from "./ContactItem";

class ContactsList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul>
                {this.props.contacts.map(contact => <li key={contact}>{contact}</li>)}
            </ul>
    );
    }
}
export  default ContactsList;