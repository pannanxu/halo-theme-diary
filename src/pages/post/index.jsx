import React, {memo, useState, useEffect} from 'react'
import {PostWrapper} from "./style";
import Meta from "../../components/meta";
import TransFromMarkDown from "../../components/markdown";
import {getPost} from "../../api/post";
import Comments from "../../components/comment";

const Index = (props) => {
    const {match} = props

    const [content, setContent] = useState({categories: []})

    useEffect(() => {
        getPost(match.params.id).then(res => {
            setContent(res)
        }).catch(err => {
            console.log(err)
        })
    }, [match.params.id])

    return (
        <PostWrapper>
            <Meta title={content.title}/>
            <h1>{content.title}</h1>

            <TransFromMarkDown content={content.originalContent}/>

            <div>
                {
                    content.categories.map(e => (
                        <span key={e.id}>{e.name}</span>
                    ))
                }
            </div>

            {
                content.id && <Comments id={content.id} type='post'/>
            }
        </PostWrapper>
    );
};

export default memo(Index);
