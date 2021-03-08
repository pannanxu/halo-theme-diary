import React, {memo} from 'react';
import {getPostList} from "../../api/post";
import {getCategoryChildrenPosts} from "../../api/categorie";

import {HomeWrapper} from "./style";

import Meta from "../../components/meta";
import Loading from "../../components/loading";
const PageHelper = React.lazy(() => import('../../components/pagehelper'))
const Article = React.lazy(() => import('../../components/post'))
const Category = React.lazy(() => import('./components/category'))

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            params: {
                page: 0
            },
            post: {
                content: [],
                hasContent: false,   // 是否有内容
                hasNext: false,     // 是否有下一页
                hasPrevious: false, // 是否有上一页
                isEmpty: false,     // 是否为空
                isFirst: false,      // 是否为首页
                isLast: false,       // 是否为最后一页
                page: 0,            // 当前页
                pages: 1,           // 页总数
                rpp: 10,            // 每页10条
                total: 0            // 一条数据
            },
            category: []
        }
    }

    componentDidMount() {
        const {slug, page} = this.props.match.params;
        this.setState({params: {page: page}}, () => {
            this.getPostList(slug);
            // setTimeout(() => this.getPostList(slug), 20000)

        })
    }

    componentWillReceiveProps(newProps) {
        const slug = newProps.match.params.slug;
        this.getPostList(slug);
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }

    getPostList = (slug) => {
        if (!slug) {
            getPostList(this.state.params).then(res => {
                this.setState({post: res})
            })
        } else {
            this.getPostByCategory(slug);
        }
    }

    getPostByCategory = (slug) => {
        if (slug) {
            getCategoryChildrenPosts(slug, this.state.params).then(res => {
                this.setState({post: res})
            });
        }
    }

    render() {

        const page = this.state.page || 0;

        return (
            <HomeWrapper>
                <Meta title={config.meta.title}/>
                {
                    this.state.category && <Category {...this.props} page={page} handler={this.getPostByCategory}/>
                }
                <Loading data={this.state.post}>
                    {
                        this.state.post.content.map(post => (
                            <Article key={post.id} post={post}/>
                        ))
                    }
                    {
                        this.state.post.hasContent && <PageHelper data={this.state.post} />
                    }
                </Loading>

            </HomeWrapper>
        )
    }
}

export default memo(Home);
