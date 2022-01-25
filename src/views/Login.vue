<template>
    <div id="loginLayout">
        <div class="login_page">
            <div class="login_page_form">
                <div class="login_page_form_title">
                        <img class="login_page_form_title_logo" width="50px" src="../assets/logo.svg" alt="">
                        <p class="login_page_form_title_p">章鱼论坛</p>
                </div>
                <el-form ref="loginForm" class="login-form" autocomplete="off"
                         label-position="left">
                    <el-form-item prop="username">
                        <el-input
                                ref="username"
                                prefix-icon="el-icon-user"
                                name="username"
                                type="text"
                                autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                                ref="password"
                                prefix-icon="el-icon-key"
                                name="password"
                                type="password"
                                autocomplete="off"
                        />
                    </el-form-item>
                    <el-form-item prop="code" class="code-input">
                        <el-input
                                ref="code"
                                prefix-icon="el-icon-lock"
                                name="code"
                                type="text"
                                autocomplete="off"
                                style="width: 60%"
                        />
                        <img
                                width="38%"
                                height="100%"
                                alt="请输入验证码"
                        >
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 100%" size="large" type="primary">立即登入</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>
    #loginLayout{
        width: 100%;
        height: 100%;
        background-image: url("../assets/bg.svg");
        position: relative;
        background-size: cover;
    }
    .login_page_form {
        border-radius: 5px;
        background-color: #ffffff;
        padding: 20px;
        width: 380px;
        position: absolute;
        z-index: 1000;
        left: 50%;
        top: 50%;
        margin-top: -250px;
        margin-left: -220px;
    }
    .login_page_form_title{
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 33px;
        font-weight: 500;
        padding: 20px;
        margin-left: 80px;
    }


</style>