<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card-header fw-bold">
            Plato
        </div>
        <div class="card-body">
            <form @submit.prevent="savePlato">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo " disabled  
                            v-model='plato.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="menu_id" class="form-label">menu_id: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="menu_id" placeholder="menu_id " disabled  
                            v-model='plato.menu_id'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nombre" placeholder="nombre " disabled  
                            v-model='plato.nombre'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">descripcion: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="descripcion" placeholder="descripcion " disabled  
                            v-model='plato.descripcion'
                        >                 
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="precio" class="form-label">precio: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="precio" placeholder="precio " disabled  
                            v-model='plato.precio'
                        >                 
                        </div>
                    </div>
                    
    
    
                    <div class="row mb-3">
                        <label for="menu_id" class="form-label">menu_id: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" />  </div>
                            <select class="form-select" v-model="plato.menu_id">
                                    <option v-for="menu in menus" v-bind:value="menus.menu_id">{{ menus.menu_id }} </option>
    
                            </select>             
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
        name: 'EditarPlato',
        data(){
            return{
                platos: {
                    id:0,
                    menu_id: 0,
                    nombre: '',
                    descripcion: '',
                    precio: 0 
    
                },
                menus: []
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Platos'})
        },
    
        async savePlato(){
            this.platos.id = this.platos
            const res = await axios.put(`http://127.0.0.1:8000/api/platos/`, this.platos)
            console.log(res);
            if (res.status == 200) {
            this.$router.push({name: 'platos'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'platos has been saved',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        axios.get(`http://127.0.0.1:8000/api/platos/`)
    
            .then(response => {
            this.platos = response.data.platos
    
    })
    
    },
    
    
    
    }
    
    
    </script>