import React, {Component} from 'react';
import {LinkWrapper} from "./style";

import {getLinks} from "../../api/link";
import Meta from "../../components/meta";

class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        getLinks().then(res => {
            console.log(res)
            this.setState({links: res})
        })
    }

    createGroup = (group) => {
        return (
            <div key={group.team}>
                <h3>{group.team}</h3>
                {this.createLinks(group.links)}
            </div>
        )
    }

    createLinks = (links) => {
        return (
            <ul>
                {links.map(link => (
                    <li key={link.id}><a target="_blank" href={link.url}>{link.name}</a> - {link.description}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <LinkWrapper>
                <Meta title={'友人'}/>
                {this.state.links.map(link => this.createGroup(link))}
            </LinkWrapper>
        );
    }
}

export default Links;
