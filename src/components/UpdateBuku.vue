<template>
  <div>
    <h1>Update Buku</h1>
    <form @submit.prevent="updateBuku">
      <label for="nama_buku">Nama Buku:</label>
      <input type="text" v-model="editedBuku.nama_buku" id="nama_buku" required>
      <label for="deskripsi">Deskripsi:</label>
      <textarea v-model="editedBuku.deskripsi" id="deskripsi" required></textarea>
      <label for="foto">Foto Buku:</label>
      <input type="file" @change="onFileChange" id="foto" required>
      <button type="submit">Simpan Perubahan</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      editedBuku: {
        id_buku: this.id,
        nama_buku: '',
        deskripsi: '',
        foto: null
      }
    };
  },
  methods: {
    updateBuku() {
      const data = {
        nama_buku: this.editedBuku.nama_buku,
        deskripsi: this.editedBuku.deskripsi,
        foto: this.editedBuku.foto
      };

      axios.put(`/updatebuku/${this.id}`, data)
        .then(response => {
          if (response.data.status) {
            alert('Buku berhasil diperbarui');
          } else {
            alert('Gagal memperbarui buku');
            console.log(data);
          }
        })
        .catch(error => {
          console.error('Error updating buku:', error);
        });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.editedBuku.foto = file;
    },
    fetchBukuData() {
      axios.get(`/getbukuById/${this.id}`)
        .then(response => {
          this.editedBuku = response.data;
        })
        .catch(error => {
          console.error('Error fetching buku data:', error);
        });
    }
  },
  created() {
    this.fetchBukuData();
  }
};
</script>

<style>
/* Styles khusus untuk komponen ini */
</style>