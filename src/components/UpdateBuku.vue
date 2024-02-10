<template>
  <div class="container">
  <h1 class="mt-5 mb-4">Update Buku</h1>
  <form @submit.prevent="updateBuku">
    <div class="mb-3">
      <label for="nama_buku" class="form-label">Nama Buku:</label>
      <input type="text" class="form-control" v-model="editedBuku.nama_buku" id="nama_buku" required>
    </div>
    <div class="mb-3">
      <label for="deskripsi" class="form-label">Deskripsi:</label>
      <textarea class="form-control" v-model="editedBuku.deskripsi" id="deskripsi" rows="4" required></textarea>
    </div>
    <div class="mb-3">
      <label for="foto" class="form-label">Foto Buku:</label>
      <input type="file" class="form-control" @change="onFileChange" id="foto" required>
    </div>
    <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
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