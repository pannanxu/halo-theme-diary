import React, {Component} from 'react';
import {SectionMainWrapper} from "./style";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.setState({content: this.props.children})
    }

    render() {
        return (
            <SectionMainWrapper>
                <React.Suspense fallback={<div>加载中...</div>}>
                    {this.state.content}
                </React.Suspense>
            </SectionMainWrapper>
        );
    }
}

export default Content;
