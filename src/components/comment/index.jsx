import React, {Component} from 'react';
import TransFromMarkDown from "../markdown";

import {
    getPostComments, sendPostComment,
    getSheetComments, sendSheetComment
} from "../../api/comment";
import {CommentWrapper} from "./style";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: {content: []},
            comment: {},
            commentParentId: '',
            checked: false
        }
    }

    componentDidMount() {
        if (this.props.type === 'post') {
            this.getPostComment();
        } else {
            this.getSheetComment();
        }
    }

    getPostComment = () => {
        const id = this.props.id;
        getPostComments(id).then(res => {
            this.setState({comments: res})
            console.log('Comments', res)
        })
    }

    getSheetComment = () => {
        const id = this.props.id;
        getSheetComments(id).then(res => {
            this.setState({comments: res})
        })
    }

    sendPostComment = (data) => {
        sendPostComment(data).then(res => {
            console.log(res);
        })
    }

    sendSheetComment = (data) => {
        sendSheetComment(data).then(res => {
            console.log(res);
        })
    }

    inputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            comment: {
                ...this.state.comment,
                [name]: value
            }
        })
    }

    checkBoxChange = e => {
        const name = e.target.name;
        const check = e.target.checked;
        this.setState({
            comment: {
                ...this.state.comment,
                [name]: check
            }
        })
    }

    submit = e => {

        const comment = this.state.comment;

        if (!comment.author) {
            return false;
        }
        if (!comment.content) {
            return false;
        }
        if (!comment.email) {
            return false;
        }

        const data = {
            ...comment,
            parentId: this.state.parentId,
            postId: this.props.id
        }

        if (this.props.type === 'post') {
            this.sendPostComment(data);
        } else {
            this.sendSheetComment(data);
        }
    }

    render() {

        const {content = []} = this.state.comments;

        return (
            <div>

                <CommentWrapper>
                    <label htmlFor="author">
                        <span>昵称</span>
                        <input onChange={this.inputChange} id="author" name="author" type="text"/>
                    </label>
                    <label htmlFor="authorUrl">
                        <span>主页</span>
                        <input onChange={this.inputChange} id="authorUrl" name="authorUrl" type="text"/>
                    </label>
                    <label htmlFor="email">
                        <span>邮箱</span>
                        <input onChange={this.inputChange} id="email" name="email" type="text"/>
                    </label>

                    <span>评论内容</span>
                    <textarea name="content" onChange={this.inputChange} id="content"/>
                    <div className="comment-btns">
                        <label htmlFor="allowNotification" id="allowNotification-label">
                            {this.state.comment.allowNotification}
                            <span className={this.state.comment.allowNotification && 'span-active'}>邮件通知我</span>
                            <input onChange={this.checkBoxChange} id="allowNotification" name="allowNotification"
                                   type="checkbox"/>
                        </label>
                        <button checked={this.state.checked} onClick={this.submit}>提交</button>
                    </div>

                </CommentWrapper>

                {
                    content.map(comment => (
                        <div key={comment.id}>
                            <p><a target="_blank" href={comment.authorUrl}>作者：{comment.author}</a></p>
                            <div>内容：<TransFromMarkDown content={comment.content}/></div>
                            <p>{comment.isAdmin && '管理员'}</p>
                            <p><button>回复</button></p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Comments;
