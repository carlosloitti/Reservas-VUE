<template>
    <div class="container">
        <h1>Listado de Platos 
            <button @click="newPlato()"
                    class="btn btn-succes mx-2">
                    <font-awesome-icon icon="plus"/>
                     
            </button>
        </h1> 
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">menu_id</th> 
                <th scope="col">nombre</th> 
                <th scope="col">descripcion</th> 
                <th scope="col">precio</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(plato,index) in platos" :key="index">
                <th scope="row">{{ index+1}}</th>
                <td>{{ plato.id}}</td>
                <td>{{ plato.menu_id}}</td>
                <td>{{ plato.nombre}}</td>
                <td>{{ plato.descripcion}}</td> 
                <td>{{ plato.precio}}</td> 
                
                <button @click="deletePlato(plato.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash"/>
                </button>

                <button @click="editPlato(plato.id)"
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
    name: 'Plato',
    data(){
        return{
            platos: []
        }
    },

    methods: {

deletePlato(codigo) {
    Swal.fire({
    title: `Do you want to delete the platos with id ${codigo}?`,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    }).then((result) => {
     
    if (result.isConfirmed) 
        {
        axios.delete(`http://127.0.0.1:8000/api/platos/${codigo}`)
        .then(response => {
            if (response.data.success){
                Swal.fire('Deleted!! ', '', 'success')
                this.platos = response.data.platos
            }

        })

    } 

})
},


editPlato(id) {
this.$router.push({name: 'EditarPlato', params: { id: `${id}` }})
},

newPlato(){
this.$router.push({name: 'NewPlato'});
}
},


   

    mounted() { 
    axios
        .get('http://127.0.0.1:8000/api/platos')
        .then(response => (this.platos = response.data.platos))

    },
} 
</script>