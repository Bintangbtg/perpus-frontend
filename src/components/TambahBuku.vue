<template>
    <div>
    <form @submit.prevent="addbuku">
        <label for="nama_buku">Nama Buku:</label>
        <input type="text" v-model="form.nama_buku" id="nama_buku" required>
        <label for="deskripsi">Deskripsi:</label>
        <input type="text" v-model="form.deskripsi" id="deskripsi" required>
        <label for="foto">Foto:</label>
        <input type="file" @change="onFileChange" id="foto">
        <button type="submit">add</button>
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