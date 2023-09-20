import { defineAsyncComponent } from 'vue';
<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar Entrada"
                v-model="term"
            />
        </div>

        <div class="entry-scroll-area">
            <h2
                v-for="entry in entriesByTerm"
                :key="entry.id"
            >
                <Entry
                    :entry="entry"
                />
            </h2>
        </div>
    </div>
</template>

<script lang="ts">

import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex'

    export default {
        components: {
            Entry: defineAsyncComponent( () => import('../components/EntryDetails.vue') )
        },
        computed:{
            ...mapGetters('journal', ['getEntriesByTerm']),
            entriesByTerm() {
                return this.getEntriesByTerm( this.term )
            }
        },
        data() {
            return {
                term: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

    .entry-list-container{
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }
    .entry-scroll-area{
        height: calc( 100vh - 110px );
        overflow: scroll;
    }
</style>