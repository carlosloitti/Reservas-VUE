<template>
    <div class="container">
        <h1>Listado de Mesas 
            <button @click="newMesas()"
                    class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus"/>
                     
            </button>
        </h1> 
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">numero_mesa</th> 
                <th scope="col">capacidad</th>   
                <th scope="col">ubicacion</th>   
            </tr>
            </thead>
            <tbody>
            <tr v-for="(mesa,index) in mesas" :key="index">
                <th scope="row">{{ index+1}}</th>
                <td>{{ mesa.id}}</td>
                <td>{{ mesa.numero_mesa}}</td>
                <td>{{ mesa.capacidad}}</td> 
                <td>{{ mesa.ubicacion}}</td>
                
                <button @click="deleteMesa(mesa.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editMesa(mesa.id)"
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
    name: 'Mesa',
    data(){
        return{
            mesas: []
        }
    },

    methods: {

deleteMesa(codigo) {
    Swal.fire({
    title: `Do you want to delete the mesa with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/mesas/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.mesas = response.data.mesas
            }

        })

    } 

})
},


editMesa(id) {
this.$router.push({name: 'EditarMesa', params: { id: `${id}` }})
},

newMesa(){
this.$router.push({name: 'NewMesa'});
}
},


   

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/mesas')
        .then(response => (this.mesas = response.data.mesas))

    },
} 
</script>