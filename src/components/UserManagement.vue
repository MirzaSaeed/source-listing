<!-- components/UserManagement.vue -->
<template>
  <div class="user-management">
    <!-- Header Section -->
    <div class="header-section">
      <div class="all-users-title">All Users</div>
      <q-btn
        class="create-user-button"
        @click="showModal = true"
        style="
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          font-size: 13px;
          line-height: 16px;
        "
      >
        <img
          src="../assets/icons/Add user icon.png"
          alt="Add User"
          class="button-icon"
        />
        <span class="create-user-button-text">Create New User</span>
      </q-btn>
    </div>

    <!-- Modal (Dialog) for creating a new user -->
    <q-dialog v-model="showModal" persistent>
      <q-card style="width: 404px">
        <q-card-section class="row items-center q-pb-none">
          <div class="modal-title">Create User</div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            class="custom-close-btn"
            @click="
              resetForm();
              showModal = false;
            "
          />
        </q-card-section>

        <q-card-section>
          <!-- Full Name Heading and Input -->
          <div class="input-wrapper">
            <div class="field-heading">Full Name</div>
            <q-input
              style="
                border: 2px solid var(--q-app-secondary);
                height: 44px;
                border-radius: 4px;
                padding-left: 20px;
              "
              borderless
              v-model="userForm.userName"
              placeholder="Enter Full Name"
              dense
              bordered
              :error="isFullNameError"
              :error-message="''"
              no-error-icon
              @blur="validateInputs"
            />
            <div v-if="isFullNameError" class="error-message">
              Please enter the full name
            </div>
          </div>

          <!-- Email Address Heading and Input -->
          <div class="input-wrapper">
            <div class="field-heading">Email Address</div>
            <q-input
              style="
                border: 2px solid var(--q-app-secondary);
                height: 44px;
                border-radius: 4px;
                padding-left: 20px;
              "
              borderless
              v-model="userForm.email"
              placeholder="Enter Email Address"
              type="email"
              dense
              bordered
              :error="isEmailError"
              :error-message="''"
              no-error-icon
              @blur="validateInputs"
            />
            <!-- Conditional rendering based on the actual email error state -->
            <div v-if="isEmailError" class="error-message">
              Please enter an email address
            </div>
          </div>

          <!-- Password Heading and Input -->
          <div class="input-wrapper">
            <div class="field-heading">Password</div>
            <q-input
              style="
                border: 2px solid var(--q-app-secondary);
                height: 44px;
                border-radius: 4px;
                padding-left: 20px;
              "
              borderless
              v-model="userForm.password"
              placeholder="Enter Password"
              type="password"
              dense
              bordered
              :error="isPasswordError"
              :error-message="''"
              no-error-icon
              @blur="validateInputs"
            />
            <div v-if="isPasswordError" class="error-message">
              Password must be atleast 8 characters
            </div>
          </div>

          <!-- Role Selection Heading and Select -->
          <!-- <div class="field-heading">Select Role</div>
          <q-select
            style="
              border: 2px solid var(--q-app-secondary);
              height: 44px;
              border-radius: 4px;
              padding-left: 20px;
            "
            borderless
            v-model="userForm.role"
            placeholder="Select Role"
            :options="roleOptions"
            dense
            bordered
            :rules="[(val) => val !== null || 'Please select a role']"
            class="custom-dropdown"
          /> -->
        </q-card-section>

        <q-card-actions
          style="
            padding-top: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
          "
          align="right"
        >
          <q-btn
            flat
            style="
              font-family: 'Lato', sans-serif;
              font-weight: 600;
              font-size: 13px;
              line-height: 16px;
              width: 90px;
              height: 34px;
              color: var(--q-btn-modal-text);
              background-color: var(--q-btn-modal);
            "
            @click="createUser"
          >
            <span class="create-user-button-text">Create</span>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";
import {
  QBtn,
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QSelect,
  QSpace,
} from "quasar";
import { postRequest } from "@/helper/http-config";

const isFullNameError = ref(false);
const isEmailError = ref(false);
const isPasswordError = ref(false);

const validateInputs = () => {
  // Update this to include your actual email validation logic
  isFullNameError.value =
    !userForm.value.userName || userForm.value.userName.length === 0;
  isEmailError.value =
    !userForm.value.email || userForm.value.email.length === 0;
  isPasswordError.value =
    !userForm.value.password || userForm.value.password.length < 8;
};

const resetForm = () => {
  userForm.value = {
    userName: "",
    email: "",
    password: "",
    // role: null, // Uncomment this if you have a role field
  };
  // Reset the error states as well
  isFullNameError.value = false;
  isEmailError.value = false;
  isPasswordError.value = false;
};

const showModal = ref(false);
const userForm = ref({
  userName: "",
  email: "",
  // role: null,
  password: "",
});
const roleOptions = ["Admin", "Super Admin", "Merchant", "Agent"];

const createUser = async () => {
  console.log("Creating user:", userForm.value);
  try {
    const response = await postRequest("/api/user/create-user", userForm.value);
    console.log("User created:", response.data);

    resetForm();
  } catch (error) {
    console.error("Error creating user:", error);
  }
  showModal.value = false;
};
</script>
    
    <style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px; /* Adjust the padding as needed */
}

.all-users-title {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px; /* Adjust the size as needed */
  line-height: 19.2px;
  color: var(--q-text-heading);
}
.create-user-button-text {
  text-transform: capitalize; /* Only the first letter of each word is uppercase */
}
.error-message {
  height: 20px;
  color: red; /* Or any color you prefer */
  font-size: 0.85em; /* Adjust as needed */
  margin-top: 4px; /* Adjust as needed */
}
.input-wrapper {
  margin-bottom: 24px; /* Adjust as necessary to match your design */
  height: 70px; /* Fixed height to accommodate input and error message */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.custom-close-btn {
  padding: 0px;
  font-size: 11px;
  line-height: 1;
}
.q-field[data-v-985ecd00] .q-field__inner:deep {
  border: 2px solid var(--q-app-secondary);
  padding: 0 0px 0 0px;
  border-radius: 8px;
  background: white;
  color: var(--q-text-color) !important;
}
.field-heading {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15.6px;
  color: var(--q-text-heading);
  margin-bottom: 8px;
  margin-top: 8px;
}

.user-management {
  position: relative;
}

.create-user-modal {
  width: 404px;
  height: 397px;
}

.create-user-button {
  position: absolute;
  top: 20px; /* Adjust as necessary */
  right: 20px; /* Adjust as necessary */
  width: 160px;
  height: 34px;
  border-radius: 6px;
  background-color: var(--q-btn-bg);
  color: var(--q-btn-text); /* Assuming you want the text to be white */
  display: flex;
  align-items: center;
  justify-content: center;
}

.q-btn {
  padding: 0px;
}

.button-icon {
  width: 13.37px;
  height: 13px;
  margin-right: 8px;
}

.modal-title {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #484964;
}

.q-my-md {
  margin-top: 0px;
  margin-bottom: 0px;
  height: 80px;
}

.custom-select:deep {
  height: 60px;
}

.custom-option {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15.6px;
  color: #484964;
  padding: 10px;
  margin: 10px;
  /* border-bottom: 1px solid #e0e0e0;  */
}
</style>
    