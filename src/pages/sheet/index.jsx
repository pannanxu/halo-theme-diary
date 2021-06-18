import React, {memo, useState, useEffect} from 'react';
import {SheetWrapper} from "./style";
import TransFromMarkDown from "../../components/markdown";
import Comments from "../../components/comment";
import {getSheet} from "../../api/sheet";
import Meta from "../../components/meta";

const Index = (props) => {

    const {location, match} = props

    const [sheet, setSheet] = useState({})
    const [slug, setSlug] = useState('')

    useEffect(() => {
        setSlug(match.params.slug)
    }, [location.pathname])

    useEffect(() => {
        getSheetHandler(slug)
    }, [slug])

    const getSheetHandler = (slug) => {
        if (slug) {
            getSheet(slug).then(res => {
                setSheet(res)
            }).catch(err => {
                console.log(err)
                setSheet({})
            })
        }
    }

    return (
        <SheetWrapper>
            <Meta title={`${sheet.title}-${config.meta.title}`}/>
            <h1>{sheet.title}</h1>
            <TransFromMarkDown content={sheet.originalContent}/>
            {
                sheet.id && <Comments id={sheet.id} type='sheet'/>
            }
        </SheetWrapper>
    );
};

export default memo(Index);
