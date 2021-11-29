<template>
    <Header />
    <div class="chage-city-container">
        <SearcheBar />
        <div class="main">
            <div class="filter-row">
                <div class="city-search">
                    <h3>按省份选择：</h3>
                    <el-select
                        v-model="province"
                        class="province-select"
                        placeholder="省份"
                    >
                    </el-select>
                    <el-select
                        v-model="city"
                        class="city-select"
                        placeholder="城市"
                    >
                    </el-select>
                </div>
                <div class="keyword-search">
                    <h3>直接搜索：</h3>
                    <el-input
                        placeholder="请输入城市中文或拼音"
                        class="search-input"
                    />
                </div>
            </div>
            <el-divider></el-divider>
            <div class="hot-city-row"></div>
            <el-divider></el-divider>
            <div class="select-row"></div>
        </div>
    </div>
</template>

<script>
import './index.less'
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header/index.vue'
import SearcheBar from './components/SearchBar/index.vue'

export default defineComponent({
    name: 'ChangeCity',
    components: {
        Header,
        SearcheBar,
    },
    setup() {
        const province = ref('')
        const city = ref('')
        return {
            province,
        }
    },
})
</script>
