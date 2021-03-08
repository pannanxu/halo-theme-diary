import React, { memo } from 'react';
import {NavLink, Link} from 'react-router-dom'
import {PageHelperWrapper, PageNavWrapper} from "./style";

const PageHelper = (props) => {

    const {hasNext, hasPrevious, isFirst, isLast, page, pages} = props.data;

    return (
        <PageHelperWrapper>
            <PageNavWrapper>
                <ul>
                    {
                        !isFirst && <li><Link to={`/home/${page - 1}`}>上一页</Link></li>
                    }
                    {
                        !isLast && <li><Link to={`/home/${page + 1}`}>下一页</Link></li>
                    }
                </ul>
            </PageNavWrapper>
        </PageHelperWrapper>
    );
};

export default memo(PageHelper);
