import React, {useEffect} from 'react';

const Meta = (props) => {

    useEffect(() => {
        setTitle();
    }, [props.title])

    const setTitle = _ => {
        document.title = props.title || '加载中...';
    }

    return (
        <>
        </>
    );
};

export default Meta;
