<template>
  <div class="macbook-air">
    <div class="div">
      <img class="image" alt="Image" src="https://c.animaapp.com/im3oERTv/img/image-3.png" />
      <div class="text-wrapper-2">PerpusTel</div>
      <router-link to="/" class="text-wrapper-3">Login</router-link>
      <div class="group">
        <div class="text-wrapper-4">Welcome Bro</div>
        <div class="text-wrapper-5">Daftarkan Nama dan Password</div>
        <router-link to="/home" class="overlap">
          <Google class="google-instance" />
          <div class="text-wrapper-6">Daftar Dengan Google</div>
        </router-link>
        <router-link to="/home" class="overlap-group">
          <div class="text-wrapper-7">Daftar Dengan Apple</div>
          <Apple class="apple-instance" />
        </router-link>
        <form @submit.prevent="submitRegistration">
          <div class="text-wrapper-9">OR</div>
        <img class="vector" alt="Vector" src="https://c.animaapp.com/im3oERTv/img/vector-1.svg" />
        <img class="img" alt="Vector" src="https://c.animaapp.com/im3oERTv/img/vector-1.svg" />
          <div class="overlap-2">
            <img class="key-vertical" alt="user" src=""/>
            <input type="name" v-model="form.user" placeholder="UserName" class="text-wrapper-8" />
          </div>
          <div class="overlap-group-2">
            <input type="text" v-model="form.email" placeholder="Email" class="text-wrapper-8" />
            <img class="mail" alt="Mail" src="https://c.animaapp.com/im3oERTv/img/mail.png" />
          </div>
          <div class="overlap-group-3">
            <img class="key-vertical" alt="Key vertical" src="https://c.animaapp.com/im3oERTv/img/key-vertical.svg"/>
            <input type="password" v-model="form.password" placeholder="Password" class="text-wrapper-8" />
          </div>
          <div class="component">
            <button type="submit" class="text-wrapper">Daftar</button>
          </div>
        </form>
      </div>
      </div>
  </div>
</template>

<script>
import Google from "./icons/Google/Google.vue";
import Apple from "./icons/Apple.vue";
import {ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  name: "Register",
  components: {
    Google,
    Apple,
  },
  setup() {
    const router = useRouter();

    const form = ref({
      name: '',
      email: '',
      password: ''
    });

    const submitRegistration = async () => {
      try {
        await axios.post('/register', {
          name: form.value.user,
          email: form.value.email,
          password: form.value.password
        });

        router.push('/home');
      } catch (error) {
        showErrorMessage('Registration failed. Please check your information.');
      }
    };

    const showErrorMessage = (message) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message
      });
    };

    return {
    form,
    submitRegistration,
    router,
    showErrorMessage
  };
  }
}
</script>

<style>
.component {
  left: 4px !important;
  position: absolute !important;
  top: 702px !important;
  background-color: #000000;
  border-radius: 10px;
  height: 70px;
  position: relative;
  width: 450px;
}

.component .text-wrapper {
  color: #ffffff;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 500;
  height: 36px;
  left: 194px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 16px;
  background-color: transparent;
}

input {
  border: none;
  outline: none; /* Untuk menghilangkan border highlight pada focus */
  background-color: transparent; /* Untuk menghilangkan warna background bawaan */
}

.macbook-air {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.macbook-air .div {
  background-color: #ffffff;
  height: 832px;
  position: relative;
  width: 1280px;
}

.macbook-air .image {
  height: 832px;
  left: 0px;
  position: absolute;
  top: 0;
  width: 645px;
}

.macbook-air .text-wrapper-2 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 600;
  left: 17px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 19px;
  left: 655px;
}

.macbook-air .text-wrapper-3 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: 505px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 19px;
  left: 1205px;
}

.macbook-air .group {
  height: 702px;
  left: 89px;
  position: absolute;
  top: 84px;
  width: 468px;
  left: 755px;
}

.macbook-air .text-wrapper-4 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 48px;
  font-weight: 600;
  left: 64px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.macbook-air .text-wrapper-5 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 300;
  left: 63px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 80px;
}

.macbook-air .overlap {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  left: 0;
  position: absolute;
  top: 156px;
  width: 450px;
}

.macbook-air .google-instance {
  height: 40px !important;
  left: 78px !important;
  position: absolute !important;
  top: 15px !important;
  width: 40px !important;
}

.macbook-air .text-wrapper-6 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 138px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 16px;
}

.macbook-air .overlap-group {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  left: 0;
  position: absolute;
  top: 246px;
  width: 450px;
}

.macbook-air .text-wrapper-7 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 138px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 17px;
}

.macbook-air .apple-instance {
  height: 42px !important;
  left: 75px !important;
  position: absolute !important;
  top: 14px !important;
  width: 42px !important;
}

.macbook-air .overlap-2 {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  left: 4px;
  position: absolute;
  top: 432px;
  width: 450px;
}

.macbook-air .text-wrapper-8 {
  color: #252525bf;
  font-family: "Kanit", Helvetica;
  font-size: 15px;
  font-weight: 400;
  left: 73px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 24px;
}

.macbook-air .mail {
  height: 24px;
  left: 29px;
  position: absolute;
  top: 23px;
  width: 24px;
}

.macbook-air .overlap-group-2 {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  left: 4px;
  position: absolute;
  top: 522px;
  width: 450px;
}

.macbook-air .overlap-group-3 {
  background-color: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  left: 4px;
  position: absolute;
  top: 612px;
  width: 450px;
}

.macbook-air .key-vertical {
  height: 23px;
  left: 35px;
  position: absolute;
  top: 23px;
  width: 12px;
}

.macbook-air .text-wrapper-9 {
  color: #000000;
  font-family: "Kanit", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 209px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 356px;
}

.macbook-air .vector {
  height: 1px;
  left: 4px;
  object-fit: cover;
  position: absolute;
  top: 374px;
  width: 194px;
}

.macbook-air .img {
  height: 1px;
  left: 254px;
  object-fit: cover;
  position: absolute;
  top: 374px;
  width: 194px;
}

.macbook-air .component-1 {
  left: 4px !important;
  position: absolute !important;
  top: 632px !important;
}

</style>