// http://localhost:8090/api/content/categories
import request from "../utils/request";

/**
 * 查询所有分类列表
 * @param _
 * @returns {*}
 */
export const getCategory = _ => {
    return request({
        url: '/content/categories'
    })
}

/**
 * 查询某个分类下的文章
 * @param slug
 * @returns {*}
 */
export const getCategoryChildrenPosts = (slug) => {
    return request({url: `content/categories/${slug}/posts`})
}
