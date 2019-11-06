import request from "axios"


//获取用户表格数据
export function getlist(reqData) {
    // debugger
    return request({
        url:'/user/list/get',
        method: 'get',
        data: reqData
    })
}


/**
 * 获取管理员列表
 * 
 * 
 * @param {*} reqData 
 * 
 * 
 */
export function getAdmin(reqData) {
    // debugger
    return request({
        url:'/user/dataList/getAdminlist',
        method: 'get',
        data: reqData
    })
}
