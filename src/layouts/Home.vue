<template>
    <el-container class="wrapper" :class="{'folded':folded}">
        <el-aside class="left" width="200px">
            <h1 class="logo-wrapper" style="color: #ffffff"><img height="30px" src="../assets/logo.svg" class="sidebar-logo"><span class="logo">后台管理</span></h1>
            <el-menu
                    :collapse="folded"
                    default-active="2"
                    background-color="#272c33"
                    text-color="#fff"
                    active-text-color="#2d8cf0">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页中心</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1"> <i class="el-icon-location"></i>商品管理</el-menu-item>
                        <el-menu-item index="1-2"> <i class="el-icon-location"></i>运营管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">消息通知</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">账户设置</span>
                </el-menu-item>
            </el-menu>
            <div class="folded-btn" @click="folded=!folded"><span :class="[folded?'el-icon-s-unfold':'el-icon-s-fold']"></span></div>
        </el-aside>
        <el-container class="right">
            <el-header class="header">
                <div class="user-info">
                    <el-dropdown>
                  <span class="el-dropdown-link">
                    管理员<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>消息通知</el-dropdown-item>
                            <el-dropdown-item>账号设置</el-dropdown-item>
                            <el-dropdown-item divided>注销登入</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home.vue",
        data() {
            return {
                folded: false,
            }
        }
    }
</script>

<style>
    .user-info{
        float: right;
        line-height: 60px;
        cursor: pointer;
        margin-right: 10px;
    }
    .sidebar-logo{
        margin-top: 10px;
        vertical-align: top;
        transition: all 20ms;
        cursor: pointer;
    }
    .logo-wrapper{
        width: 200px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #303030;
    }
    .logo{
        width: 200px;
        text-align: center;
        padding: 5px;
        color: #ffffff;
        font-family: 新宋体,serif;
    }
    .header {
        background-color: #ffffff;
        box-shadow: 1px 1px 3px #999999;
        z-index: 1000;
    }

    .left {
        transition: all 200ms;
        /*border-right: 1px solid #eeeeee;*/
        background-color: #272c33;
    }
    .el-menu{
        border-right-width: 0 !important;
    }
    .main {
        background-color: #f8f8f9;
    }

    .wrapper {
        height: 100vh;
    }
    .folded-btn{
        background: #424449;
        color: #ffffff;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 200px;
        transition: all 200ms;
        cursor: pointer;
    }

    /** 折叠后的效果 */
    .folded .left {
        width: 60px !important;
    }

    .folded .el-menu span{
        display: none;
    }

    .folded .folded-btn{
        width: 60px
    }
    .folded .logo{
        display: none;
    }
    .folded .logo-wrapper{
        text-align: left;
        position: relative;
    }
    .folded .sidebar-logo{
        left: 15px;
        margin-top: 10px;
        position: absolute;
        transition: all 20ms;
    }


</style>