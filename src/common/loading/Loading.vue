<template>
  <div class="loading">
    <span class="loader"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.body.classList.add('scroll-hidden')
  },
  unmounted() {
    document.body.classList.remove('scroll-hidden')
  }
}
</script>
<style lang="scss" scoped>
.loading {
  top: 0;
  position: absolute;
  position: fixed;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(1px);
}
.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #fff;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}
.loader::before {
  top: auto;
  bottom: 0;
  background-color: $primary;
  animation-delay: 0.5s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes scale50 {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
