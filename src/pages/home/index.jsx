import React, {memo} from 'react';

import {getPostList} from "../../api/post";
import {getCategoryChildrenPosts} from "../../api/categorie";

import {HomeWrapper} from "./style";

import Meta from "../../components/meta";
import Loading from "../../components/loading";
import PageHelper from '../../components/pagehelper';
import Article from '../../components/post';
import Category from './components/category';

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
            const method = this.debounce(this.getPostList, 800);
            method(slug);
        })
    }

    componentWillReceiveProps(newProps) {
        const slug = newProps.match.params.slug;
        this.getPostList(slug);
    }

    // componentWillUnmount() {
    //     this.setState = (state, callback) => {
    //         return;
    //     }
    // }

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
                this.setState({
                    ...this.state,
                    post: {
                        ...res,
                        hasContent: true
                    }
                })
            });
        }
    }

    debounce = (method, delay) => {
        //设置一个检验setTimeout是否在执行的参数，默认未执行
        let {timer = null} = this.state;
        //将当前的this赋值给that
        //否则在下面函数作用域中this是当前函数作用域，没有setState方法
        let that = this;
        return function (...args) {
            //检验是否有正在执行的定时器方法，如果有，就把上一个定时器废弃
            if (timer) clearTimeout(timer);
            //生成一个新的定时器方法重新计数
            timer = setTimeout(function () {
                method.apply(this, args);
            }, delay);

            that.setState({timer});
        };
    }

    render() {

        const {page = 0, category, post} = this.state;

        return (
            <HomeWrapper>
                <Meta title={config.meta.title}/>
                {category && <Category {...this.props} page={page} handler={this.getPostByCategory}/>}
                <Loading data={post}>
                    {post.content.map(post => <Article key={post.id} post={post}/>)}
                </Loading>
                {post.hasContent && <PageHelper data={post}/>}
            </HomeWrapper>
        )
    }
}

export default memo(Home);
