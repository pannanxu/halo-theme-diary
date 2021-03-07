import React, {memo} from 'react';

import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import {MainWrapper} from "./style";

class Layout extends React.Component {
    render() {
        return(
            <MainWrapper>
                <Header/>
                <Content>
                    {this.props.children}
                </Content>
                <Footer/>
            </MainWrapper>
        )
    }
}
export default memo(Layout);
