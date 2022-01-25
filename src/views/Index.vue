<template>
    <div>
        <h1>欢迎页面</h1>
        <el-button @click="avatarSelectorModel.dialogVisible = true">头像切换</el-button>
        <avatar-selector v-if="avatarSelectorModel.dialogVisible" :avatar-selector-model="avatarSelectorModel"></avatar-selector>
    </div>
</template>

<script>
    import AvatarSelector from "../components/AvatarSelector";

    export default {
        name: "welcome",
        components: {
            AvatarSelector
        },
        data() {
            return {
                avatarSelectorModel: {
                    dialogVisible: false,
                },
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>