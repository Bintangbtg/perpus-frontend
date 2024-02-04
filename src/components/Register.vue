<template>
  <div class="macbook-air">
    <div class="div">
      <img class="image" alt="Image" src="https://c.animaapp.com/im3oERTv/img/image-3.png" />
      <div class="text-wrapper-2">PerpusTel</div>
      <router-link to="/buatakun" class="text-wrapper-3">Login</router-link>
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
        <div class="overlap-2">
          <!-- Ubah div menjadi elemen input -->
          <input type="text" placeholder="Email" class="text-wrapper-8" />
          <img class="mail" alt="Mail" src="https://c.animaapp.com/im3oERTv/img/mail.png" />
        </div>
        <div class="overlap-group-2">
          <img
            class="key-vertical"
            alt="Key vertical"
            src="https://c.animaapp.com/im3oERTv/img/key-vertical.svg"
          />
          <input type="text" placeholder="Password" class="text-wrapper-8" />
        </div>
        <div class="text-wrapper-9">OR</div>
        <img class="vector" alt="Vector" src="https://c.animaapp.com/im3oERTv/img/vector-1.svg" />
        <img class="img" alt="Vector" src="https://c.animaapp.com/im3oERTv/img/vector-1.svg" />
        <Component class="component-1" />
      </div>
    </div>
  </div>
</template>

<script>
import Component from "./Componentt.vue";
import Google from "./icons/Google/Google.vue";
import Apple from "./icons/Apple.vue";

export default {
  name: "Register",
  components: {
    Component,
    Google,
    Apple,
  },
};
</script>

<style>
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