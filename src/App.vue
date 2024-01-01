<template>
  <q-layout
    id="app"
    view="hHh lpR lFf"
    style="height: 100vh"
    class="rounded-borders"
  >
    <q-header>
      <!-- Navbar  -->
    </q-header>
    <!-- Sidebar  -->
    <q-page-container class="bg-gray-5">
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap");

#app {
  font-family: "Lato", sans-serif;
}
nav a.router-link-exact-active {
  color: var(--q-text-active);
}
</style>
