import React from "./react.development.js";
import ReactDOM from "./react-dom.development.js";

class ContactItem extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
    }

    render() {
        return React.createElement(
            "li",
            { className: "Contact", key: this.props.id },
            React.createElement("h2", { className: "Contact-name" }, this.props.name),
            React.createElement("a", { className: "Contact-email" }, this.props.email)
        );
    }
}

var contacts = [
    { key: 1, id: 1, name: "James Nelson", email: "james@jamesknelson.com" },
    { key: 2, id: 2, name: "Bob", email: "bob@xxx.cn" },
    { key: 3, id: 3, name: "pan.ma" },
];

var listElements = contacts
    .filter(function (contact) {
        return contact.email;
    })
    .map(function (contact) {
        return React.createElement(ContactItem, contact);
    });

var rootElement = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Contacts"),

    // If your `children` is an array, you'll need to give each one a unique `key`
    // prop. I'll explain why a little later.
    React.createElement("ul", {}, listElements)
);

ReactDOM.render(rootElement, document.getElementById("react-app"));
