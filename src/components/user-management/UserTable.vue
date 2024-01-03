<template>
  <q-table
    dense
    flat
    title="Treats"
    :rows="row" 
    class="table"
    :columns="columns"
    row-key="name"
    style="max-height: 620px; height: 100%"
    virtual-scroll
    :loading="loading"
    :pagination="pagination"
    :filter="filter"
    separator="cell"
  >
    <template v-slot:top>
      <q-input
        borderless
        dense
        debounce="300"
        color="primary"
        v-model="filter"
        label="Search By User Name"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-space />
      <q-btn
        color="primary"
        flat
        class="q-ma-xs text"
        @click="addRow"
        text-color="var(--q-text-active)"
      >
        <img :src="leftIcon" alt="Left Icon" class="q-mr-sm icons" />
        Select Role
        <img :src="rightIcon" alt="Right Icon" class="q-ml-sm icon" />
      </q-btn>

      <q-btn
        class="q-ml-sm text"
        color="primary"
        flat
        @click="removeRow"
      >
        <img :src="leftIcon2" alt="Left Icon" class="q-mr-sm icons" />
        Select Date Range
        <img :src="rightIcon2" alt="Right Icon" class="q-ml-sm icon" />
      </q-btn>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.full_name }}
        </q-td>
        <q-td key="email" :props="props">
          {{ props.row.email }}
        </q-td>
        <q-td key="role" :props="props">
          {{ props.row.role }}
        </q-td>
        <q-td key="createdBy" :props="props">
          {{ props.row.created_by }}
        </q-td>
        <q-td key="currentStatus" :props="props">
          {{ props.row.is_active }}
        </q-td>

        <q-td key="actions" :props="props">
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
          <!-- 
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
          -->
        </q-td>
      </q-tr>
    </template>

    <!--Pagination-->

    <template v-slot:pagination="">
      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="
          users?.pagination?.hasPrevPage === false ? true : false || loading
        "
        @click="handlePage(page - 1)"
      />

      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="
          users?.pagination?.hasNextPage === false ? true : false || loading
        "
        @click="handlePage(page + 1)"
      />
    </template>
  </q-table>
</template>

<script setup>
import { defineProps, ref, onMounted, watchEffect } from "vue";
const filter = ref("");

const page = ref(1);

const leftIcon = ref(require("@/assets/icons/user-opt.png"));
const rightIcon = ref(require("@/assets/icons/vector.png"));
const leftIcon2 = ref(require("@/assets/icons/Calendar.png"));
const rightIcon2 = ref(require("@/assets/icons/vector.png"));

const addRow = () => {
  // Your logic for adding a row
};

const removeRow = () => {
  // Your logic for removing a row
};
// const pagination = ref({
//   sortBy: "desc",
//   descending: false,
//   page: userStore.state.page,
//   rowsPerPage: 15,
// });

// const handlePage = (pageNumber) => {
//   page.value = pageNumber;
//   userStore.fetchUsers(page.value, filter.value);
// };

// const handleFilterChange = (value) => {
//   filter.value = value;
//   userStore.fetchUsers(page.value, filter.value);
// };

// watchEffect(() => {
//   userStore.fetchUsers(page.value, filter.value);
// });

// onMounted(() => {
//   userStore.fetchUsers(page.value, filter.value);
// });
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid var(--q--table-border);
  font-family: "Lato", sans-serif;
  border-radius: 8px;
}

.q-table__container :deep(.q-table__middle table thead tr th) {
  line-height: 15.6px;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  font-weight: 700 !important;
  color: var(--q--text-heading);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
}
.icons {
  width: 12px;
  height: 15px;
}
.icon {
  width: 8.33px;
  height: 5px;
}

.q-table__container :deep(.q-table__middle table tbody tr td) {
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  line-height: 14.4px;
  color: var(--q--text-heading);
}

.text {
  font-size: 12px;
  font-weight: 600;
}

.q-btn {
  text-transform: none;
}
.q-btn__content :deep(text) {
  color: var(--q-text-active);
}
</style>
