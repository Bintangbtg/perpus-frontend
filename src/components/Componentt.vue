
<template>
  <router-link to="/home" :class="['component', className]">
    <div class="text-wrapper">Daftar</div>
  </router-link>
</template>

<script>
export default {
  name: "Component",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>


<style>
.component {
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
}
</style>
