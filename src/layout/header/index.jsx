import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {HeaderWrapper, MHeaderFootFixedBox} from "./style";

import Icons from "./components/icons";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: {
                content: []
            }
        }
    }

    componentDidMount() {

    }

    render() {

        const {logoImgUrl} = config.home

        return (
            <HeaderWrapper>
                <div className="header-box">
                    <div className="header-logo">
                        <Link to="/">
                            <img src={logoImgUrl} alt="LOGO图片"/>
                        </Link>
                    </div>
                    <div className="header-info">
                        <div className="header-desc">
                            <h2><Link to="/">{config.meta.title}</Link></h2>
                            <p>{config.meta.description}~</p>
                        </div>
                        <Icons display="none"/>
                    </div>
                </div>

                <MHeaderFootFixedBox>
                    <Icons className="fixed-box" display="block"/>
                </MHeaderFootFixedBox>
            </HeaderWrapper>
        );
    }
}

export default Header;
