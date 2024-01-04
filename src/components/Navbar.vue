<template>
  <div class="navbar">
    <!-- Logo and Hamburger Menu Icon for Mobile -->
    <div class="row align-center">
      <q-btn
        icon="menu"
        flat
        @click="toggleMenu"
        class="hamburger"
        v-show="isMobile"
      />

      <q-img
        src="../assets/images/Vector4x.png"
        class="logo"
        style="width: 25.97px; height: 24.09px; margin-right: 8px"
      />
      <div class="navbar-heading">AML Scanner</div>
    </div>

    <!-- Navbar Items -->
    <div :class="{ 'navbar-items': true, show: menuOpen }">
      <!-- Mobile View: User Image -->
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          width: 100%;
        "
      >
        <img
          style="margin-bottom: 10px"
          src="../assets/images/user-image.png"
          alt="User Image"
          class="user-image mobile-user-image"
          v-show="isMobile"
        />

        <span class="mobile-user-name">{{ authStore.user?.UserName || 'Guest' }}</span>
      </div>

      <router-link
        to="/sources"
        class="navbar-item"
        active-class="navbar-item-active"
        >Sources</router-link
      >
      <router-link
        to="/dashboard/user-management"
        class="navbar-item"
        active-class="navbar-item-active"
        >User Management</router-link
      >
      <router-link
        to="/activity-logs"
        class="navbar-item"
        active-class="navbar-item-active"
        >Activity Logs</router-link
      >

      <!-- Mobile View: Dropdown Options -->
      <!-- <div class="mobile-dropdown-options" v-show="isMobile">
        <q-item clickable v-close-popup @click="logout" class="navbar-item">
          <q-icon name="vpn_key" class="menu-icon"></q-icon>
          <span>Logout</span>
        </q-item>
      </div> -->

      <!-- Mobile View: User Dropdown -->
      <div class="mobile-dropdown-container" v-show="isMobile">
        <!-- <img
          src="../assets/images/user-image.png"
          alt="User Image"
          class="user-image"
        /> -->
        <q-btn class="navbar-user" @click="toggleDropdown" flat>
          <span class="user-name" style="font-size: 10px">{{ authStore.user?.UserName || 'Guest' }}</span>
          <q-icon name="arrow_drop_down" class="dropdown-icon"></q-icon>
        </q-btn>
        <q-menu  v-model="dropdownOpen">
          <q-list >
            <q-item class="extra-mobile-logout" clickable v-close-popup @click="logout">
              <q-icon
                name="vpn_key"
                class="menu-icon"
                style="margin-right: 8px"
              ></q-icon>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>

    <q-space></q-space>

    <!-- User Dropdown -->
    <div class="dropdown-container">
      <img
        src="../assets/images/user-image.png"
        alt="User Image"
        class="user-image"
      />
      <q-btn class="navbar-user" @click="toggleDropdown" flat>
        <span class="user-name" style="font-size: 10px">{{ authStore.user?.UserName || 'Guest' }}</span>
        <q-icon name="arrow_drop_down" class="dropdown-icon"></q-icon>
      </q-btn>
      <q-menu v-model="dropdownOpen" anchor="bottom right" self="top right">
        <q-list>
          <q-item class="mobile-logout" clickable v-close-popup @click="logout">
            <q-icon
              name="vpn_key"
              class="menu-icon"
              style="margin-right: 8px"
            ></q-icon>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, watch } from "vue";
import { QBtn, QIcon, QMenu, QList, QItem, QItemSection } from "quasar";
import { useRouter } from "vue-router";
import { Notify } from "quasar";
import { useAuthStore } from "@/store/auth-store";

// State for dropdown and menu
const dropdownOpen = ref(false);
const menuOpen = ref(false);
const isMobile = ref(window.innerWidth < 950);

const authStore = useAuthStore();
const router = useRouter();

console.log(authStore.user);

// Toggles the dropdown menu
const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdownOpen.value = !dropdownOpen.value;
};

// Toggles the mobile navbar menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Logout function
const logout = async () => {
  await authStore.handleLogout();
  dropdownOpen.value = false;
  router.push({ name: "login" });
};

// Watch for window resize to update isMobile
onMounted(() => {
  const handleResize = () => {
    isMobile.value = window.innerWidth < 950;
  };

  window.addEventListener("resize", handleResize);

  // Cleanup event listener on component unmount
  watch(
    () => isMobile.value,
    () => {
      window.removeEventListener("resize", handleResize);
    }
  );
});
</script>



<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--q-app-bg);
  padding: 0 20px;
  height: 35px;
}

.dropdown-container {
  /* margin-right: 20px; */
  display: flex;
  align-items: center;
}

.row.align-center {
  display: flex;
  align-items: center;
}

.logo {
  width: 25.97px;
  height: 24.09px;
  margin-right: 8px;
}

.hamburger {
  display: none;
}

.navbar-heading {
  font-weight: 600;
  font-size: 18.15px;
  line-height: 21.78px;
  color: var(--q-app-logo-text);
  margin-left: 10px;
}

.navbar-item {
  font-family: Lato, sans-serif;
  font-size: 13px;
  margin-right: 20px;
  padding: 10px 15px;
  text-decoration: none;
  color: var(--q-text-color);
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
}

.navbar-item-active,
.navbar-item:hover {
  color: var(--q-text-active);
  font-weight: 700;
}

.navbar-user {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  /* font-size: 12px; */
}

.user-image {
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin-right: 8px;
}

.user-name {
  font-family: Lato, sans-serif;
  font-weight: 500;
  margin-right: 8px;
  font-size: 11.5px;
  color: var(--q-text-color);
}

.dropdown-icon {
  font-size: 24px;
  color: var(--q-text-color);
}

.q-menu {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.q-item {
  cursor: pointer;
  width: 120px;
  height: 24px;
  align-items: center;
}

.q-item:hover {
  background-color: #f9f9f9;
  color: black;
}

.mobile-user-image {
  display: none; /* Initially hidden, will be shown only in mobile view */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 8px;
}

.mobile-user-name {
  display: none;
  font-size: 14px; /* Adjust as needed */
  color: var(--q-text-color);
  /* Add additional styling as needed */
}

.mobile-dropdown-options {
  display: none; /* Initially hidden */
}

.mobile-dropdown-container{
  display: none;
}

.extra-mobile-logout{
    display: none;
  }


/* Responsive Design */
@media (max-width: 950px) {
  .hamburger {
    display: block;
    padding-left: 0px;
    color: var(--q-text-color);
  }

  .mobile-logout{
    display: none;

  }

  .extra-mobile-logout{
    display: flex;
    flex-direction: row;
    
  }

  .navbar-items,
  .dropdown-container {
    display: none;
  }

  .navbar-items.show {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--q-app-bg);
    width: 218px;
    height: 100vh;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .navbar-item[data-v-41458b80] {
    margin: 0px 0;
}

  .navbar-item {
    margin: 10px 0;
  }

  .mobile-user-image {
    display: block; /* Show the user image in mobile view */
  }

  .mobile-dropdown-options {
    display: block; /* Show dropdown options in mobile view */
    /* padding: 10px; */
  }

  .mobile-dropdown-container{
  display: block;
  padding: 10px 15px;
}
  .mobile-user-name {
    display: block;
    font-size: 14px; /* Adjust as needed */
    color: var(--q-text-color);
    /* Add additional styling as needed */
  }
}


</style>


