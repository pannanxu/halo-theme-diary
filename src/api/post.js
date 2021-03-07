import request from "../utils/request";

/**
 * 分页查询文章列表
 * @param params
 * @returns {*}
 */
export const getPostList = params => {
    return request({
        url: '/content/posts',
        params
    })
}

/**
 * 查询文章详情
 * @param postId 文章ID
 * @returns {*}
 */
export const getPost = postId => {
    return request({
        url: `/content/posts/${postId}`
    })
}
/**
 * 搜索文章
 * @param data
 * @returns {*}
 */
export const searchPost = (data, params) => {
    return request({
        url: '/content/posts/search',
        method: 'POST',
        data,
        params: {
            'keyword': params
        }
    })
}
