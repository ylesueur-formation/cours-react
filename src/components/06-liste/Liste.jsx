import React from 'react';

let users = ["a", "b", "c"];

class Liste extends React.Component {
    constructor(props) {
        super(props);
    }

    creatationLiElement() {
        let liElements = [];
        for (let user of users) {
            let liElement = <li>{user}</li>
            liElements.push(liElement);
        }
        return liElements;
    }
    render() {
        <div>
            <h1>Les listes</h1>
            <ul>
                {
                    this.creatationLiElement()
                }
            </ul>
        </div>
    }
}
