<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

#app{
  font-family: 'Lato', sans-serif;
}
nav a.router-link-exact-active {
  color: var(--q-text-active);
}
</style>
