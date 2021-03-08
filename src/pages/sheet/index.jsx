import React, {Component} from 'react';
import {getSheet} from "../../api/sheet";
import {SheetWrapper} from "./style";
import {PostWrapper} from "../post/style";

const TransFromMarkDown = React.lazy(() => import('../../components/markdown'))
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
            console.log('sheet:',res);
            this.setState(res)
        })
    }

    render() {
        return (
            <SheetWrapper>
                <h1>{this.state.title}</h1>
                {
                    this.state.id && <TransFromMarkDown content={this.state.originalContent} />
                }
                {
                    this.state.id && <Comments id={this.state.id} type='sheet'/>
                }
            </SheetWrapper>
        );
    }
}

export default Sheet;
