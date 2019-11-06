import Mock from 'mockjs'

let List = []
const count = 100;
const LIMIT = 20;
const OFFSET = 0;

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        // id: Mock.Random.guid(),
        sortnum: i + 1,
        id: i + 1,
        name: Mock.Random.cname(),
        'branch|1': Mock.mock(["技术部", "生产部", "销售部"]),
        'late_count|1-10': 10,
        'quit_count|1-10': 10,
        'nocard_count|1-10': 10,
        'longwork_day|1-10': 10,
        'nolog_count|1-10': 10
    }))
}

export default {
    /**
     * 获取table列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getlist: config => {

        // const {
        //     limit,
        //     offset
        // } = JSON.parse(config.body);

        let mockList = List;
        const attendanceList = mockList.filter((item, index) => index < 20)
        // debugger
        return {
            code: 200,
            content: {
                total: mockList.length,
                attendanceList
            }
        }
    }
}