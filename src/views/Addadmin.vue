<template>
  <div class="Addadmin">
      <!--面包屑-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/setting' }">系统设置</el-breadcrumb-item>
                <el-breadcrumb-item>新增管理员</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    <div class="u2797">
      <div class="u2797_text">
        <span>新增管理员</span>
      </div>
    </div>
    <div class="u2798">
      <div class="u2798_div">
        <div class="u2802">
          <div class="u2802_text">
            <span>账号信息</span>
          </div>
        </div>
        <div class="u2803">
          <div class="u2803_img">
            <img src="../assets/img/u929.png" alt />
          </div>
        </div>
        <!-- 权限设置 -->
        <div class="u2817">
          <div class="u2817_text">
            <span>权限设置</span>
          </div>
        </div>
        <div class="u2818">
          <div class="u2818_img">
            <img src="../assets/img/u2824.png" alt />
          </div>
        </div>
        <div class="u2805">
          <div class="u2805_text">
            <span>姓名</span>
            <span>*</span>
          </div>
        </div>
        <div class="u2807">
          <input type="text" />
        </div>
        <div class="u2808">
          <div class="u2808_text">
            <span>工号</span>
            <span>*</span>
          </div>
        </div>
        <div class="u2809">
          <input type="text" />
        </div>
        <div class="u2810">
          <div class="u2810_text">
            <span>密码</span>
            <span>*</span>
          </div>
        </div>
        <div class="u2811">
          <input type="text" />
        </div>
        <div class="u2812">
          <div class="u2812_text">
            <span>手机</span>
          </div>
        </div>
        <div class="u2813">
          <input type="text" />
        </div>
        <div class="u2814">
          <div class="u2814_text">
            <span>状态</span>
          </div>
        </div>
        <div class="u2815">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </div>

      <div class="u2816">
        <div class="u2816_img">
          <img src="../assets/img/u1008.png" alt />
        </div>
      </div>
     <!-- 所有权限 -->  
      <div class="u2819">
        <input type="checkbox" />
      </div>
      <div class="u2820">
        <div class="u2820_text">
          <span>所有权限</span>
        </div>
      </div>
      <div class="u2821">
        <div class="u2821_text">
          <span>首页</span>
        </div>
      </div>
      <div class="u2822">
        <input type="checkbox" />
      </div>
      <div class="u2823">
        <div class="u2823_text">
          <span>数据统计</span>
        </div>
      </div>
     <!-- 员工管理 -->  
      <div class="u2824">
        <div class="u2824_text">
          <span>员工管理</span>
        </div>
      </div>
      <div class="u2825">
        <input type="checkbox" />
      </div>
      <div class="u2826">
        <div class="u2826_text">
          <span>查看</span>
        </div>
      </div>
      <div class="u2827">
        <input type="checkbox" />
      </div>
      <div class="u2828">
        <div class="u2828_text">
          <span>新增</span>
        </div>
      </div>
      <div class="u2829">
        <input type="checkbox" />
      </div>
      <div class="u2830">
        <div class="u2830_text">
          <span>编辑</span>
        </div>
      </div>
      <div class="u2831">
        <input type="checkbox" />
      </div>
      <div class="u2832">
        <div class="u2832_text">
          <span>删除</span>
        </div>
      </div>
      <div class="u2833">
        <input type="checkbox" />
      </div>
      <div class="u2834">
        <div class="u2834_text">
          <span>批量删除</span>
        </div>
      </div>
      <div class="u2835">
        <input type="checkbox" />
      </div>
      <div class="u2836">
        <div class="u2836_text">
          <span>导出</span>
        </div>
      </div>
      <div class="u2837">
        <input type="checkbox" />
      </div>
      <div class="u2838">
        <div class="u2838_text">
          <span>搜索</span>
        </div>
      </div>
     <!-- 出勤统计 -->  
      <div class="u2839">
        <div class="u2839_text">
          <span>出勤统计</span>
        </div>
      </div>
      <div class="u2840">
        <input type="checkbox" />
      </div>
      <div class="u2841">
        <div class="u2841_text">
          <span>查看</span>
        </div>
      </div>
      <div class="u2842">
        <input type="checkbox" />
      </div>
      <div class="u2843">
        <div class="u2843_text">
          <span>编辑</span>
        </div>
      </div>
      <div class="u2844">
        <input type="checkbox" />
      </div>
      <div class="u2845">
        <div class="u2845_text">
          <span>导出</span>
        </div>
      </div>
      <div class="u2846">
        <input type="checkbox" />
      </div>
      <div class="u2847">
        <div class="u2847_text">
          <span>搜索</span>
        </div>
      </div>
     <!-- 工资报表 -->   
      <div class="u2848">
        <div class="u2848_text">
          <span>工资报表</span>
        </div>
      </div>
      <div class="u2849">
        <input type="checkbox" />
      </div>
      <div class="u2850">
        <div class="u2850_text">
          <span>查看</span>
        </div>
      </div>
      <div class="u2851">
        <input type="checkbox" />
      </div>
      <div class="u2852">
        <div class="u2852_text">
          <span>编辑</span>
        </div>
      </div>
      <div class="u2853">
        <input type="checkbox" />
      </div>
      <div class="u2854">
        <div class="u2854_text">
          <span>导出</span>
        </div>
      </div>
      <div class="u2855">
        <input type="checkbox" />
      </div>
      <div class="u2856">
        <div class="u2856_text">
          <span>搜索</span>
        </div>
      </div>
    <!-- 系统管理 -->
      <div class="u2857">
        <div class="u2857_text">
          <span>系统管理</span>
        </div>
      </div>
      <div class="u2858">
        <input type="checkbox" />
      </div>
      <div class="u2859">
        <div class="u2826_text">
          <span>查看</span>
        </div>
      </div>
      <div class="u2860">
        <input type="checkbox" />
      </div>
      <div class="u2861">
        <div class="u2861_text">
          <span>新增</span>
        </div>
      </div>
      <div class="u2862">
        <input type="checkbox" />
      </div>
      <div class="u2863">
        <div class="u2863_text">
          <span>编辑</span>
        </div>
      </div>
      <div class="u2864">
        <input type="checkbox" />
      </div>
      <div class="u2865">
        <div class="u2865_text">
          <span>删除</span>
        </div>
      </div>
      <div class="u2866">
        <input type="checkbox" />
      </div>
      <div class="u2867">
        <div class="u2867_text">
          <span>批量删除</span>
        </div>
      </div>
      <div class="u2868">
        <input type="checkbox" />
      </div>
      <div class="u2869">
        <div class="u2869_text">
          <span>禁用</span>
        </div>
      </div>
      <div class="u2870">
        <input type="checkbox" />
      </div>
      <div class="u2871">
        <div class="u2871_text">
          <span>搜索</span>
        </div>
      </div>

      <div class="u2872">
        <div class="u2872_text">
          <span>保存</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>

