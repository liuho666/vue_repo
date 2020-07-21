<template>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>主要概况</el-breadcrumb-item>
        <el-breadcrumb-item>看板二</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "AF"
    }
</script>

<style scoped>

</style>