<template>
    <q-btn
      :icon="appendIcon"
      :class="inputClass"
      class="btn"
      :type="type"
      :icon-right="prependIcon"
      :label="label"
    />
  </template>
  
  <script setup>
  defineProps(["type", "inputClass", "label", "appendIcon", "prependIcon"]);
  </script>
  
  <style>
  .btn {
    font-family: "Inter", sans-serif!important;
    background: var(--q-text-active)!important;
    color: var(--q-app-bg)!important;
    text-transform: capitalize!important;
    border-radius: 8px!important;
    font-size: 12px!important;
    width: 100%!important;
    height: 50px!important;
  }
  </style>