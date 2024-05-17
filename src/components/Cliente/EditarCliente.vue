<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card-header fw-bold">
            Cliente
        </div>
        <div class="card-body">
            <form @submit.prevent="updateCliente">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="cliente Codigo" disabled  
                            v-model='cliente.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nombre" placeholder="nombre" disabled  
                            v-model='cliente.nombre'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for=" apellido" class="form-label">apellido: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="apellido" placeholder="apellido" disabled  
                            v-model='cliente.apellido'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="telefono" class="form-label">telefono: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="telefono" placeholder="telefono" disabled  
                            v-model='cliente.telefono'
                        >                 
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="email" class="form-label">email: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="email" placeholder="email" disabled  
                            v-model='cliente.email'
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
        name: 'EditarCliente',
        data(){
            return{
                clientes: {                     
                Code: 0, 
                document_number: 0,   
                nombre: '',  
                apellido : '',
                apellido : '', 
                telefono : '', 
                email: '',   
    
                }, 
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Cliente'})
        },
    
        async updateCliente(){
            const res = await axios.put(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`, this.cliente)
    
            if (res.status == 200) {
            this.$router.push({name: 'Clientes'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'cliente has been updated',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        this.cliente.id = this.$route.params.id;
    
        axios.get(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`)
    
            .then(response => {
            this.cliente = response.data.cliente; 
    
    })
    
    },
    
    
    
    }
    
    
    </script>