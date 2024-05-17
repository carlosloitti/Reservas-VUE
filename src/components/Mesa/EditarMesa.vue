<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card-header fw-bold">
            mesa
        </div>
        <div class="card-body">
            <form @submit.prevent="updateMesa">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo" disabled  
                            v-model='mesa.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="numero_mesa" class="form-label">numero_mesa: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="numero_mesa" placeholder="numero_mesa " disabled  
                            v-model='mesa.numero_mesa'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="capacidad" class="form-label">capacidad: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="capacidad" placeholder="capacidad" disabled  
                            v-model='mesa.capacidad'
                        >                 
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="ubicacion" class="form-label">ubicacion: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="ubicacion" placeholder="ubicacion" disabled  
                            v-model='mesa.ubicacion'
                        >                 
                        </div>
                    </div>
     
                   
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar"> Cancelar </button>
            </form>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faBank, faBuilding, faPencil, faPlus, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    
    export default {
        name: 'EditarMesa',
        data(){
            return{
                mesas: {
                    id:0,
                    name: '',
                    numero_mesa: 0,
                    capacidad0: 0,
                    ubicacion: ''
                },
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Mesas'})
        },
    
        async updateMesa(){
            const res = await axios.put(`http://127.0.0.1:8000/api/mesas/${this.mesas.id}`, this.mesas)
    
            if (res.status == 200) {
            this.$router.push({name: 'Mesas'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mesas has been updated',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        this.mesa.id = this.$route.params.id;
    
        axios.get(`http://127.0.0.1:8000/api/mesas/${this.mesas.id}`)
    
            .then(response => {
            this.mesas = response.data.mesas; 
    
    })
    
    },
    
    
    
    }
    
    
    </script>