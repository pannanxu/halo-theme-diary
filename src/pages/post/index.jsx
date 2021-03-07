import React, {Component} from 'react';

import {getPost} from "../../api/post";
import {PostWrapper} from "./style";
import Meta from "../../components/meta";

const TransFromMarkDown = React.lazy(() => import('../../components/markdown'))
const Comments = React.lazy(() => import('../../components/comment'))

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            content: {originalContent: ''},
            comment: {}
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.id;
        getPost(postId).then(res => {
            this.setState({content: res})
            console.log(res)
        })
    }

    render() {

        const {content, categories} = this.state;

        return (
            <PostWrapper>
                <Meta title={content.title}/>
                <h1>title：{content.title}</h1>
                <div>
                    {
                        content.originalContent && <TransFromMarkDown content={content.originalContent}/>
                    }
                </div>
                <div>
                    {
                        categories.map(categorie => (
                            <p key={categorie.id}>{categorie.name}</p>
                        ))
                    }
                </div>
                {
                    content.id && <Comments id={content.id} type='post'/>
                }
            </PostWrapper>
        );
    }
}

export default Post;
