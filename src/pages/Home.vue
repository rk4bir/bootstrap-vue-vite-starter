<template>
    <div class="my-2 text-center row">
      <div class="col-12">
        <div class="card border-dark mb-5" style="height: 250px">
          <h1 class="card-header bg-dark text-light">Bootstrap + Vue + Vite Starter</h1>
          <div class="card-body text-dark fw-bold">
            <h5 class="card-title">Feel free to contrinute, star the project</h5>
            <a href="https://github.com/rk4bir/bootstrap-vue-vite-starter/fork">
              <img style="height: 45px; width: 30px" src="../assets/github-fork.png" alt="">
            </a>
            <a style="margin-left: 15px" href="https://github.com/rk4bir/bootstrap-vue-vite-starter">
              <img style="height: 45px; width: auto" src="../assets/github-star.webp" alt="">
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div style="height: 350px" class="card mb-3">
          <h2 class="card-header bg-success">Setup: OK</h2>
          <div class="card-body text-success" style="text-align: left">
              <pre class="pt-3"><h5>var counter = {{ counter }}</h5><h5>console.log(counter) // output: {{ counter }}</h5></pre>
            <div class="mt-5  fw-bold">
              <button @click="reset" class="btn btn-danger text-uppercase">Reset</button>
              <button @click="decrease" class="btn btn-dark text-white mx-2">-</button>
              <button @click="increase" class="btn btn-success">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div style="height: 350px" class="card mb-3">
          <h3 class="card-header bg-info">Guide</h3>
          <div class="card-body text-info">
            <h5 class="card-title pt-5">Read Docs</h5>
            <a href="https://vuejs.org/">
              <img style="width: 40px;" src="../assets/vue.svg" alt="VueJS Docs">
            </a>
            <a href="https://vitejs.dev/" class="mx-3">
              <img style="width: 40px;" src="../assets/vite.svg" alt="ViteJS Docs">
            </a>
            <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
              <img style="width: 40px;" src="../assets/bootstrap.png" alt="Bootstrap Docs">
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increase = () => {
  counter.value++
}

const decrease = () => {
  counter.value--
}

const reset = () => {
  counter.value = 0
}
</script>


<style>
.card-header {
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>