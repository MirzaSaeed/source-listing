<template>
  <div class="body">
    <q-page class="flex flex-column items-center justify-center">
      <div class="flex visible-content flex-column justify-center">
        <div class="q-mb-md row">
          <div class="flex justify-center col">
            <img
              src="@/assets/images/frame.png"
              class="q-mr-sm"
              style="width: 41px; height: 38px"
              alt="Custom Icon"
            />
            <p class="header">Researcher Portal</p>
          </div>
        </div>
        <div class="q-pa-md login-card">
          <div class="text-h5 text-center q-mb-md">Account Login</div>
          <div class="text-subtitle2 q-mb-md">
            Enter your credentials to log in to your account
          </div>
          <q-form @submit.prevent="onSubmit" class="form-control">
            <InputField
              borderless
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please enter an email address',
              ]"
              v-model="email"
              label="Enter Email Address"
              class="q-mb-md"
              appendIcon=""
              prependIcon="email"
              type="email"
            />

            <q-input
              v-model="password"
              borderless
              label="Enter Password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter a password',
              ]"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:label>
                <div class="label">Enter Password</div>
              </template>
              <template v-slot:prepend>
                <q-icon name="key" class="icon-color" />
              </template>
              <template v-slot:append>
                <q-icon
                  class="icon-color cursor-pointer"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  size="1.25rem"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="flex justify-between q-mb-md">
              <span class="flex item-center">
                <input type="checkbox" v-model="rememberMe" class="q-mr-sm" />
                <span class="q-mr-xl">Remember me</span>
              </span>
              <span class="q-link" @click="navigateToForgotPassword">
                Forgot Password?
              </span>
            </div>
            <Button style="max-width: 465px" type="submit" label="Login" />
          </q-form>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth-store.js";

const authStore = useAuthStore();

const router = useRouter();

const email = ref("");
const password = ref("");
const isPwd = ref(true);
const rememberMe = ref(false);

const onSubmit = async () => {
  await authStore.handleLogin({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
};
const navigateToForgotPassword = () => {
  router.push("/forgot-password");
};
</script>

<style scoped>
.body {
  background-image: url("@/assets/images/login.jpeg");
  background-size: cover;
  background-position: top;
}
.q-link {
  text-decoration: none;
  color: var(--q-btn-text);
  cursor: pointer;
}

.top-content {
  text-align: center;
}
.header {
  font-family: "Lato", sans-serif !important;
  color: #323346;
  font-weight: 600;
  font-size: 28.15px;
}
.icon {
  width: 41px;
  height: 38px;
}

.top-content q-col {
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  max-width: 464px;
  margin-bottom: 0;
}
.login-card {
  background-color: white;
  max-width: 599px;
  width: 100%;
  height: 448px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-h5 {
  font-family: "Inter", sans-serif !important;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 20px;
  color: var(--q-text-heading);
}

.text-subtitle2 {
  font-family: "Inter", sans-serif !important;
  font-weight: 400px;
  font-size: 13px;
  line-height: 15.73px;
  color: var(--q-faded-text);
}
.q-field:deep(.q-field__inner) {
  border: 2px solid var(--q-app-secondary);
  padding: 0 20px 0 20px;
  border-radius: 8px;
  background: white;
  color: var(--q-text-color) !important;
}
.label {
  color: var(--q-text-color) !important;
}
.icon-color {
  color: var(--q-icon-color);
}
@media (max-width: 631px) {
  .login-card {
    background-color: white;
    width: 100%;
    height: 428px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(146, 145, 145, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
  }
  .visible-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.2s;
    max-width: 350px;
    width: 100%;
  }
}
ror-message {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.q-field:deep(
    .q-field__inner .q-field__control .q-field__append .text-negative
  ) {
  display: none;
}
</style>