import request from "../utils/request";

/**
 * 获取友情链接列表-分组后
 * @returns {*}
 */
export const getLinks = () => {
    return request({url: '/content/links/team_view'})
}
