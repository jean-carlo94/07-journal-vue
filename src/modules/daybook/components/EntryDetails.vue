<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <!-- TITULO -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vero, tempore assumenda delectus exercitationem qui! Consequuntur laudantium maxime necessitatibus, error, ab consectetur eius veritatis vel molestias quos possimus, aut sunt.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

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