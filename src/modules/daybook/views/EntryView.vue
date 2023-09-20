<template>
    <div class="entry-titile d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <li class="fa fa-trash-alt"></li>
            </button>

            <button class="btn btn-primary">
                Subir Foto
                <li class="fa fa-upload"></li>
            </button>
        </div>
    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Que sucedió hoy?"
        >

        </textarea>
    </div>

    <img 
        class="img-thumbnail"
        src="https://cdn.openwebinars.net/media/featured_images/blog-diferencias-vue-react.png" 
        alt="entry-picture"
    />

    <Fab 
        icon="fa-save"
    />
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';


export default{
    components: {
        Fab: defineAsyncComponent( () => import('../components/ButtonFab.vue') )
    }
}

</script>

<style lang="scss" scoped>

textarea {
    border: none;
    font-size: 20px;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    bottom: 150px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    position: fixed;
    right: 20px;
    width: 200px;
}

</style>