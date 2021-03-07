import request from "../utils/request";

/**
 * 查询文章下的评论列表
 * @param postId
 * @returns {*}
 */
export const getPostComments = (postId) => {
    return request({
        url: `/content/posts/${postId}/comments/list_view`
    })
}

/**
 * 发表文章评论
 * @param data
 * @returns {*}
 */
export const sendPostComment = (data) => {
    return request({
        url: '/content/posts/comments',
        method: 'POST',
        data
    })
}

/**
 * 查询页面下的评论列表
 * @param sheetId
 * @returns {*}
 */
export const getSheetComments = (sheetId) => {
    return request({
        url: `/content/sheets/${sheetId}/comments/list_view`
    })
}

/**
 * 发表页面评论
 * @param data
 * @returns {*}
 */
export const sendSheetComment = (data) => {
    return request({
        url: '/content/sheets/comments',
        method: 'POST',
        data
    })
}
