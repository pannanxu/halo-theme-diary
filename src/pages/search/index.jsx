import React, {memo, useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'

import {SearchWrapper} from "./style";
import {searchPost} from "../../api/post";
import Article from "../../components/post";
import {PageHelperWrapper, PageNavWrapper} from "../../components/pagehelper/style";
import Meta from "../../components/meta";
import {PostWrapper} from "../post/style";

const Search = (props) => {

    const {match, location} = props

    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [posts, setPosts] = useState({isFirst: true, isLast: true})

    useEffect(() => {
        const {page = '1', keyword = ''} = match.params
        setCurrentPage(parseInt(page))
        setKeyword(keyword)
    }, [location.pathname])

    useEffect(() => {
        searchHandler()
    }, [keyword, currentPage])

    const searchHandler = () => {
        if (keyword) {
            searchPost({page: currentPage - 1, size: 10, keyword}).then((res) => {
                setPosts(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const onKeyDownChange = (e) => {
        if (e.keyCode === 13) {
            setKeyword(e.target.value)
        }
    }

    return (
        <SearchWrapper>
            <Meta title={keyword ? `搜索内容-${keyword}-${config.meta.title}` : config.meta.title}/>
            <input
                onKeyDown={(e) => onKeyDownChange(e)}
                onChange={e => setKeyword(e.target.value)}
                value={keyword} type="text" placeholder="请输入搜索内容后回车搜索"
            />

            {
                posts.content?.map((post, index) => <Article key={post.id} post={post}/>)
            }

            <PageHelperWrapper>
                <PageNavWrapper>
                    <ul>
                        {
                            !posts.isFirst && <li><NavLink to={`/search/${keyword}/${(currentPage - 1)}`}>上一页</NavLink></li>
                        }
                        {
                            !posts.isLast && <li><NavLink to={`/search/${keyword}/${(currentPage + 1)}`}>下一页</NavLink></li>
                        }
                    </ul>
                </PageNavWrapper>
            </PageHelperWrapper>
        </SearchWrapper>
    );
};

export default memo(Search);
