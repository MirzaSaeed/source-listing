import { defineStore } from "pinia";
import { getRequest } from "@/helper/http-config";

export const useUserStore = defineStore("useUserStore", {
  state: () => {
    return {
      users: [],
      page: 1,
      filter: "",
      loading: false,
    };
  },
  actions: {
    async fetchUsers(page, filter) {
      try {
        this.loading = true;

        const response = await getRequest(
          `api/user/get-user?page=${page}&search=${filter}`
        );
        const responseData = response.data;
        console.log(response);
        const userData = responseData?.data?.users;

        this.users = userData;
        this.page = responseData?.data?.currentPage;
      } catch (err) {
        console.error("Error in fetchUsers:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
