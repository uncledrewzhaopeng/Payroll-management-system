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
