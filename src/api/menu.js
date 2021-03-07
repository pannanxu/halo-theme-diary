import request from "../utils/request";

/**
 * 获取菜单列表
 * @returns {*}
 */
export const getMenus = () => {
    return request({url: '/content/menus'})
}
