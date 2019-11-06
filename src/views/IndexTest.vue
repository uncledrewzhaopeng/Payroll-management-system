<template>
  <div class="index">
    <!--面包屑-->
    <div class="crumbs">
      <!--面包屑的分隔符为"/"-->
      <el-breadcrumb separator="/">
        <!-- 前面面包屑字体比后面的字体大 -->
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="head-item head-title">{{title}}</div>
    <div class="container">
      <span class="head-liltle-title">上月考勤情况</span>
      <div class="container-attendance">
        <div class="cd">
          <span>迟到人次</span>
          <p>18次</p>
          <p @click="open_pop()">查看迟到的小伙伴</p>
        </div>
        <div class="zt">
          <span>早退人次</span>
          <p>3次</p>
          <p @click="open_pop2()">查看早退的小伙伴</p>
        </div>
        <div class="kg">
          <span>旷工人次</span>
          <p>2次</p>
          <p @click="open_pop3()">查看旷工的小伙伴</p>
        </div>
        <div class="rz">
          <span>未写日志人次</span>
          <p>8次</p>
          <p @click="open_pop4()">查看未写日志的小伙伴</p>
        </div>
        <div class="dk">
          <span>打卡人次</span>
          <p>6次</p>
          <p @click="open_pop5()">查看未打卡的小伙伴</p>
        </div>
      </div>
      <span class="head-liltle-title2">本年度迟到情况</span>
      <div class="container-chart">
        <div class="schart-box">
          <v-chart class="schart" :options="line" autoresize />
        </div>
      </div>

      <!-- 迟到人次弹窗 -->
      <div class="container-pop-up" v-show="isCd">
        <img src="../assets/img/u126.png" alt />
        <div class="container-pop-up-it" v-for="(item,index) in list" :key="index">
          <img src="../assets/img/u128.png" alt />
          <span class="text_1">技术部-扫地僧</span>
          <span class="text_2">5</span>
          <span class="text_3">次</span>
        </div>
      </div>

      <!-- 早退人次弹窗 -->
      <div class="container-pop-up2" v-show="isZt">
        <img src="../assets/img/u126.png" alt />
        <!-- <div class="container-pop-up-it2" v-for="(item,index) in list" :key="index">
          <img src="../assets/img/u128.png" alt />
          <span class="text_1">技术部-扫地僧</span>
          <span class="text_2">5</span>
          <span class="text_3">次</span>
        </div> -->
      </div>

      <!-- 旷工人次弹窗 -->
      <div class="container-pop-up3" v-show="isKg">
        <img src="../assets/img/u126.png" alt />
        <!-- <div class="container-pop-up-it3" v-for="(item,index) in list" :key="index">
          <img src="../assets/img/u128.png" alt />
          <span class="text_1">技术部-扫地僧</span>
          <span class="text_2">5</span>
          <span class="text_3">次</span>
        </div> -->
      </div>

      <!-- 日志人次弹窗 -->
      <div class="container-pop-up4" v-show="isRz">
        <img src="../assets/img/u126.png" alt />
        <!-- <div class="container-pop-up-it4" v-for="(item,index) in list" :key="index">
          <img src="../assets/img/u128.png" alt />
          <span class="text_1">技术部-扫地僧</span>
          <span class="text_2">5</span>
          <span class="text_3">次</span>
        </div> -->
      </div>

      <!-- 打卡人次弹窗 -->
      <div class="container-pop-up5" v-show="isDk">
        <img src="../assets/img/u126.png" alt />
        <!-- <div class="container-pop-up-it5" v-for="(item,index) in list" :key="index">
          <img src="../assets/img/u128.png" alt />
          <span class="text_1">技术部-扫地僧</span>
          <span class="text_2">5</span>
          <span class="text_3">次</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import ECharts from "vue-echarts";
