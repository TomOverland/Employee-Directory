import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Explain how to filter  by topic</p>
            </div>
        )
    }
}