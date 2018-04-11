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
                {this.props.children}
                <Footer />
            </Wrapper>
        )
    }
}

export default Layout;
