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
                this.searchHandler();
            });
        }
    }

    searchHandler = () => {
        if (this.state.keyword) {
            searchPost(this.state.body, this.state.keyword).then((res) => {
                console.log(res)
                const data = {
                    ...res,
                    hasContent: true
                }
                console.log(data)
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

    render() {
        return (
            <SearchWrapper>
                <input onKeyDown={(e) => this.onKeyDownChange(e)} onChange={e => this.inputChangeHandler(e)}
                       value={this.state.keyword} type="text" placeholder="请输入搜索内容后回车搜索"/>
                {
                    this.state.show && (
                        <Loading data={this.state.post}>
                            {
                                this.state.post.content.map(post => (
                                    <Article key={post.id} post={post}/>
                                ))
                            }
                            {
                                this.state.post.hasContent && <PageHelper data={this.state.post}/>
                            }
                        </Loading>
                    )
                }
            </SearchWrapper>
        );
    }
}

export default Search;
