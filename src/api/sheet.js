import request from "../utils/request";

/**
 * 获取所有页面
 * @param _
 * @returns {*}
 */
export const getSheets = _ => {
    return request({
        url: '/content/sheets'
    })
}

/**
 * 获取页面
 * @returns {*}
 */
export const getSheet = slug => {
    return request({url: `/content/sheets/slug`, params: {slug}})
}
