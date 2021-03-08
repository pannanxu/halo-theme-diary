import React, { memo } from 'react';
import {MessageWrapper, MainWrapper, ContentWrapper} from "./style";

const Message = () => {
    return (
        <MessageWrapper id="message">
            <MainWrapper>
                <ContentWrapper>
                    123
                </ContentWrapper>
            </MainWrapper>
        </MessageWrapper>
    );
};

export default memo(Message);
