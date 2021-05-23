import React, {Component} from 'react';

import {searchPost} from "../../api/post";
import {SearchWrapper} from "./style";
import Loading from "../../components/loading";

const PageHelper = React.lazy(() => import('../../components/pagehelper'))
const Article = React.lazy(() => import('../../components/post'))

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            body: {
                page: 0,
                size: 10,
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
            show: false,
        }
    }

    componentDidMount() {
        const keyword = this.props.match.params.keyword;
        if (keyword) {
            this.setState({keyword: keyword}, () => {
                const method = this.debounce(this.searchHandler, 800);
                method();
            });
        }
    }

    searchHandler = () => {
        if (this.state.keyword) {
            searchPost(this.state.body, this.state.keyword).then((res) => {
                const data = {
                    ...res,
                    hasContent: true
                }
                this.setState({post: data})
            })
        }
    }

    inputChangeHandler = (e) => {
        const keyword = e.target.value;
        this.setState({keyword: keyword})
    }

    onKeyDownChange = (e) => {
        if (e.keyCode === 13) {
            this.setState({show: true});
            this.searchHandler();
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

        const {keyword, show, post,} = this.state;

        return (
            <SearchWrapper>
                <input
                    onKeyDown={(e) => this.onKeyDownChange(e)}
                    onChange={e => this.inputChangeHandler(e)}
                    value={keyword} type="text" placeholder="请输入搜索内容后回车搜索"
                />

                {show && (<Loading data={post}>
                    {post.content.map(post => <Article key={post.id} post={post}/>)}
                </Loading>)}

                {post.hasContent && <PageHelper data={post}/>}
            </SearchWrapper>
        );
    }
}

export default Search;
