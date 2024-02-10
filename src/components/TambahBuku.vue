<template>
    <div class="container">
  <h1 class="mt-5 mb-4">Tambah Buku Baru</h1>
  <form @submit.prevent="addBuku">
    <div class="mb-3">
      <label for="nama_buku" class="form-label">Nama Buku:</label>
      <input type="text" class="form-control" v-model="form.nama_buku" id="nama_buku" required>
    </div>
    <div class="mb-3">
      <label for="deskripsi" class="form-label">Deskripsi:</label>
      <input type="text" class="form-control" v-model="form.deskripsi" id="deskripsi" required>
    </div>
    <div class="mb-3">
      <label for="foto" class="form-label">Foto:</label>
      <input type="file" class="form-control" @change="onFileChange" id="foto">
    </div>
    <button type="submit" class="btn btn-primary">Tambah</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';
import {useRouter} from 'vue-router';
import {ref} from 'vue';
import Swal from 'sweetalert2';

export default {
    name: "addbuku",
    setup(){
        const router = useRouter();

        const form = ref({
            nama_buku: '',
            deskripsi: '',
            foto: null,
        });

        const addbuku = async () => {
            try{
                let formData = new FormData();
                formData.append('nama_buku', form.value.nama_buku);
                formData.append('deskripsi', form.value.deskripsi);
                formData.append('foto', form.value.foto);

                const response = await axios.post('/addbuku', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.data && response.data.message) {
                    router.push('/home');
                } else {
                    showErrorMessage('Gagal menambahkan buku');
                }
            } catch (error) {
                console.error(error);
                showErrorMessage('Gagal menambahkan buku');
            }
        };

        const showErrorMessage = (message) =>{
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: message,
            });
        };

        const onFileChange = (e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                form.value.foto = files[0];
            }
        };


        return{
            form,
            addbuku,
            router,
            showErrorMessage,
            onFileChange,
        }
    }
}
</script>