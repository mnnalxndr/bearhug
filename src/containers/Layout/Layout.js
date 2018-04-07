import React, {Component} from "react";

import Wrapper from "../../hoc/Wrapper/Wrapper";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
    state = {
        pageDisplayed: "HOME"
    }

    render () {
        return (
            <Wrapper>
                <Toolbar />
                <div>{this.props.children}</div>
                <Footer />
            </Wrapper>
        )
    }
}

export default Layout;
