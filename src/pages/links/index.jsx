import React, {memo, useState, useEffect} from 'react';
import {LinkWrapper} from "./style";
import Meta from "../../components/meta";
import {getLinks} from "../../api/link";

const Index = () => {

    const [links, setLinks] = useState([])

    useEffect(() => {
        getLinks().then(res => {
            setLinks(res)
        })
    }, [])

    const createGroup = (links) => {
        return (
            <div key={links.team}>
                <h3>{links.team}</h3>
                {createLinks(links.links)}
            </div>
        )
    }

    const createLinks = (links) => {
        return (
            <ul>
                {
                    links.map(
                        link => (
                            <li key={link.id}>
                                <a target="_blank" href={link.url}>{link.name}</a> - {link.description}
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

    return (
        <LinkWrapper>
            <Meta title={'友人'}/>
            {links.map(link => createGroup(link))}
        </LinkWrapper>
    );
};

export default memo(Index);
