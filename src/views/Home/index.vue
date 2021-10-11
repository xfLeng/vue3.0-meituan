<template>
  <el-container>
    <Header />
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import './index.less'
import Header from './components/Header/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Header,
    },
    setup() {
        
    },
})
</script>
