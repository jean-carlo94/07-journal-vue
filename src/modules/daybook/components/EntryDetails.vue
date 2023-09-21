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
import getDayMontYear from '../helpers/getDayMontYear';


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
            const { day } = getDayMontYear( this.entry.date );
            return day;
        },
        getNameMonth() {
            const { month } = getDayMontYear( this.entry.date );
            return month;
        },
        getYear() {
            const { year } = getDayMontYear( this.entry.date );
            return year;
        },
        getNameDay() {
            const { dayName } = getDayMontYear( this.entry.date );
            return dayName;
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