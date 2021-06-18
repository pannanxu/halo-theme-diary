import React, {memo, useState, useEffect, useCallback} from 'react';
import {withRouter, NavLink} from 'react-router-dom'

import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import {MainWrapper} from "./style";
import {PageNavFixedBox, PageNavFixedBoxOverlay} from "./style";
import {getSheets} from "../api/sheet";
import {getCategory} from "../api/categorie";

const Layout = (props) => {
    const [right, setRight] = useState(false)
    const [sheet, setSheet] = useState({});
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getSheets().then(res => {
            setSheet(res);
            console.log(res);
        })
        getCategory().then(res => {
            console.log(res)
            setCategory(res)
        })
    }, [])

    useEffect(() => {
        if (right) {
            setRightHandler()
        }
    }, [props.location?.pathname])

    const setRightHandler = useCallback(() => {
        setRight(!right)
        let bodyEl = document.getElementsByTagName('html')[0];
        bodyEl.style.overflowY = !right ? 'hidden' : 'overlay'
    }, [right])

    return (
        <>
            <PageNavFixedBoxOverlay isShow={right} onClick={setRightHandler}/>
            <PageNavFixedBox right={right ? 0 : -26}>
                <ul>
                    {
                        sheet.content?.map(res =>
                            <li key={res.id}><NavLink to={`/sheet/${res.slug}`}>{res.title}</NavLink></li>
                        )
                    }
                    {
                        category?.map(res =>
                            <li key={res.id}><NavLink to={`/home/${res.slug}/1`}>{res.name}</NavLink></li>
                        )
                    }
                </ul>
            </PageNavFixedBox>
            <MainWrapper>
                <Header handler={setRightHandler}/>
                <Content>
                    {props.children}
                </Content>
                <Footer/>
            </MainWrapper>
        </>
    );
};

export default withRouter(memo(Layout));
