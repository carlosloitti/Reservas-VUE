<template>

    <div class="container text-star">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card-header fw-bold">
            Reserva
        </div>
        <div class="card-body">
            <form @submit.prevent="updateReserva">
    
                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag"/></div> 
                        <input type="text" class="form-control" id="id" placeholder="codigo " disabled  
                            v-model='reserva.id'
                        >                 
                        </div>                                        
                    </div>
    
                    <div class="row mb-3">
                        <label for="cliente_id" class="form-label">cliente_id: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="cliente_id" placeholder="cliente_id " disabled  
                            v-model='reserva.cliente_id'
                        >                 
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <label for="mesa_id" class="form-label">mesa_id: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="mesa_id" placeholder="mesa_id " disabled  
                            v-model='reserva.mesa_id'
                        >                 
                        </div>
                    </div>
    
    
                    <div class="row mb-3">
                        <label for="fecha_reserva" class="form-label">fecha_reserva: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="fecha_reserva" placeholder="fecha_reserva " disabled  
                            v-model='reserva.fecha_reserva'
                        >                 
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="duracion" class="form-label">duracion: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="duracion" placeholder="duracion " disabled  
                            v-model='reserva.duracion'
                        >                 
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="estado" class="form-label">estado: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="estado" placeholder="estado " disabled  
                            v-model=' reserva.estado'
                        >                 
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">nombre: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nombre" placeholder="nombre " disabled  
                            v-model='reserva.nombre'
                        >                 
                        </div>
                    </div>


                    <div class="row mb-3">
                        <label for="ubicacion" class="form-label">ubicacion: </label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="ubicacion" placeholder="ubicacion" disabled  
                            v-model=' reserva.ubicacion'
                        >                 
                        </div>
                    </div>


    
    
                    <div class="row mb-3">
                        <label for="mesa_id" class="form-label">mesa_id: </label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="bank" />  </div>
                            <select class="form-select" v-model="reserva.mesa_id">
                                    <option v-for="mesas in mesas" v-bind:value="mesas.mesa_id">{{ mesas.mesa_id }} </option>
    
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
        name: 'EditarReserva',
        data(){
            return{
                products: {
                    id:0,
                    cliente_id: '',
                    mesa_id: 0,
                    fecha_reserva: '',
                    duracion: 0
                    estado: '',
                    nombre: '',
                    ubicacion: '',
    
                },
                mesas: []
            }
        },
    
        methods: {
    
        cancelar(){
         this.$router.push({name: 'Reservas'})
        },
    
        async updateReserva(){
            const res = await axios.put(`http://127.0.0.1:8000/api/reservas/${this.reservas.id}`, this.reservas)
    
            if (res.status == 200) {
            this.$router.push({name: 'reservas'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'reservas has been updated',
                showConfirmButton: false,
                timer: 2000
                })
    
            }
        }
    },
    
    mounted() {
    
        this.reserva.id = this.$route.params.id;
    
        axios.get(`http://127.0.0.1:8000/api/reservas/${this.reservas.id}`)
    
            .then(response => {
            this.reserva = response.data.reserva;
            this.mesas = response.data.mesas
    
    })
    
    },
    
    
    
    }
    
    
    </script>