<template>
  <q-table
    flat
    rows="rows"
    :dense="$q.screen.xs"
    class="table"
    columns="columns"
    row-key="name"
    virtual-scroll
    separator="cell"
  >
    <template v-slot:header="props">
      <q-tr>
        <q-th rowspan="2" :props="props" key="regions">Regions</q-th>
        <q-th rowspan="2" :props="props" key="total">Total</q-th>
        <q-th colspan="2" style="text-align: center">Official</q-th>
        <q-th colspan="2" style="text-align: center">Unofficial</q-th>
      </q-tr>
      <q-tr>
        <q-th
          :props="props"
          style="border-left: 1px solid var(--q-table-border)"
          key="officialFree"
          >Free</q-th
        >
        <q-th :props="props" key="officialPaid">Paid</q-th>
        <q-th :props="props" key="unOfficialFree">Free</q-th>
        <q-th :props="props" key="unOfficialPaid">Paid</q-th>
      </q-tr>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="regions" auto-width :props="props">
          {{ props.row.region }}
        </q-td>
        <q-td key="total" auto-width :props="props">
          {{ props.row.total }}
        </q-td>
        <q-td key="officialFree" auto-width :props="props">
          {{ props.row.officialFree }}
        </q-td>
        <q-td key="officialPaid" auto-width :props="props">
          {{ props.row.officialPaid }}
        </q-td>
        <q-td key="unOfficialFree" auto-width :props="props">
          {{ props.row.unOfficialFree }}
        </q-td>
        <q-td key="unOfficialPaid" auto-width :props="props">
          {{ props.row.unOfficialPaid }}
        </q-td>
      </q-tr>
    </template>

    <!-- <template v-slot:pagination="scope">
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
    </template> -->
  </q-table>
</template>

<script setup>
defineProps(["columns, rows, pagination"]);
</script>

<style scoped>

</style>
