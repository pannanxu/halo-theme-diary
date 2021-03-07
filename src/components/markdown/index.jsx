import React, {memo} from 'react';
import marked from 'marked';

import {MarkdownWrapper} from "./style";

class TransFromMarkDown extends React.Component {

    render() {
        console.log('MarkdownWrapper',this.props.content)
        return (
            <MarkdownWrapper className="markdown-container" dangerouslySetInnerHTML={{__html: marked(this.props.content)}}>
            </MarkdownWrapper>
        )
    }
}
export default memo(TransFromMarkDown);
