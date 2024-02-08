<!-- UpdateBuku.vue -->

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
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  props: ['id'],
  setup(props) {
    const editedBuku = ref({
      id_buku: props.id,
      nama_buku: '',
      deskripsi: '',
      foto: null
    });

    const updateBuku = async () => {
      const formData = new FormData();
      formData.append('nama_buku', editedBuku.value.nama_buku);
      formData.append('deskripsi', editedBuku.value.deskripsi);
      formData.append('foto', editedBuku.value.foto);

      axios.put(`/updatebuku/${props.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        if (response.data.status) {
          alert('Buku berhasil diperbarui');
        } else {
          alert('Gagal memperbarui buku', error);
        }
      })
      .catch(error => {
        console.error('Error updating buku:', error);
      });
    };

    const onFileChange = (e) => {
      const file = e.target.files[0];
      editedBuku.value.foto = file;
    };

    return {
      editedBuku,
      updateBuku,
      onFileChange
    };
  },
  created() {
    axios.get(`/getbukuById/${this.id}`)
      .then(response => {
        this.editedBuku = response.data; 
      })
      .catch(error => {
        console.error('Error fetching buku data:', error);
      });
  }
});
</script>

<style>
/* Styles khusus untuk komponen ini */
</style>
