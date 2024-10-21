import React from "react";
import TopTweets from "../images/Timeline-Prop.svg";



function Header (){
    return (
        <>
        <header className = "header">
            <Title/>
            <TopTweet/>
        </header>
        </>
    );
}

function TopTweet (){
    return <img className ="top-tweets" src={TopTweets} alt="toptweet"/>
}

function Title (){
    return <h1 className="page-title">Home</h1>
};



export default Header;