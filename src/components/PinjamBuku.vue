<template>
  <div class="container">
  <h1 class="mt-5 mb-4">Peminjaman Buku</h1>
  <form @submit.prevent="pinjamBuku">
    <div class="mb-3">
      <label for="id_siswa" class="form-label">Pilih ID Siswa:</label>
      <select class="form-select" v-model="selectedSiswa" id="id_siswa" required>
        <option v-for="siswa in siswaList" :key="siswa.id_siswa" :value="siswa.id_siswa">{{ siswa.id_siswa }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="tanggal_pinjam" class="form-label">Tanggal Pinjam:</label>
      <input type="date" class="form-control" v-model="tanggalPinjam" id="tanggal_pinjam" required>
    </div>
    <div class="mb-3">
      <label for="tanggal_kembali" class="form-label">Tanggal Kembali:</label>
      <input type="date" class="form-control" v-model="tanggalKembali" id="tanggal_kembali" required>
    </div>
    <button type="submit" class="btn btn-primary">Pinjam Buku</button>
  </form>
</div>

</template>

<script>
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
  data() {
    return {
      selectedSiswa: null,
      tanggalPinjam: '',
      tanggalKembali: '',
      siswaList: [] 
    };
  },
  created() {
    this.fetchSiswaList();
  },
  methods: {
    fetchSiswaList() {
      axios.get('/getsiswa')
        .then(response => {
          this.siswaList = response.data;
        })
        .catch(error => {
          console.error('Error fetching siswa list:', error);
        });
    },
    pinjamBuku() {
  const data = {
    id_siswa: this.selectedSiswa,
    tanggal_pinjam: this.tanggalPinjam,
    tanggal_kembali: this.tanggalKembali
  };

  axios.post('/pinjam_buku', data)
    .then(response => {
      if (response.data.status === 1) {
        alert('Buku berhasil dipinjam');
        const idPeminjaman = response.data.id_peminjaman_buku;

        this.$router.push(`/detail/${idPeminjaman}`);
      } else {
        alert('Gagal meminjam buku');
        console.log(data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat melakukan permintaan');
      console.log(data);
    });
}
  }
};
</script>
