import React, {memo, useState, useEffect} from 'react';

import {getCategory} from "../../../../api/categorie";
import {CategoryWrapper} from "./style";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
    }

    componentDidMount() {
        getCategory().then(res => {
            this.setState({category: res})
        })
    }

    navLinkHandler = (category) => {
        this.props.history.push(`/category/${category.slug}/${this.props.page}`);
        this.props.handler();
    }

    isActive = (link) => {
        return this.props.location.pathname === link;
    }

    render() {
        return (
            <CategoryWrapper>
                <ul>
                    {
                        this.state.category.map(category => (
                            <li key={category.id}
                                className={this.isActive(`/category/${category.slug}/${this.props.page}`) ? 'active' : ''}
                            >
                                <a onClick={() => this.navLinkHandler(category)}>{category.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </CategoryWrapper>
        );
    }
}

export default memo(Category);
