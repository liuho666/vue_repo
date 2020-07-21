<template>
    <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运维管理</el-breadcrumb-item>
        <el-breadcrumb-item>缺陷记录</el-breadcrumb-item>
    </el-breadcrumb>

            <div style="min-width: 1400px;">
                <span>变配电站名称：</span>
                <el-select v-model="selectbdz.bdzname" placeholder="请选择" style="padding: 10px 0;">
                    <!--<el-option label="XX公司变配电站1" value="shanghai"></el-option>-->
                    <!--<el-option label="XX公司变配电站2" value="beijing"></el-option>-->
                    <!--<el-option label="XX公司变配电站3" value="shanghai"></el-option>-->
                    <!--<el-option label="XX公司变配电站4" value="beijing"></el-option>-->
                    <el-option v-for="item in selectbdz" :key="item.bdzid" :label="item.bdzname" :value="item.bdzid"></el-option>
                </el-select>
                <span>发现时间：</span>
                    <el-date-picker
                            v-model="value1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                <span>缺陷状态：</span>
                <el-select v-model="selecttype.typename" placeholder="请选择" style="width:120px; padding: 10px 0;">
                    <!--<el-option label="全部" value="all"></el-option>-->
                    <!--<el-option label="未处理" value="xuj"></el-option>-->
                    <!--<el-option label="已处理" value="xq"></el-option>-->
                    <el-option v-for="item in selecttype" :key="item.typeid" :label="item.typename" :value="item.typeid"></el-option>
                </el-select>
                <span>严重等级：</span>
                <el-select v-model="selectlevel.levelname" placeholder="请选择" style="width:120px; padding: 10px 0;">
                    <!--<el-option label="全部" value="all1"></el-option>-->
                    <!--<el-option label="紧急" value="db"></el-option>-->
                    <!--<el-option label="一般" value="zb"></el-option>-->
                    <!--<el-option label="重大" value="bb"></el-option>-->
                    <el-option v-for="item in selectlevel" :key="item.levelid" :label="item.levelname" :value="item.levelid"></el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" style="margin-left: 10px;">查询</el-button>
                <el-button type="primary" icon="el-icon-document" style="margin-left: 10px;">导出</el-button>
            </div>



        <el-table stripe :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  border height="700" :header-cell-style="{background:'#eff3f6'}">
            <el-table-column property="1" label="变配电站名称" align="center" width="220"></el-table-column>
            <el-table-column property="2" label="巡检任务单号" align="center" width="100"></el-table-column>
            <el-table-column property="3" label="设备路径" align="center" width="180"></el-table-column>
            <el-table-column property="4" label="设备名称" align="center" width="100"></el-table-column>
            <el-table-column property="5" label="缺陷描述" align="center" width="180"></el-table-column>
            <el-table-column property="6" label="缺陷状态" align="center" width="80"></el-table-column>
            <el-table-column property="7" label="缺陷类别" align="center" width="80"></el-table-column>
            <el-table-column property="8" label="严重等级" align="center" width="80"></el-table-column>
            <el-table-column property="9" label="处理建议" align="center" width="100"></el-table-column>
            <el-table-column property="10" label="发现时间" align="center" width="150"></el-table-column>
            <el-table-column property="11" label="消缺时间" align="center" width="80"></el-table-column>
            <el-table-column property="12" label="消缺人员" align="center" width="80"></el-table-column>
            <el-table-column property="13" label="消缺期限" align="center" width="80"></el-table-column>
            <!--<el-table-column property="14" label="缺陷详情" align="center" width="80"></el-table-column>-->
            <el-table-column label="缺陷详情" align="center" width="80">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="">查看
                    </el-button>
                </template>
            </el-table-column>
            <!--<el-table-column property="15" label="" align="center"></el-table-column>-->
            <el-table-column label="" align="center" width="">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click=""
                            icon="el-icon-edit-outline">
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
        name: "JC",
        data() {
            return {
                tableData: [{
                    1: 'xx公司变配电站1',
                    2: 'R2007170010',
                    3: '发电机部分-发电机组',
                    4: '发电机组',
                    5: '能否正常运行',
                    6: '未处理',
                    7: '设施类',
                    8: '紧急',
                    9: '-',
                    10: '2020-07-11 21:57:42',
                    11: '-',
                    12: '-',
                    13: '-',
                    14: '-',
                    15: '-',
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
                selectlevel:[
                    {
                        levelid:'l01',
                        levelname:'全部'
                    },
                    {
                        levelid:'l02',
                        levelname:'紧急'
                    },
                    {
                        levelid:'l03',
                        levelname:'一般'
                    },
                    {
                        levelid:'l04',
                        levelname:'重大'
                    }
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