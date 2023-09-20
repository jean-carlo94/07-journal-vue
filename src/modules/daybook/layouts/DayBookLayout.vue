<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Navbar: defineAsyncComponent( () => import('../components/NavBar.vue') ),
        EntryList: defineAsyncComponent( () => import('../components/EntryList.vue') ),
    }
}

</script>

<style lang="scss" scoped>


</style>