<style lang="less" scoped>
.u2797 {
  position: absolute;
  left: 15px;
  top: 43px;
  width: 101px;
  height: 28px;
  font-weight: 500;
  font-size: 20px;
  color: rgb(51, 51, 51);
}
.u2798 {
  position: absolute;
  left: 15px;
  top: 103px;
  color: rgb(30, 30, 30);
  .u2798_div {
    width: 1300px;
    height: 850px;
    color: rgb(30, 30, 30);
    background: #ffffff;
    border-radius: 8px;
  }
}
.u2802 {
  position: absolute;
  left: 70px;
  top: 47px;
  width: 73px;
  height: 25px;
  font-size: 18px;
  color: rgb(37, 97, 239);
  border-width: 0px;
}
.u2803 {
  position: absolute;
  left: 40px;
  top: 50px;
  border-width: 0px;
  .u2803_img > img {
    width: 20px;
    height: 20px;
  }
}
.u2805 {
  position: absolute;
  left: 80px;
  top: 100px;
  width: 41px;
  height: 22px;
  font-size: 16px;
}
.u2805_text span:nth-child(1) {
  color: #666666;
}
.u2805_text span:nth-child(2) {
  color: #ff0000;
}
.u2807 {
  position: absolute;
  left: 150px;
  top: 90px;
  input {
    width: 213px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 4px;
  }
}

.u2808 {
  position: absolute;
  left: 500px;
  top: 100px;
  width: 41px;
  height: 22px;
  font-size: 16px;
}
.u2808_text span:nth-child(1) {
  color: #666666;
}
.u2808_text span:nth-child(2) {
  color: #ff0000;
}
.u2809 {
  position: absolute;
  left: 570px;
  top: 90px;
  input {
    width: 213px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 4px;
  }
}

.u2810 {
  position: absolute;
  left: 920px;
  top: 100px;
  width: 41px;
  height: 22px;
  font-size: 16px;
}
.u2810_text span:nth-child(1) {
  color: #666666;
}
.u2810_text span:nth-child(2) {
  color: #ff0000;
}
.u2811 {
  position: absolute;
  left: 990px;
  top: 90px;
  input {
    width: 213px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 4px;
  }
}

.u2812 {
  position: absolute;
  left: 80px;
  top: 180px;
  width: 41px;
  height: 22px;
  font-size: 16px;
}
.u2812_text span:nth-child(1) {
  color: #666666;
}
.u2813 {
  position: absolute;
  left: 150px;
  top: 170px;
  input {
    width: 213px;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 4px;
  }
}

