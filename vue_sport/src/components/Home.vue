<template>
  <el-container class="home-container">
    <el-container>
      <!--侧边布局-->
      <el-aside :width="isCollapse ?'64px':'200px'">
        <!--伸缩按钮-->
        <div class="toggle-button" @click="toggleCollapase">|||</div>
        <!--侧边栏菜单区 unique-opened="true" 只保持一个菜单展开 router开启路由 active-text-color 颜色-->
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff" unique-opened :collapse="isCollapse"
                 :collapse-transition="false"  :router="true" :default-active="activePath">
          <!--一级菜单-->
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObject[item.id]"></i>
              <span>{{item.title}}</span>
            </template>
            <!--二级菜单,根据index路由-->
            <el-menu-item  :index="it.path+''" v-for="it in item.slist" :key="it.id"  @click="saveNavState(it.path+'')">
              <template slot="title" >
                <i :class="iconsObject[it.id]"></i>
                <span>{{it.title}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>
      <el-container>

        <!--头部布局-->
        <el-header>
          <div>
            <img src="../assets/logo.png" alt class="logo_img" />
            <span>威程电力运维云平台</span>
          </div>
          <el-button type="info" @click="logout">安全退出</el-button>
        </el-header>


        <!--主体布局-->
        <el-main>
          <!--路由占位符-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
    data() {
        return {
            // 左侧菜单
            menuList: [],
            iconsObject: {
                '100':'iconfont iconquanxian',
                '200':'iconfont icondaohanglantubiao_yingxiao',
                '300':'iconfont icondianbiao',
                '400':'iconfont iconelectricity_icon',
                '500':'iconfont icon93',
                '600':'iconfont icondaohanglantubiao_tongji',
                '700':'iconfont icondianyuan',
                '800':'iconfont icondianxian',
                '900':'iconfont icondianzi',
                '1000':'iconfont iconbianzu',
                '1100':'iconfont icondianchi',
                '1200':'iconfont icondaohanglantubiao_yingxiao',
            },
            isCollapse:false,
            // 被激活的连接
            activePath:'',
        }
    },
  // 类似onload事件
  created() {
      this.getMenuList();
      this.activePath = window.sessionStorage.getItem('activePath');// 取出session里的访问路径
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取所有的导航菜单
    async getMenuList(){
      const {data:res} = await this.$http.get("menus");
      console.log(res.data);
      if( res.status != 200) return this.$message.error("操作失败！！！");
      this.menuList = res.data;
    },
    // 切换菜单折叠与展开
    toggleCollapase(){
      this.isCollapse = !this.isCollapse;
    },
    // 保存二级菜单的路径
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath);// 存放点击的二级菜单
      this.activePath = activePath;// 给点击的菜单添加高亮
    },
  }
};
</script>
<style lang="less" scoped>
  //头样式
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;// 左右贴边
  padding-left: 0%;// 左边界
  align-items: center;// 水平
  color: #fff;
  font-size: 20px;
  > div { //左侧div加布局
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none;// 对其右边框
  }
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.logo_img {
  width: 15%;
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button{
  background-color:#4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;// 显示鼠标指针为：小手
}
</style>