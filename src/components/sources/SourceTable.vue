<template>
  <q-table
    dense
    flat
    title="Treats"
    rows="rows"
    class="table"
    columns="columns"
    row-key="name"
    virtual-scroll
    separator="cell"
  >
    <template v-slot:top>
      <q-input
        borderless
        dense
        debounce="300"
        color="primary"
        label="Search By User Name"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-space />
      <q-btn color="primary" label="Add row" />
      <q-btn class="q-ml-sm" color="primary" label="Remove row" />
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="sourceName" auto-width :props="props">
          {{ props.row.sourceName }}
        </q-td>
        <q-td key="sourceURL" auto-width :props="props">
          {{ props.row.sourceURL }}
        </q-td>
        <q-td key="country" auto-width :props="props">
          {{ props.row.country }}
        </q-td>
        <q-td key="coverage" auto-width :props="props">
          {{ props.row.coverage }}
        </q-td>
        <q-td key="type" auto-width :props="props">
          {{ props.row.type }}
        </q-td>
        <q-td key="category" auto-width :props="props">
          {{ props.row.category }}
        </q-td>
        <q-td key="language" auto-width :props="props">
          {{ props.row.language }}
        </q-td>
        <q-td key="format" auto-width :props="props">
          {{ props.row.format }}
        </q-td>
        <q-td key="comment" auto-width :props="props">
          {{ props.row.comment }}
        </q-td>
        <q-td key="cost" auto-width :props="props">
          {{ props.row.cost }}
        </q-td>
        <q-td key="keyMapping" auto-width :props="props">
          {{ props.row.keyMapping }}
        </q-td>
        <q-td key="integrations" auto-width :props="props">
          <q-checkbox dense class="checkbox" v-model="props.row.integrations" />
        </q-td>
        <q-td key="techComments" auto-width :props="props">
          {{ props.row.techComments }}
        </q-td>
        <q-td key="integrationStatus" auto-width :props="props">
          {{ props.row.integrationStatus }}
        </q-td>
        <q-td key="lastUpdatedBy" auto-width :props="props">
          {{ props.row.lastUpdatedBy }}
        </q-td>
        <q-td key="updatedAt" auto-width :props="props">
          {{ props.row.updatedAt }}
        </q-td>
        <q-td key="createdAt" auto-width :props="props">
          {{ props.row.createdAt }}
        </q-td>
        <!-- <q-td key="editSource" :props="props">
          {{ props.row.editSource }}
        </q-td>
        <q-td key="clickUpTasks" :props="props">
          {{ props.row.clickUpTasks }}
        </q-td> -->
        <q-td key="actions" auto-width :props="props">
          <q-btn
            flat
            round
            color="white"
            text-color="black"
            toggleUser="true"
            size="sm"
            class="nav-link"
          >
            <img src="@/assets/icons/pen.png" alt="" />
            <q-tooltip
              transition-show="scale"
              style="
                background: var(--q-text-active);
                font-size: 11px;
                font-weight: 600;
                font-family: 'Lato', sans-serif;
              "
              transition-hide="scale"
            >
              Edit Detail
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            color="white"
            text-color="black"
            toggleUser="true"
            size="sm"
            class="nav-link"
          >
            <img src="@/assets/icons/Eye.png" alt="" />
            <q-tooltip
              transition-show="scale"
              style="
                background: var(--q-text-active);
                font-size: 11px;
                font-weight: 600;
                font-family: 'Lato', sans-serif;
              "
              transition-hide="scale"
            >
              View Detail
            </q-tooltip>
          </q-btn>
        </q-td>
        <!-- <q-td key="calcium" :props="props">
          {{ props.row.calcium }}
        </q-td>
        <q-td key="iron" :props="props">
          {{ props.row.iron }}
        </q-td> -->
      </q-tr>
    </template>

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

.q-table__container :deep(.q-table__middle table tbody tr td:last-child) {
  position: sticky;
  right: 0;
  background-color: var(--q-white);
}
.q-table__container :deep(.q-table__middle table thead tr th:last-child) {
  position: sticky;
  right: 0;
  background-color: var(--q-white);
}
</style>
