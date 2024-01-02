<template>
  <q-table
    flat
    :dense="$q.screen.xs"
    rows="rows"
    class="table"
    columns="columns"
    row-key="name"
    virtual-scroll
    separator="cell"
  >
    <template v-slot:pagination="scope">
      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.prevPage"
      />

      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.nextPage"
      />
    </template>
  </q-table>
</template>

<script setup>
defineProps(["columns, rows, pagination"]);
</script>

<style scoped>

</style>
