<template>
    <Header />
    <SearcheBar />
</template>

<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header/index.vue'
import SearcheBar from './components/SearchBar/index.vue'

export default defineComponent({
    components: {
        Header,
        SearcheBar,
    },
    setup() {
        
    },
})
</script>
