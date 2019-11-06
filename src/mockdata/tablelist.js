import Mock from 'mockjs'

let List = []
const count = 1000

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        // id: Mock.Random.guid(),
        sortnum: i + 1,
        id: i + 1,
        name: Mock.Random.cname(),
        number: Mock.Random.natural(600000, 1000000),
        'branch|1': Mock.mock(["技术部", "生产部", "销售部"]),
        'phone|10000000000-19999999999': 18380271137,
        email: Mock.mock('@email'),
        'education|1': Mock.mock(["本科", "大专", "研究生", "博士", "硕士", "高中以下", ]),
    }))
}
console.log("list:", List)

export default {
    /**
     * 获取table列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getlist: config => {

        const {
            limit,
            currentpage
        } = JSON.parse(config.body);
        let mockList = List;
        const tablelist = mockList.filter((item, index) => index < limit * currentpage && index >= limit * (currentpage - 1))
        // debugger
        return {
            code: 200,
            data: {
                total: mockList.length,
                tablelist: tablelist
            }
        }
    }
}