import "echarts/lib/chart/line"; // 折线图
import "echarts/lib/component/legend"; // 图例
import "echarts/lib/component/title.js"; // 标题
import "echarts/lib/component/tooltip"; // 工具栏（鼠标放上去的效果）
import getlineData from "../components/LateChart";
export default {
  name: "index",
  data() {
    return {
      title: "考勤数据统计",
      line: getlineData(),
      isCd: false,
      isZt: false,
      isKg: false,
      isRz: false,
      isDk: false,
      list: [0, 1, 2, 3, 4, 5, 6, 7]
    };
  },
  components: {
    "v-chart": ECharts
  },
  methods: {
    open_pop() {
      this.isCd = !this.isCd;
    },
    open_pop2() {
      this.isZt = !this.isZt;
    },
    open_pop3() {
      this.isKg = !this.isKg;
    },
    open_pop4() {
      this.isRz = !this.isRz;
    },
    open_pop5() {
      this.isDk = !this.isDk;
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  text-align-last: left;
}

.head {
  margin: 30px 0 20px;
}

.head-item {
  display: inline-block;
  margin: 10px 12px;
  span {
    margin-right: 15px;
  }
}

.head-title {
  font-weight: bold;
  font-size: 22px;
}

.head-liltle-title {
  // display: block;
  font-size: 14px;
  font-weight: bold;
}

.container-attendance {
  display: flex;
  width: 100%;
  .cd {
    width: 250px;
    height: 110px;
    background-color: rgba(134, 147, 243, 1);
    box-shadow: 2px 2px 10px rgba(134, 147, 243, 1);
    border-radius: 5px;
    margin: 15px;
  }
  .cd > span {
    display: block;
    font-size: 13px;
    color: #fff;
    padding: 20px 15px;
  }
  .cd > p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
  }
  .cd > p:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    position: relative;
    left: 90px;
    top: -22px;
  }
  .zt {
    width: 250px;
    height: 110px;
    background-color: rgba(255, 153, 153, 1);
    box-shadow: 2px 2px 10px rgba(255, 153, 153, 0.768627450980392);
    border-radius: 5px;
    margin: 15px;
  }
  .zt > span {
    display: block;
    font-size: 13px;
    color: #fff;
    padding: 20px 15px;
  }
  .zt > p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
  }
  .zt > p:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    position: relative;
    left: 90px;
    top: -22px;
  }
  .kg {
    width: 250px;
    height: 110px;
    background-color: rgba(120, 171, 217, 1);
    box-shadow: 2px 2px 10px rgba(120, 171, 217, 1);
    border-radius: 5px;
    margin: 15px;
  }
  .kg > span {
    display: block;
    font-size: 13px;
    color: #fff;
    padding: 20px 15px;
  }
  .kg > p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
  }
  .kg > p:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    position: relative;
    left: 90px;
    top: -22px;
  }
  .rz {
    width: 250px;
    height: 110px;
    background-color: rgba(164, 123, 208, 1);
    box-shadow: 2px 2px 10px rgba(164, 123, 208, 1);
    border-radius: 5px;
    margin: 15px;
  }
  .rz > span {
    display: block;
    font-size: 13px;
    color: #fff;
    padding: 20px 15px;
  }
  .rz > p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
  }
  .rz > p:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    position: relative;
    left: 85px;
    top: -22px;
  }
  .dk {
    width: 250px;
    height: 110px;
    background-color: rgba(0, 204, 153, 1);
    box-shadow: 2px 2px 10px rgba(0, 204, 153, 1);
    border-radius: 5px;
    margin: 15px;
  }
  .dk > span {
    display: block;
    font-size: 13px;
    color: #fff;
    padding: 20px 15px;
  }
  .dk > p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
  }
  .dk > p:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    position: relative;
    left: 90px;
    top: -22px;
  }
}

.head-liltle-title2 {
  display: block;
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
}

.schart {
  margin: 0 auto;
  width: 100%;
}

.container-pop-up {
  position: absolute;
  img {
    transform: rotate(90deg);
    position: relative;
    bottom: 538px;
    left: 170px;
  }
  .container-pop-up-it {
    img {
      position: relative;
      width: 30px;
      height: 30px;
      bottom: 790px;
      left: 230px;
    }
    .text_1 {
      font-size: 14px;
      position: relative;
      bottom: 800px;
      left: 240px;
    }
    .text_2 {
      font-size: 14px;
      color: #2561ef;
      font-weight: bold;
      padding-left: 20px;
      position: relative;
      bottom: 800px;
      left: 240px;
    }
    .text_3 {
      font-size: 14px;
      position: relative;
      bottom: 800px;
      left: 240px;
    }
  }
}

.container-pop-up2 {
  position: absolute;
  img {
    transform: rotate(90deg);
    position: relative;
    bottom: 538px;
    left: 400px;
  }
}

.container-pop-up3 {
  position: absolute;
  img {
    transform: rotate(90deg);
    position: relative;
    bottom: 538px;
    left: 640px;
  }
}

.container-pop-up4 {
  position: absolute;
  img {
    transform: rotate(90deg);
    position: relative;
    bottom: 538px;
    left: 900px;
  }
}

.container-pop-up5 {
  position: absolute;
  img {
    transform: rotate(90deg);
    position: relative;
    bottom: 538px;
    left: 1120px;
  }
}
</style>
