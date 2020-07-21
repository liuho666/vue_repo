<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>主要概况</el-breadcrumb-item>
            <el-breadcrumb-item>用能月报</el-breadcrumb-item>
        </el-breadcrumb>

        <span class="demonstration">起始日期：</span>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
        </el-date-picker>

        <span class="demonstration">截止日期：</span>
        <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
        </el-date-picker>


        <span class="demonstration">排序字段：</span>
        <el-dropdown>
            <el-button >
                请选择<i class="el-icon-arrow-down el-icon--right" ></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>总用电量</el-dropdown-item>
                <el-dropdown-item>变配电站名称</el-dropdown-item>
                <el-dropdown-item>变配电站编号</el-dropdown-item>
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


        <el-button type="primary" icon="el-icon-search" class="button00">查询</el-button>

        <el-button type="primary" icon="el-icon-folder-opened" class="button01">导出</el-button>

    </div>
</template>

<script>
    export default {
        name: "AA",
        data() {
            return {
                value1: '',
                value2: '',
            };
        },

        methods: {
            handleClick() {
                alert('button click');
            }
        },
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