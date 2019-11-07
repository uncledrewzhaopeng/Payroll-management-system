import Mock from 'mockjs'

let List = []
const count = 500

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        'department|1': Mock.mock(["技术部", "生产部", "销售部"]),
        name: Mock.Random.cname(),
        "attendance|1-31": 31,
        "leave|0-10": 10,
        "actual|1-31": 31,
        "base|7000-30000": 30000,
        "station|2000-5000": 5000,
        "shouldsend|7000-35000": 35000,
        "performance|800-2000": 2000,
        "violation|100-500": 500,
        "social|1000": 1000,
        "duty|200": 200,
        "overtime|0-8": 8,
        "overtimepay|0-1000": 1000,
        "other|0": 0,
        "real|15000-50000": 50000,
    }))
}
console.log("SalaryList:", List)

export default {
    /**
     * 获取工资报表列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getSalary: config => {

        const {
            limit,
            currentpage
        } = JSON.parse(config.body);
        let mockList = List;
        const salary = mockList.filter((item, index) => index < limit * currentpage && index >= limit * (currentpage - 1))
        // debugger
        return {
            code: 200,
            data: {
                total: mockList.length,
                salary: salary
            }
        }
    }
}