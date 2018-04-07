import React from "react";
import "./ToolbarButton.css";

const toolbarButton = (props) => {
    return (
        <div className="toolbar-button">
            {props.children}
        </div>
    )
}

export default toolbarButton;
