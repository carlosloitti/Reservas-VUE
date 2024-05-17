<template>
    <div class="container">
        <h1>Listado de Reservas 
            <button @click="newReservas()"
                    class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus"/>
                     
            </button>
        </h1> 
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">cliente_id</th> 
                <th scope="col">mesa_id</th>   
                <th scope="col">fecha_reserva</th>   
                <th scope="col">duracion</th> 
                <th scope="col">estado</th> 
                <th scope="col">created_at</th>
                <th scope="col">updated_at</th>
                <th scope="col">nombre</th> 
                <th scope="col">ubicacion</th> 

            </tr>
            </thead>
            <tbody>
            <tr v-for="(reserva,index) in reservas" :key="index">
                <th scope="row">{{ index+1}}</th>
                <td>{{ reserva.id}}</td>
                <td>{{ reserva.cliente_id}}</td>
                <td>{{ reserva.mesa_id}}</td> 
                <td>{{ reserva.fecha_reserva}}</td>
                <td>{{ reserva.duracion}}</td>
                <td>{{ reserva.estado}}</td>
                <td>{{ reserva.created_at}}</td>
                <td>{{ reserva.updated_at}}</td>
                <td>{{ reserva.nombre}}</td>
                <td>{{ reserva.ubicacion}}</td>

                
                <button @click="deleteReserva(reserva.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editReserva(reserva.id)"
                    class="btn btn-warning mx-2">
                    <font-awesome-icon icon="pencil"/>
                </button>

                    
            </tr>
            </tbody>

        </table>

    </div>

</template>

<script>
 
import axios from 'axios'
import Swal from 'sweetalert2' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 

export default {
    name: 'Reserva',
    data(){
        return{
            reservas: []
        }
    },

    methods: {

deleteReserva(codigo) {
    Swal.fire({
    title: `Do you want to delete the Reserva with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/reservas/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.reservas = response.data.reservas
            }

        })

    } 

})
},


editReserva(id) {
this.$router.push({name: 'EditarReserva', params: { id: `${id}` }})
},

newReservas(){
this.$router.push({name: 'NewReserva'});
}
},


   

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/reservas')
        .then(response => (this.reservas = response.data.reservas))

    },
} 
</script>