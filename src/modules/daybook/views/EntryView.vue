<template>
    <template v-if="entry">
        <div class="entry-titile d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ getDay }}</span>
                <span class="mx-1 fs-3">{{ getNameMonth }}</span>
                <span class="mx-2 fs-4 fw-light">{{ getYear }}, {{ getNameDay }}</span>
            </div>
    
            <div>
                <input 
                    v-show="false"
                    type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    accept="image/png, image/jpg, image/jpeg"
                />
                <button v-if="!(id === 'new')" @click="deleteEntryById" class="btn btn-danger mx-2">
                    Borrar
                    <li class="fa fa-trash-alt"></li>
                </button>
    
                <button @click="onSelectImage" class="btn btn-primary">
                    Subir Foto
                    <li class="fa fa-upload"></li>
                </button>
            </div>
        </div>
    
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry!.text"
                placeholder="¿Que sucedió hoy?"
            >
    
            </textarea>
        </div>
    
        <img 
            v-if="entry.picture && !localImage"
            class="img-thumbnail"
            :src="entry.picture" 
            alt="entry-picture"
        />

        <img 
            v-if="typeof(localImage) === 'string'"
            class="img-thumbnail"
            :src="localImage" 
            alt="entry-picture"
        />

        <Fab 
            icon="fa-save"
            @on:click="saveEntry"
        />
    </template>

</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';

import getDayMontYear from '../helpers/getDayMontYear';
import { type Entry } from '../store/journal/state';
import uploadImages from '../helpers/uploadImages';

export default{
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    components: {
        Fab: defineAsyncComponent( () => import('../components/ButtonFab.vue') )
    },
    data() {
        return {
            entry: undefined as Entry | undefined,
            localImage: null as null | string | BufferSource,
            file: null as null | File,
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntriesById']),
        getDay() {
            const { day } = getDayMontYear( this.entry!.date );
            return day;
        },
        getNameMonth() {
            const { month } = getDayMontYear( this.entry!.date );
            return month;
        },
        getYear() {
            const { year } = getDayMontYear( this.entry!.date );
            return year;
        },
        getNameDay() {
            const { dayName } = getDayMontYear( this.entry!.date );
            return dayName;
        },
    },
    methods: {
        ...mapActions('journal', ['createEntry','updateEntry','deleteEntry']),
        loadEntry(){
            let entry : Entry

            if( this.id === 'new' ) {
                entry = {
                    text: '',
                    date: new Date().toDateString(),
                    picture: ''
                };
            }else{
                entry =  this.getEntriesById( this.id )
                if( !entry ) return this.$router.push({ name: 'no-entry' })    
            };
            
            this.entry = entry;
        },
        async saveEntry(){
            Swal.fire({
                title: 'Espere por favor',
                allowOutsideClick: false,
            });

            Swal.showLoading();

            const picture = await uploadImages(this.file!);
            this.entry!.picture = picture

            if(this.id === 'new'){
                const newEntry = await this.createEntry(this.entry);
                if( !newEntry ) return this.$router.push({ name: 'no-entry' });
                
                Swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
                return this.$router.push({ name: 'entry', params: { id: newEntry.id } });
            } else {
                await this.updateEntry(this.entry);
            };

            Swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
        },
        async deleteEntryById() {
            const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una Vez eliminado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si Estoy seguro'
            });

            if( !isConfirmed ) return;

            Swal.fire({
                title: 'Espere por favor',
                allowOutsideClick: false,
            });

            Swal.showLoading();

            const rest = await this.deleteEntry(this.entry!.id);

            if( !rest ) {
                Swal.fire('Error', 'Error Eliminando Entrada', 'error');
                return;
            }
            
            Swal.fire('Eliminado', 'Entrada Eliminada con éxito', 'success');
            return this.$router.push({ name: 'no-entry' });
        },
        onSelectedImage( event: Event ) {
            const el = event.target as HTMLInputElement
            const file = el.files![0];

            if(!file) {
                this.localImage = null
                this.file = null
                return
            };

            this.file = file

            const fileReader = new FileReader();
            fileReader.onload = () => this.localImage = fileReader.result
            fileReader.readAsDataURL( file )
        },
        onSelectImage() {            
            (this.$refs as any).imageSelector.click()
        },
    },
    created() {
        this.loadEntry()        
    },
    watch: {
        id() {
            this.loadEntry()
        }
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