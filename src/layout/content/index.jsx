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
                <React.Suspense fallback={<Loading/>}>
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
                <svg t="1615385682973" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2251" width="16" height="16">
                    <path
                        d="M512 20.053333a32 32 0 0 0-32 32v236.8a32 32 0 1 0 64 0V52.053333A32 32 0 0 0 512 20.053333zM310.186667 97.706667A32 32 0 0 0 256 128l118.186667 204.8A32 32 0 0 0 426.666667 302.506667zM98.133333 309.76l180.053334 103.68a32 32 0 1 0 32-55.466667L128 256a32 32 0 1 0-32 55.466667zM264.106667 512a32 32 0 0 0-32-32H52.053333a32 32 0 0 0 0 64h180.053334a32 32 0 0 0 32-32zM272.64 649.813333a32 32 0 0 0-42.666667-11.52l-132.266666 75.946667A32 32 0 1 0 128 768l130.986667-75.946667a32 32 0 0 0 13.653333-42.24zM360.106667 775.68a32 32 0 0 0-42.666667 11.52L256 896a32 32 0 1 0 55.466667 32l60.16-108.8a32 32 0 0 0-11.52-43.52zM512 845.226667a32 32 0 0 0-32 32v95.146666a32 32 0 0 0 64 0v-95.146666a32 32 0 0 0-32-32zM734.293333 832.853333a32 32 0 0 0-55.466666 32l35.413333 61.013334A32 32 0 0 0 768 896zM971.946667 480h-236.373334a32 32 0 0 0 0 64h236.373334a32 32 0 0 0 0-64zM705.28 432.213333a32 32 0 0 0 15.786667-4.266666l204.8-118.186667A32 32 0 0 0 896 256l-204.8 118.186667a32 32 0 0 0 16.213333 59.733333zM758.186667 85.333333a32 32 0 0 0-42.666667 11.946667L597.333333 302.933333a32 32 0 1 0 55.466667 32L768 128a32 32 0 0 0-9.813333-42.666667z"
                        fill="#bfbfbf" p-id="2252"></path>
                </svg>
            </LoadingWrapper>
        )
    }
}

export default Content;
