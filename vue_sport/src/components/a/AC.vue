<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>主要概况</el-breadcrumb-item>
            <el-breadcrumb-item>变压器状态</el-breadcrumb-item>
        </el-breadcrumb>



        <span class="demonstration">变配电站名称：</span>
        <el-input v-model="input" placeholder="全部" style="width: 150px"></el-input>

        <el-button type="primary" icon="el-icon-search" style="margin-left: 15px"></el-button>

        <span class="demonstration">排序字段：</span>
        <el-dropdown>
            <el-button >
                请选择<i class="el-icon-arrow-down el-icon--right" ></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>负荷率</el-dropdown-item>
                <el-dropdown-item>温度</el-dropdown-item>
                <el-dropdown-item>功率因数</el-dropdown-item>
                <el-dropdown-item>有功功率</el-dropdown-item>
                <el-dropdown-item>视在功率</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>



        <span class="demonstration">排序方式：</span>
        <el-dropdown>
            <el-button >
                请选择<i class="el-icon-arrow-down el-icon--right" ></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>升序</el-dropdown-item>
                <el-dropdown-item>倒序</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>



        <el-table stripe :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border height="700" :header-cell-style="{background:'#eff3f6'}">
            <el-table-column type="index" label="序号" align="center"></el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40, 50]"
                :page-size="pagesize"
                :total="tableData.length"
                layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>


    </div>

</template>

<script>
    export default {
        name: "AC",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentPage:1,  //默认开始页面
                pagesize:2,  //每页的条数
            }
        },

        methods:{
            indexMethod(index){
                return index+1;
            },
            handleCurrentChange:function(currentPage){
                this.currentPage = currentPage;
            },
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