import React, {Component} from 'react';
import {FooterMainWrapper} from "./style";

class Footer extends Component {
    render() {
        return (
            <FooterMainWrapper>
                Copyright © 2021 <a href={config.theme.repo}>{config.theme.name}.</a> Powered by <a
                href="http://mvvm.io">HaoHan</a>
            </FooterMainWrapper>
        );
    }
}

export default Footer;
