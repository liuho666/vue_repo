<template>
    <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        <el-breadcrumb-item>消警记录</el-breadcrumb-item>
    </el-breadcrumb>

            <div>
                <span>变配电站名称：</span>
                <el-select v-model="selectbdz.bdzname" placeholder="请选择" style="padding: 10px 0;">
                    <!--<el-option label="XX公司变配电站1" value="shanghai"></el-option>-->
                    <!--<el-option label="XX公司变配电站2" value="beijing"></el-option>-->
                    <!--<el-option label="XX公司变配电站3" value="shanghai"></el-option>-->
                    <!--<el-option label="XX公司变配电站4" value="beijing"></el-option>-->
                    <el-option v-for="item in selectbdz" :key="item.bdzid" :label="item.bdzname" :value="item.bdzid"></el-option>
                </el-select>
                <span>消警时间：</span>
                    <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                <span>处理状态：</span>
                <el-select v-model="selecttype.typename" placeholder="请选择" style="width:120px; padding: 10px 0;">
                    <!--<el-option label="全部" value="all"></el-option>-->
                    <!--<el-option label="未处理" value="xuj"></el-option>-->
                    <!--<el-option label="已处理" value="xq"></el-option>-->
                    <el-option v-for="item in selecttype" :key="item.typeid" :label="item.typename" :value="item.typeid"></el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search"style="margin-left: 10px;">查询</el-button>
                <el-button type="primary" icon="el-icon-document"style="margin-left: 10px;">导出</el-button>
            </div>



        <el-table stripe :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border height="700" :header-cell-style="{background:'#eff3f6'}">
            <el-table-column property="1" label="变配电站名称" align="center" width=""></el-table-column>
            <el-table-column property="2" label="消警任务单号" align="center" width=""></el-table-column>
            <el-table-column property="3" label="设备编号" align="center" width=""></el-table-column>
            <el-table-column property="4" label="设备名称" align="center" width=""></el-table-column>
            <el-table-column property="5" label="报警类型" align="center" width=""></el-table-column>
            <el-table-column property="6" label="报警详情" align="center" width=""></el-table-column>
            <el-table-column property="7" label="处理状态" align="center" width=""></el-table-column>
            <el-table-column property="8" label="创建时间" align="center" width=""></el-table-column>
            <el-table-column property="9" label="消警时间" align="center" width=""></el-table-column>
            <el-table-column property="10" label="消警人员" align="center" width=""></el-table-column>
            <!--<el-table-column property="11" label="详情" align="center" width=""></el-table-column>-->
            <el-table-column label="详情" align="center" width="">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="">查看
                    </el-button>
                </template>
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
        name: "JD",
        data() {
            return {
                tableData: [{
                    1: 'xx公司变配电站1',
                    2: 'R2007170010',
                    3: '10100003001',
                    4: '自研网关',
                    5: '网关通信恢复',
                    6: '网关[10100003001]通信恢复',
                    7: '未处理',
                    8: '2020-07-17 13:36:26',
                    9: '-',
                    10: '-',
                    11: '-',
                },
                    {
                        1: 'xx公司变配电站1',
                        2: 'R2007170010',
                        3: '10100003001',
                        4: '自研网关',
                        5: '网关通信恢复',
                        6: '网关[10100003001]通信恢复',
                        7: '未处理',
                        8: '2020-07-17 13:36:26',
                        9: '-',
                        10: '-',
                        11: '-',
                    },
                    {
                        1: 'xx公司变配电站1',
                        2: 'R2007170010',
                        3: '10100003001',
                        4: '自研网关',
                        5: '网关通信恢复',
                        6: '网关[10100003001]通信恢复',
                        7: '未处理',
                        8: '2020-07-17 13:36:26',
                        9: '-',
                        10: '-',
                        11: '-',
                    },
                    {
                        1: 'xx公司变配电站1',
                        2: 'R2007170010',
                        3: '10100003001',
                        4: '自研网关',
                        5: '网关通信恢复',
                        6: '网关[10100003001]通信恢复',
                        7: '未处理',
                        8: '2020-07-17 13:36:26',
                        9: '-',
                        10: '-',
                        11: '-',
                    },
                ],
                currentPage:1,  //默认开始页面
                pagesize:12,  //每页的条数
                selectbdz:[
                    {
                        bdzid:'001',
                        bdzname:'XX公司变配电站1'
                    },
                    {
                        bdzid:'002',
                        bdzname:'XX公司变配电站2'
                    },
                    {
                        bdzid:'003',
                        bdzname:'XX公司变配电站3'
                    },
                    {
                        bdzid:'004',
                        bdzname:'XX公司变配电站4'
                    }
                ],
                selecttype:[
                    {
                        typeid:'t01',
                        typename:'全部'
                    },
                    {
                        typeid:'t02',
                        typename:'未处理'
                    },
                    {
                        typeid:'t03',
                        typename:'已处理'
                    },
                ],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value1: '',
                value2: ''
            };
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

</style>