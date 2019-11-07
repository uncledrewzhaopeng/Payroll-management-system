import Mock from 'mockjs'

let List = []
const count = 500

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        name: Mock.Random.cname(),
        number: Mock.Random.natural(600000, 1000000),
        'phone|10000000000-19999999999': 18380271137,
        "state|1": true
    }))
}
console.log("dataList:", List)

export default {
    /**
     * 获取管理员列表
     * 要带参数 name, page, limit; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getAdmin: config => {
        const {
            limit,
            currentpage
        } = JSON.parse(config.body);
        let mockList = List;
        const admin = mockList.filter((item, index) => index < limit * currentpage && index >= limit * (currentpage - 1))
        return {
            code: 200,
            data: {
                total: mockList.length,
                admin: admin,
            }
        }
    }
}