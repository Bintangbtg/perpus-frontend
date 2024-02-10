<template>
  <div class="container">
  <h1 class="mt-5 mb-4">Tambah Item Peminjaman Buku</h1>
  <form @submit.prevent="tambahItem">
    <div class="mb-3">
      <label for="id_buku" class="form-label">ID Buku:</label>
      <select class="form-select" v-model="selectedBuku" id="id_buku" required>
        <option v-for="buku in bukuList" :key="buku.id_buku" :value="buku.id_buku">{{ buku.id_buku }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="qty" class="form-label">Jumlah:</label>
      <input type="number" class="form-control" v-model="qty" id="qty" required>
    </div>
    <button type="submit" class="btn btn-primary">Tambah Item</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      id_peminjaman_buku: this.id,  
      selectedBuku: null,
      qty: '',
      bukuList: [],
    };
  },
  created(){
    this.fetchBukuList();
  },
  methods: {
    fetchBukuList() {
      axios.get('/getbuku').then(res =>{
                this.bukuList = res.data.books
                console.log(this.bukuList);
            })
    },
    tambahItem() {
      const data = {
        id_peminjaman_buku: this.id,
        id_buku: this.selectedBuku,
        qty: this.qty
      };

      axios.post(`/tambah_item/${this.id}`, data)
        .then(response => {
          if (response.data.status === 1) {
            alert('Item berhasil ditambahkan');
          } else {
            alert('Gagal menambahkan item');
            console.log(data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Terjadi kesalahan saat melakukan permintaan');
        });
    }
  }
};
</script>

<style>
/* Styles khusus untuk komponen ini */
</style>
