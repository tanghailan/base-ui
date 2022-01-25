<template>
    <el-dialog
            title="选择头像"
            :close-on-click-modal="false"
            :visible.sync="avatarSelectorModel.dialogVisible"
            width="50%"
    >
        <img class="avatar" v-for="url in avatarUrls" :src="url" :key="url" @click="selectAvatar(url)" :class="{'active': activeUrl === url}">
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitSelectAvatar" size="small">选中头像</el-button>
      </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "AvatarSelector.vue",
        props: {
            avatarSelectorModel: {
                type: Object,
            }
        },
        data() {
            return {
                avatarUrls: [],
                activeUrl: '',
            }
        },
        mounted() {
            for (let i = 0; i < 8; i++) {
                let boyUrl = require('../assets/images/boy-' + (i + 1) + '.png');
                let girlUrl = require('../assets/images/girl-' + (i + 1) + '.png');
                this.avatarUrls.push(boyUrl);
                this.avatarUrls.push(girlUrl);
            }
        },
        methods:{
            selectAvatar(url){
                this.activeUrl = url;
            },
            submitSelectAvatar(){
                if(!this.activeUrl){
                    return this.$message.warning('请选择头像');
                }else {
                    this.$emit('selectedAvatar', this.activeUrl);
                    this.avatarSelectorModel.dialogVisible = false
                }
            }
        }
    }
</script>

<style scoped>
    .avatar {
        width: 100px;
        height: 100px;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        cursor: pointer;
        margin: 5px;
        border-radius: 5px;
    }

    .active {
        background: skyblue;
    }
</style>