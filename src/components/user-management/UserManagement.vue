<template>
  <div class="q-pa-md">
    <UserTable :columns="columns" :rows="users" :loading="loading" :pagination="pagination" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watchEffect } from "vue";
import UserTable from "./UserTable.vue";
import { useUserStore } from "@/store/user-store";
const { users } = storeToRefs(useUserStore());
const { loading } = storeToRefs(useUserStore());
const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 15,
});
const columns = [
  {
    name: "name",
    align: "center",
    label: "Name",
    field: "name",
    sortable: true,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
    sortable: true,
  },
  /*{
    name: "role",
    align: "center",
    label: "Role",
    field: "role",
    sortable: true,
  },*/
  {
    name: "createdBy",
    align: "center",
    label: "Created By",
    field: "createdBy",
    sortable: true,
  },
  {
    name: "currentStatus",
    align: "center",
    label: "Current Status",
    field: "currentStatus",
    sortable: true,
  },
  {
    name: "actions",
    align: "center",
    label: "Actions",
    field: "actions",
    sortable: true,
  },
];
watchEffect(() => {
  useUserStore().fetchUsers(1, "");
});
</script>
