import React from "react";
import "./Footer.css";

import logo from "../../assets/images/bearhugthumbnail.jpeg";

const footer = (props) => {
    return (
        <div className="footer">
            <img alt="Bearhug" src={logo} />
        </div>
    );
}

export default footer;
