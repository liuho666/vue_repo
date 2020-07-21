<template>
    <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        <el-breadcrumb-item>巡检记录</el-breadcrumb-item>
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
                <span>巡检开始时间：</span>

                    <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                <span>任务状态：</span>

                <el-select v-model="selecttype.typename" placeholder="请选择" style="width:120px; padding: 10px 0;">
                    <!--<el-option label="全部" value="all"></el-option>-->
                    <!--<el-option label="在办" value="xuj"></el-option>-->
                    <!--<el-option label="办毕" value="xq"></el-option>-->
                    <el-option v-for="item in selecttype" :key="item.typeid" :label="item.typename" :value="item.typeid"></el-option>
                </el-select>
                <span>执行结果：</span>
                <el-select v-model="selectresult.resultname" placeholder="请选择" style="width:120px; padding: 10px 0;">
                    <!--<el-option label="全部" value="all2"></el-option>-->
                    <!--<el-option label="按时完成" value="intime"></el-option>-->
                    <!--<el-option label="超时完成" value="outtime"></el-option>-->
                    <el-option v-for="item in selectresult" :key="item.resultid" :label="item.resultname" :value="item.resultid"></el-option>
                </el-select>
                <span>负责人：</span>
                <el-input v-model="input" placeholder="请输入内容" style="width:120px; padding: 10px 0;"></el-input>
                <el-button type="primary" icon="el-icon-search"style="margin-left: 10px;">查询</el-button>
                <el-button type="primary" icon="el-icon-document"style="margin-left: 10px;">导出</el-button>
            </div>



        <el-table :data="gridData" border :header-cell-style="{background:'#eff3f6'}" border style="width: 100%;height: 700px;border: 1px solid #ddd;">
            <el-table-column property="1" label="变配电站名称" align="center" width="250"></el-table-column>
            <el-table-column property="2" label="巡检任务单号" align="center" width="100"></el-table-column>
            <el-table-column property="3" label="负责人" width="60"></el-table-column>
            <el-table-column property="4" label="执行人" align="center" width="200"></el-table-column>
            <el-table-column property="5" label="提交情况" align="center" width="80"></el-table-column>
            <el-table-column property="6" label="巡检开始时间" align="center" width="80"></el-table-column>
            <el-table-column property="7" label="巡检结束时间" width="80"></el-table-column>
            <el-table-column property="8" label="计划完成时间" align="center" width="120"></el-table-column>
            <el-table-column property="9" label="任务状态" align="center" width="100"></el-table-column>
            <el-table-column property="10" label="执行结果" align="center" width="100"></el-table-column>
            <el-table-column property="11" label="签到偏差距离(m)" width="150"></el-table-column>
            <el-table-column property="12" label="巡检项数" align="center" width="100"></el-table-column>
            <el-table-column property="13" label="缺陷总个数" align="center" width="60"></el-table-column>
            <el-table-column property="14" label="缺陷未处理个数" align="center" width="150"></el-table-column>
            <el-table-column property="15" label="" align="center" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "JB",
        data() {
            return {
                input: '',
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
                        typename:'在办'
                    },
                    {
                        typeid:'t03',
                        typename:'办毕'
                    },
                ],
                selectresult:[
                    {
                        resultid:'r01',
                        resultname:'全部'
                    },
                    {
                        resultid:'r02',
                        resultname:'按时完成'
                    },
                    {
                        resultid:'r03',
                        resultname:'超时完成'
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
        }
    }
</script>

<style scoped>

</style>