import React, {memo} from 'react';

import {HomeWrapper} from "./style";

import {getPostList} from "../../api/post";
import {getCategoryChildrenPosts} from "../../api/categorie";

import Meta from "../../components/meta";
import Category from "./components/category";
import Article from "../../components/post"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            params: {},
            post: {
                content: [],
                hasContent: true,
                hasNext: false,
                hasPrevious: false,
                isEmpty: false,
                isFirst: true,
                isLast: true,
                page: 0,
                pages: 1,
                rpp: 10,
                total: 1
            },
            category: []
        }
    }

    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.getPostList(slug);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        const slug = newProps.match.params.slug;
        this.getPostList(slug);
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }

    getPostList = (slug) => {
        console.log('home: ',slug)
        if (!slug) {
            getPostList({}).then(res => {
                this.setState({post: res})
            })
        } else {
            this.getPostByCategory(slug);
        }
    }

    getPostByCategory = (slug) => {
        if (slug) {
            getCategoryChildrenPosts(slug).then(res => {
                this.setState({post: res})
            });
        }
    }

    render() {

        const page = this.state.page || 0;

        return (
            <HomeWrapper>
                <Meta title={config.meta.title}/>

                <Category {...this.props} page={page} handler={this.getPostByCategory}/>

                {
                    this.state.post.content.map(post => (
                        <Article key={post.id} post={post}/>
                    ))
                }
            </HomeWrapper>
        )
    }
}

export default memo(Home);