.u2814 {
  position: absolute;
  left: 500px;
  top: 180px;
  width: 41px;
  height: 22px;
  font-size: 16px;
}
.u2814_text span:nth-child(1) {
  color: #666666;
}
.u2815 {
  position: absolute;
  left: 570px;
  top: 180px;
}

.u2816 {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 250px;
  width: 1140px;
  height: 1px;
}

.u2817 {
  position: absolute;
  left: 70px;
  top: 287px;
  width: 73px;
  height: 25px;
  font-size: 18px;
  color: rgb(37, 97, 239);
}
.u2818 {
  position: absolute;
  left: 40px;
  top: 290px;
  .u2818_img > img {
    width: 20px;
    height: 20px;
  }
}

.u2819 {
  position: absolute;
  left: 60px;
  top: 330px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2820 {
  position: absolute;
  left: 90px;
  top: 327px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
}

.u2821 {
  position: absolute;
  left: 75px;
  top: 377px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 15px;
  color: #666666;
}

.u2822 {
  position: absolute;
  left: 103px;
  top: 410px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2823 {
  position: absolute;
  left: 120px;
  top: 408px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2824 {
  position: absolute;
  left: 90px;
  top: 447px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 15px;
  color: #666666;
}

.u2825 {
  position: absolute;
  left: 103px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2826 {
  position: absolute;
  left: 120px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2827 {
  position: absolute;
  left: 203px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2828 {
  position: absolute;
  left: 220px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2829 {
  position: absolute;
  left: 303px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2830 {
  position: absolute;
  left: 320px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2831 {
  position: absolute;
  left: 403px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2832 {
  position: absolute;
  left: 420px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2833 {
  position: absolute;
  left: 503px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2834 {
  position: absolute;
  left: 520px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2835 {
  position: absolute;
  left: 603px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2836 {
  position: absolute;
  left: 620px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2837 {
  position: absolute;
  left: 703px;
  top: 480px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2838 {
  position: absolute;
  left: 720px;
  top: 479px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2839 {
  position: absolute;
  left: 90px;
  top: 517px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 15px;
  color: #666666;
}

.u2840 {
  position: absolute;
  left: 103px;
  top: 550px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2841 {
  position: absolute;
  left: 120px;
  top: 549px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2842 {
  position: absolute;
  left: 203px;
  top: 550px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2843 {
  position: absolute;
  left: 220px;
  top: 549px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2844 {
  position: absolute;
  left: 303px;
  top: 550px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2845 {
  position: absolute;
  left: 320px;
  top: 549px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2846 {
  position: absolute;
  left: 403px;
  top: 550px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2847 {
  position: absolute;
  left: 420px;
  top: 549px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2848 {
  position: absolute;
  left: 90px;
  top: 587px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 15px;
  color: #666666;
}

.u2849 {
  position: absolute;
  left: 103px;
  top: 620px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2850 {
  position: absolute;
  left: 120px;
  top: 619px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2851 {
  position: absolute;
  left: 203px;
  top: 620px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2852 {
  position: absolute;
  left: 220px;
  top: 619px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2853 {
  position: absolute;
  left: 303px;
  top: 620px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2854 {
  position: absolute;
  left: 320px;
  top: 619px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2855 {
  position: absolute;
  left: 403px;
  top: 620px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2856 {
  position: absolute;
  left: 420px;
  top: 619px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2857 {
  position: absolute;
  left: 90px;
  top: 657px;
  width: 69px;
  height: 22px;
  font-weight: 700;
  font-size: 15px;
  color: #666666;
}

.u2858 {
  position: absolute;
  left: 103px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2859 {
  position: absolute;
  left: 120px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2860 {
  position: absolute;
  left: 203px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2861 {
  position: absolute;
  left: 220px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2862 {
  position: absolute;
  left: 303px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2863 {
  position: absolute;
  left: 320px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2864 {
  position: absolute;
  left: 403px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2865 {
  position: absolute;
  left: 420px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2866 {
  position: absolute;
  left: 503px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2867 {
  position: absolute;
  left: 520px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2868 {
  position: absolute;
  left: 603px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2869 {
  position: absolute;
  left: 620px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2870 {
  position: absolute;
  left: 703px;
  top: 690px;
  input {
    width: 16px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(201, 201, 201, 1);
    border-radius: 2px;
  }
}

.u2871 {
  position: absolute;
  left: 720px;
  top: 689px;
  width: 69px;
  height: 22px;
  font-size: 13px;
  color: #666666;
}

.u2872 {
  position: absolute;
  left: 530px;
  top: 770px;
  font-size: 16px;
  .u2872_text {
    width: 280px;
    height: 40px;
    background-color: rgba(37, 97, 239, 1);
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 20px rgba(37, 97, 239, 0.827450980392157);
    font-size: 16px;
    span {
      text-align: center;
      line-height: 40px;
      width: 276px;
      word-wrap: break-word;
      color: #ffffff;
    }
  }
}
</style>