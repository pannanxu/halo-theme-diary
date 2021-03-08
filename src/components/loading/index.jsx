import React, {Component} from 'react';
import {LoadingWrapper} from './style';
import NoPage from "../../pages/no-page";

class Loading extends Component {

    render() {
        const {content = [], hasContent} = this.props.data;
        return (
            <LoadingWrapper>
                {
                    !hasContent ? (
                        <div className="loading-main">
                            <div className="loading">
                                <div className="title animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="icons animation-box">
                                    <div className="loading-animation"/>
                                </div>
                            </div>
                            <div className="loading">
                                <div className="title animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="icons animation-box">
                                    <div className="loading-animation"/>
                                </div>
                            </div>
                            <div className="loading">
                                <div className="title animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="desc animation-box">
                                    <div className="loading-animation"/>
                                </div>
                                <div className="icons animation-box">
                                    <div className="loading-animation"/>
                                </div>
                            </div>
                        </div>
                    ) : content.length === 0 ? <NoPage /> : this.props.children
                }
            </LoadingWrapper>
        );
    }
}

export default Loading;
