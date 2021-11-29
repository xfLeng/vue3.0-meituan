<template>
    <div class='search-bar-container'>
        <div class='content'>
            <a href='/'>
                <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="美团">
            </a>
            <el-input 
            class='search-input' 
            v-model='searchText' 
            placeholder='搜索商家或地点'>
                <template #append>
                    <el-button class='search-btn'>
                        <i class="icon iconfont icon-search"/>
                    </el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script lang="ts">
import './index.less'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'SearchBar',
    setup() {
        const searchText = ref('')

        return {
            searchText
        }
    },
})
</script>
