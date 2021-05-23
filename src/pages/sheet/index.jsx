import React, {Component} from 'react';
import {getSheet} from "../../api/sheet";
import {SheetWrapper} from "./style";

import TransFromMarkDown from "../../components/markdown";
import {PostWrapper} from "../post/style";

const Comments = React.lazy(() => import('../../components/comment'))

class Sheet extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const sheetId = this.props.match.params.slug;
        this.getSheet(sheetId);
    }

    // 解决同路由传参不同导致无法修改状态，子组件需要手动传递下props
    componentWillReceiveProps(newProps) {
        const sheetId = newProps.match.params.slug;
        this.getSheet(sheetId);
    }

    getSheet = (sheetId) => {
        getSheet(sheetId).then(res => {
            console.log('sheet:', res);
            this.setState(res)
        })
    }

    render() {

        const {title, id, originalContent} = this.state;

        return (
            <SheetWrapper>
                <h1>{title}</h1>
                {id && <TransFromMarkDown content={originalContent}/>}
                <React.Suspense fallback={<div>hello</div>}>
                    {
                        id && <Comments id={id} type='sheet'/>
                    }
                </React.Suspense>
            </SheetWrapper>
        );
    }
}

export default Sheet;
