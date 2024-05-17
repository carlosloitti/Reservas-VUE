<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card-header fw-bold">
            Menu
        </div>
        <div class="card-body">
            <form @submit.prevent="updateMenu">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo categorie" disabled  
                            v-model='menu.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="name" placeholder="nombre categorie" disabled  
                            v-model='menu.name'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="descripcion" class="form-label">descripcion: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="descripcion" placeholder="descripcion categorie" disabled  
                            v-model='menu.descripcion'
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
        name: 'EditarMenu',
        data(){
            return{
                menus: {
                    id:0,
                    name: '',
                    descripcion: '',

    
                },
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Menus'})
        },
    
        async updateMenu(){
            const res = await axios.put(`http://127.0.0.1:8000/api/menus/${this.menus.id}`, this.menus)
    
            if (res.status == 200) {
            this.$router.push({name: 'Menus'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Menu has been updated',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        this.menu.id = this.$route.params.id;
    
        axios.get(`http://127.0.0.1:8000/api/menus/${this.menus.id}`)
    
            .then(response => {
            this.menu = response.data.menu; 
    
    })
    
    },
    
    
    
    }
    
    
    </script>