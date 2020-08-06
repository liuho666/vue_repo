<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>主要概况</el-breadcrumb-item>
            <el-breadcrumb-item>变压器状态</el-breadcrumb-item>
        </el-breadcrumb>


        <!--用户列表-->
        <el-table :data="eleList" border stripe>
            <el-table-column type="index"></el-table-column><!--索引列-->
            <el-table-column label="电压" prop="dy"></el-table-column>
            <el-table-column label="电流" prop="dl"></el-table-column>
            <el-table-column label="时间" prop="time"></el-table-column>
        </el-table>


        <!-- 分页 size-change改变每页记录数 current-change跳转到第几页 layout功能组件-->
        <div>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pageNum"
                    :page-sizes="[1, 2, 5, 100]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
            ></el-pagination>

        </div>



    </div>

</template>

<script>
    export default {
        name: "AC",
        data() {
            return {
                queryInfo: {
                    query:"",//查询信息
                    pageNum: 1,//当前页
                    pageSize:5,//每页最大数
                },
                eleList:[],//电流电压列表
                total:0,//总记录数
            }
        },
        created() {
            this.getEleList();
        },
        methods:{
          //获取电流电压数据
            async getEleList(){
                // 调用post请求
                const { data: res } = await this.$http.get("allEle", {
                    params: this.queryInfo
                });
                this.eleList = res.data; // 电压电流数据封装
                this.total = res.number; // 总记录数封装
            },
            //最大数
            handleSizeChange(newSize){
                this.queryInfo.pageSize = newSize;
                this.getEleList();
            },
            //pageNum的触发动作
            handleCurrentChange(newPage){
                this.queryInfo.pageNum = newPage;
                this.getEleList();
            }
        }
    }

</script>

<style scoped>
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .demonstration{
        margin-left: 20px;
    }
    .button00{
        margin-left: 40px;
    }
    .button01{
        margin-left: 60px;
    }

</style>