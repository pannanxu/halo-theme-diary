import React, {memo, useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import {HomeWrapper} from "./style"
import Meta from "../../components/meta"
import Article from "../../components/post"
import {getPostList} from "../../api/post"
import {PageHelperWrapper, PageNavWrapper} from "../../components/pagehelper/style";
import {getCategoryChildrenPosts} from "../../api/categorie";

const Home = (props) => {

    const {location, match} = props

    const [posts, setPosts] = useState({content: [], isFirst: true, isLast: true})
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (category) {
            // 按照分类
            getCategoryChildrenPosts(category, {page: currentPage - 1, size: 10}).then(res => {
                setPosts(res)
            })
        } else {
            getPostList({page: currentPage - 1, size: 10}).then(res => {
                setPosts(res)
            })
        }
    }, [currentPage, category])

    useEffect(() => {
        let {page, slug} = match.params;
        if (page) {
            setCurrentPage(parseInt(page))
        }
        setCategory(slug)
    }, [location.pathname])

    return (
        <HomeWrapper>
            <Meta title={config.meta.title}/>

            {
                posts.content?.map(post => <Article key={post.id} post={post}/>)
            }

            <PageHelperWrapper>
                <PageNavWrapper>
                    <ul>
                        {
                            !posts.isFirst && <li>
                                <NavLink to={
                                    category ? `/home/${category}/${currentPage - 1}` : `/home/${(currentPage - 1)}`
                                }>上一页</NavLink>
                            </li>
                        }
                        {
                            !posts.isLast && <li>
                                <NavLink to={
                                    category ? `/home/${category}/${currentPage + 1}` : `/home/${(currentPage + 1)}`
                                }>下一页</NavLink>
                            </li>
                        }
                    </ul>
                </PageNavWrapper>
            </PageHelperWrapper>

        </HomeWrapper>
    );
};

export default memo(Home);
