<template>
    <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        <el-breadcrumb-item>任务管理</el-breadcrumb-item>
    </el-breadcrumb>
        <div>
            <span>变配电站名称：</span>
            <el-select v-model="value" placeholder="请选择" style="padding: 10px 0;">
                <el-option label="XX公司变配电站1" value="shanghai"></el-option>
                <el-option label="XX公司变配电站2" value="beijing"></el-option>
                <el-option label="XX公司变配电站3" value="shanghai"></el-option>
                <el-option label="XX公司变配电站4" value="beijing"></el-option>
            </el-select>
            <span>计划开始时间：</span>
            <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>
        <div>
            <span>任务类型：</span>
            <el-select v-model="value" placeholder="请选择" style="width:120px; padding: 10px 0;">
                <el-option label="全部" value="all"></el-option>
                <el-option label="巡检" value="xuj"></el-option>
                <el-option label="消缺" value="xq"></el-option>
                <el-option label="消警" value="xij"></el-option>
                <el-option label="抢修" value="qx"></el-option>
                <el-option label="抢单" value="qd"></el-option>
            </el-select>
            <span>任务状态：</span>
            <el-select v-model="value" placeholder="请选择" style="width:120px; padding: 10px 0;">
                <el-option label="全部" value="all1"></el-option>
                <el-option label="待办" value="db"></el-option>
                <el-option label="在办" value="zb"></el-option>
                <el-option label="办毕" value="bb"></el-option>
            </el-select>
            <span>执行结果：</span>
            <el-select v-model="value" placeholder="请选择" style="width:120px; padding: 10px 0;">
                <el-option label="全部" value="all2"></el-option>
                <el-option label="按时完成" value="intime"></el-option>
                <el-option label="超时完成" value="outtime"></el-option>
            </el-select>
            <span>负责人：</span>
            <el-input v-model="input" placeholder="请输入内容" style="width:120px; padding: 10px 0;"></el-input>
            <span>执行人：</span>
            <el-input v-model="input" placeholder="请输入内容" style="width:120px; padding: 10px 0;"></el-input>
            <el-button type="primary" icon="el-icon-search"style="margin-left: 10px;">查询</el-button>
        </div>
        <el-table stripe :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border height="640" :header-cell-style="{background:'#eff3f6'}">
            <el-table-column type="index" align="center" :index="indexMethod" label="序号"></el-table-column>
            <el-table-column prop="1" label="变配电站名称" align="center" width="250"></el-table-column>
            <el-table-column prop="2" label="任务单号" align="center" width="100"></el-table-column>
            <el-table-column prop="3" label="负责人" align="center" width="60"></el-table-column>
            <el-table-column prop="4" label="执行人" align="center" width="200"></el-table-column>
            <el-table-column prop="5" label="任务类型" align="center" width="80"></el-table-column>
            <el-table-column prop="6" label="任务状态" align="center" width="80"></el-table-column>
            <el-table-column prop="7" label="执行结果" align="center" width="80"></el-table-column>
            <el-table-column prop="8" label="签到偏差距离(m)" align="center" width="120"></el-table-column>
            <el-table-column prop="9" label="计划开始时间" align="center" width="100"></el-table-column>
            <el-table-column prop="10" label="计划完成时间" align="center" width="100"></el-table-column>
            <el-table-column prop="11" label="实际开始时间" align="center" width="150"></el-table-column>
            <el-table-column prop="12" label="实际完成时间" align="center" width="100"></el-table-column>
            <el-table-column prop="13" label="创建人" align="center" width="60"></el-table-column>
            <el-table-column prop="14" label="创建时间" align="center" width="150"></el-table-column>
            <el-table-column prop="15" label="任务内容" align="center" width="120"></el-table-column>
            <el-table-column label="" align="center" width="200">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="handleEdit(scope.$index, scope.row)">执行情况
                    </el-button>
                    <el-button
                            size="mini"
                            type="warning"
                            @click="handleDelete(scope.$index, scope.row)">查看任务
                    </el-button>
                </template>
            </el-table-column>
            <!--<el-table-column prop="16" label="" align="center" width="180"></el-table-column>-->
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
        name: "JA",
        data() {
            return {
                    tableData: [{
                        1: 'XX公司变配电站1',
                        2: 'R2007020002',
                        3: 'xmzp',
                        4: 'duanshutao2',
                        5: '巡检',
                        6: '-',
                        7: '-',
                        8: '-',
                        9: '2020-07-02',
                        10: '2020-07-03',
                        11: '-',
                        12: '-',
                        13: '用户',
                        14: '2020-07-02 15:35:39',
                        15: '',
                        16: ''
                    },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                        {
                            1: 'XX公司变配电站1',
                            2: 'R2007020002',
                            3: 'xmzp',
                            4: 'duanshutao2',
                            5: '巡检',
                            6: '-',
                            7: '-',
                            8: '-',
                            9: '2020-07-02',
                            10: '2020-07-03',
                            11: '-',
                            12: '-',
                            13: '用户',
                            14: '2020-07-02 15:35:39',
                            15: '',
                            16: ''
                        },
                    ],
                pagesize:10,  //每页的条数
                currentPage:1,  //默认开始页面
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