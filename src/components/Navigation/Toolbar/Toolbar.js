import React from "react";
import "./Toolbar.css";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const toolbar = () => {
    return (
        <Wrapper classes="toolbar">
            <div className="header-text">Bear Hug Recordings</div>
            <div className="links-wrapper">
                <ToolbarButton>Clients</ToolbarButton>
                <ToolbarButton>Blog</ToolbarButton>
                <ToolbarButton>About</ToolbarButton>
                <ToolbarButton>Contact</ToolbarButton>
            </div>
        </Wrapper>
    );
}

export default toolbar;
