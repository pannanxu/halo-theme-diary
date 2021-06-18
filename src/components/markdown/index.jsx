import React, {memo} from 'react';
import marked from 'marked';

import {MarkdownWrapper} from "./style";

class TransFromMarkDown extends React.Component {

    render() {
        return (
            <>
                {this.props.content &&
                <MarkdownWrapper className="markdown-container" dangerouslySetInnerHTML={{__html: marked(this.props.content)}}>
                </MarkdownWrapper>
                }
            </>
        )
    }
}
export default memo(TransFromMarkDown);
