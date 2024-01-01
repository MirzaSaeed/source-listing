<template>
  <div class="navbar">
    <!-- Main horizontal navbar items -->
    <div class="row align-center">
      <q-img
        src="../assets/Vector4x.png"
        style="width: 25.97px; height: 24.09px; margin-right: 8px"
      />
      <div class="navbar-heading">AML Scanner</div>
    </div>

    <router-link to="/sources" class="navbar-item">Sources</router-link>

    <router-link to="/user-management" class="navbar-item"
      >User Management</router-link
    >
    <router-link to="/activity-logs" class="navbar-item"
      >Activity Logs</router-link
    >

    <q-space></q-space>

    <div class="dropdown-container">
      <!-- User button and dropdown menu -->
      <img src="../assets/user-image.png" alt="User Image" class="user-image" />
      <q-btn class="navbar-user" @click="toggleDropdown" flat>
        <span class="user-name">Colin Aranda</span>
        <q-icon name="arrow_drop_down" class="dropdown-icon"></q-icon>
      </q-btn>
      <q-menu v-model="dropdownOpen" anchor="bottom right" self="top right">
        <q-list>
          <q-item clickable v-close-popup @click="logout">
            <q-icon name="vpn_key" class="menu-icon"></q-icon>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { QBtn, QIcon, QMenu, QList, QItem, QItemSection } from "quasar";
import { useRouter } from "vue-router";
import { Notify } from "quasar";
import { useAuthStore } from "@/store/auth-store";

const authStore = useAuthStore();

const dropdownOpen = ref(false);

const router = useRouter();

const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdownOpen.value = !dropdownOpen.value;
};

const logout = async () => {
  await authStore.handleLogout();
  dropdownOpen.value = false;
};
</script>


<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: start;
  background: #f9f9fc;
  padding-left: 20px;
  padding-bottom: 3px;
  padding-top: 3px;
}

.row.align-center {
  display: flex;
  align-items: center;
}

.q-img,
.navbar-heading,
.navbar-item,
.navbar-user {
  display: flex;
  align-items: center;
  /* margin-right: 20px; */
  padding: 5px;
}

.navbar-heading {
  margin-right: 20px;
  font-weight: bold;
}

.navbar-item {
  height: 34px;
  font-size: 13px;
  margin-right: 20px;
  padding: 10px 15px;
  text-decoration: none;
  color: #40415a;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
}

.navbar-item:hover {
  /* background-color: #e3e3ff; */
  color: #5d5fec;
  font-weight: 700;
}

.navbar-user {
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 120px;
}

.navbar-heading {
  font-weight: 600;
  font-size: 18.15px;
  line-height: 21.78px;
  color: #323346;
  margin-left: 10px;
  margin-right: 10px;
}

.user-image {
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin-right: 8px;
}

.user-name {
  font-weight: 500;
  margin-right: 8px;
  font-size: 13px;
}

.user-name :deep {
  font-size: 10px;
  margin: 0px;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}

.q-menu {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  top: 50px !important;
}

/* .q-menu:hover {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
} */

.q-item {
  /* padding: 12px 20px; */
  cursor: pointer;
  width: 120px;
  height: 24px;
}

.q-item:hover {
  background-color: #f9f9f9;
  color: black;
}

/* .q-item[data-v-41458b80]:hover :deep {
  background-color: white; */
/* padding: 12px 20px;
  cursor: pointer;
  width: 100px;
} */

/* .q-item:hover :deep {
  background-color: white;
  color: #5d5fec;
} */

.dropdown-menu {
  display: none;
}

.dropdown-menu.show {
  display: block;
}

@media (max-width: 950px) {
  .navbar-items {
    display: none;
  }
}

.menu-icon {
  margin-right: 8px;
  font-size: 16px;
  align-self: center;
}

/* .q-item,
.q-item-type.row.no-wrap.q-item--clickable.q-link.cursor-pointer.q-focusable.q-hoverable {
  margin-right: 20px;
} */

.dropdown-container {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
</style>

