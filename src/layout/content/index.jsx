import React, {Component} from 'react';
import {LoadingWrapper, SectionMainWrapper} from "./style";

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
                <React.Suspense fallback={<Loading />}>
                    {this.state.content}
                </React.Suspense>
            </SectionMainWrapper>
        );
    }
}

class Loading extends Component {

    render() {
        return (
            <LoadingWrapper>
                加载中
            </LoadingWrapper>
        )
    }
}

export default Content;
