import React, {Component} from 'react';

import Article from '../../components/post'
import {searchPost} from "../../api/post";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            body: {
                page: 0,
                size: 10,
            },
            posts: []
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
        console.log(123222)
        console.log('search: ',this.state.keyword)
        if (this.state.keyword) {
            console.log(1312312312)
            searchPost(this.state.body, this.state.keyword).then((res) => {
                console.log(res)
                this.setState({posts: res.content})
            })
        }
    }

    inputChangeHandler = (e) => {
        const keyword = e.target.value;
        this.setState({keyword: keyword})
    }

    render() {
        return (
            <div>
                <input onChange={e => this.inputChangeHandler(e)} value={this.state.keyword} type="text" placeholder="请输入搜索内容"/>
                <button onClick={this.searchHandler}>搜索</button>

                {
                    this.state.posts.map(post => (
                        <Article key={post.id} post={post}/>
                    ))
                }
            </div>
        );
    }
}

export default Search;
