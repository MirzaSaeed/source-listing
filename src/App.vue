<!-- App.vue -->

<template>
  <q-layout id="app" view="hHh lpR lFf" style="height: 100vh" class="rounded-borders page-container">
    <q-header>
      <!-- Navbar  -->
    </q-header>
    <!-- Sidebar  -->
    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

#app {
  font-family: "Lato", sans-serif;
}
nav a.router-link-exact-active {
  color: var(--q-text-active);
}

.page-container{
  /* background: var(--q-app-bg); */
}
</style>
