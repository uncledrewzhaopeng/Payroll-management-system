import Mock from 'mockjs'

import userAPI from './tablelist'
import attendance from './attendancelist'

// 引入admin.js
import adminAPI from './admin'


// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})

Mock.mock(/\/user\/list\/get/, 'get', userAPI.getlist)
// 出勤统计列表
Mock.mock(/\/attendance\/list/, 'get', attendance.getlist)

// 获取管理员列表
Mock.mock(/\/user\/dataList\/getAdminlist/, 'get', adminAPI.getAdmin)

export default Mock;
