<template>
    <Navbar/>

    <div class="card-body">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Foto Buku</th>
                    <th>Nama Buku</th>
                    <th>Deskripsi</th>
                    <th colspan="3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(buku, index) in this.buku" :key="index">
                    <td>{{buku.id_buku}}</td>
                    <td>{{buku.foto}}</td>
                    <td>{{buku.nama_buku}}</td>
                    <td>{{buku.deskripsi}}</td>
                    <td><router-link class="btn btn-info" :to="'/updatebuku/' + buku.id_buku">EDIT</router-link></td>
                    <td><button class="btn btn-warning" @click="deleteBuku(buku.id_buku)">Delete</button></td>
                    <td><router-link class="btn btn-succes" :to="'/pinjambuku'" >Pinjam</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import axios from 'axios';

export default {
    name: "home",
    components:{
        Navbar
    },
    data(){
        return{
            buku: []
        }
    },
    mounted(){
        console.log('olla')
        this.getBuku()
    },
    methods: {
        getBuku(){
            axios.get('/getbuku').then(res =>{
                this.buku = res.data.books
                console.log(this.buku);
            })
        },
        async deleteBuku(id) {
      try {
        const response = await axios.delete(`/deletebuku/${id}`);
        if (response.data.status) {
          alert(response.data.message);
          this.getBuku();
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
</style>