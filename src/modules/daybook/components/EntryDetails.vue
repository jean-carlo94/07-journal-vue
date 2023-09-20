<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    >
        <!-- TITULO -->
        <div class="entry-title d-flex mb-2">
            <span class="text-success fs-5 fw-bold">{{ getDay }}</span>
            <span class="mx-1 fs-5">{{ getNameMonth  }}</span>
            <span class="mx-2 fs-5 fw-light">{{ getYear }}, {{ getNameDay }}</span>
        </div>

        <div class="entry-description">
            <p>{{ shotText }}</p>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        entry: {
            type: Object,
            required: true,
        }
    },
    computed: {
        shotText() {
            return ( this.entry.text.length > 130 ) 
                    ? this.entry.text.substring(0, 130) + '...'
                    : this.entry.text;
        },
        getDay() {
            return new Date(this.entry.date).getDate();
        },
        getNameMonth() {
            const date = new Date(this.entry.date);
            const month = new Intl.DateTimeFormat("es-ES",{ month: "long" }).format(date);
            return month[0].toUpperCase() + month.substring(1);
        },
        getYear() {
            return new Date(this.entry.date).getFullYear();
        },
        getNameDay() {
            const date = new Date(this.entry.date);
            const day = new Intl.DateTimeFormat("es-ES",{ weekday: "long" }).format(date);
            return day[0].toUpperCase() + day.substring(1);
        },
    }
}
</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>