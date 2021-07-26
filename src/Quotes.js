import React, { Component, useState } from "react";
import { quotes } from "./data.json";
import "./App.css";

const GetQuotes = () => {

    let allQuotes = quotes.map((quoteText, quoteAuth) =>
        <div><p id="text">{quoteText.quote}</p><p id="author">{quoteText.author}</p></div>);

    let randomNum = Math.floor(Math.random() * allQuotes.length);
    let randomQuote = allQuotes[randomNum];

    return (
        <div>
            {randomQuote}
        </div>
    )
};

class Quotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: quotes
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("test button clicked");
        const data = [];
        this.setState({
            data,
        });
        GetQuotes();
    }

    render() {
        return (
            <div id="quote-box" className="quote-container col-xs-6">
                <GetQuotes />

                <div className="button-container">
                    <button id="new-quote" className="btn btn-primary" onClick={this.handleClick}>New Quote</button>

                    <a id="tweet-quote" className="twitter-share-button" href="https://twitter.com/intent/tweet?text={Hello%20world}"
                        data-size="large" target="_blank"><i className="fab fa-twitter-square fa-3x"></i></a>
                </div>
            </div>
        );
    }
}


export default Quotes;
