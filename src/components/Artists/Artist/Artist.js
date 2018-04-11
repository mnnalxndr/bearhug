import React from "react";

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import "./Artist.css";


    // <div className="artist-picture">Artist Picture</div>
const artist = (props) => {
    return (
        <Wrapper classes="Artist">
            <img className="artist-picture" src={props.image} />
            <div>{props.name}</div>
            <div>{props.track}</div>
            <div>{props.web}</div>
        </Wrapper>
    );
}

export default artist;
