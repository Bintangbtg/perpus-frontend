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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(buku, index) in this.buku" :key="index">
                    <td>{{buku.id_buku}}</td>
                    <td>{{buku.foto}}</td>
                    <td>{{buku.nama_buku}}</td>
                    <td>{{buku.deskripsi}}</td>
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
        }
    }
}
</script>

<style>
</style>