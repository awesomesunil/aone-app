import React, { Component } from 'react'

export class Navigation extends Component {
    super(props){
        this.renderSome = this.renderSome.bind(this);
    }

    renderSome = () => <div>youtube bit</div>
    render() {
        return (
            <div>My Name is Sunil</div>
        )
    };
}

export default Navigation;

