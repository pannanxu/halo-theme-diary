import React, {memo} from 'react';
import {Link} from 'react-router-dom'
import {HeaderWrapper, MHeaderFootFixedBox} from "./style";

import Icons from "./components/icons";

const Header = (props) => {
    const {logoImgUrl} = config.home
    return (
        <HeaderWrapper>
            <div className="header-box">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logoImgUrl} alt="LOGO"/>
                    </Link>
                </div>
                <div className="header-info">
                    <div className="header-desc">
                        <h2><Link to="/">{config.meta.title}</Link></h2>
                        <p>{config.meta.description}</p>
                    </div>
                    <Icons handler={props.handler} display="none"/>
                </div>
            </div>

            <MHeaderFootFixedBox>
                <Icons handler={props.handler} className="fixed-box" display="block"/>
            </MHeaderFootFixedBox>
        </HeaderWrapper>
    );
};

export default memo(Header);
