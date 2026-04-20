import { defineStore } from "pinia";

import {
  UpdateUserRequest,
  User,
  UserRequest,
  UserResponse,
} from "../model/userResponse";
import router from "../router";
import { StorageKeys } from "../types/localStorageType";
import {
  getStorageData,
  removeStorageData,
  setStorageData,
} from "../utils/capacitor/localstorage";
//import { isObjectNotEmpty } from "../utils/helperUtils";
import apiClient from "../api/apiClient";
import { useDeviceStore } from "./device";
import { RegisterDeviceRequest } from "../model/deviceResponse";
import { Device } from "@capacitor/device";
import { isApp } from "../utils/capacitor";
import { useOutletStore } from "./outlet";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
    user: {} as User,
    phoneNo: "",
    isLogin: false,
    token: "",
    otpMethod: "sms" as "sms" | "whatsapp",
  }),
  actions: {
    async sendOTP(phoneNo: string): Promise<UserResponse | undefined> {
      const userRequest: any = {
        phoneNo,
      };

      try {
        const response = await apiClient.post("/sendOTP.php", userRequest);
        // console.log("success send OTP");
        // console.log("response.data", response.data);
        return response.data as UserResponse;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },

    async sendWhatsappOTP(phoneNo: string): Promise<UserResponse | undefined> {
      const userRequest: any = {
        phoneNo,
      };

      try {
        const response = await apiClient.post(
          "/sendWhatsappOTP.php",
          userRequest,
        );
        // console.log("success send OTP");
        // console.log("response.data", response.data);
        return response.data as UserResponse;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },

    async verifyOTP(
      phoneNo: string,
      otpCode: string,
    ): Promise<UserResponse | undefined> {
      const userRequest: any = {
        phoneNo,
        otpCode,
      };
      try {
        const response = await apiClient.post("/verifyOTP.php", userRequest);
        // console.log("success verify OTP");
        // console.log("response.data", response.data);

        if (response.data.results.token) {
          this.setUserLocalStorage(response.data.results.token);
        }
        return response.data as UserResponse;
      } catch (error) {
        console.log("error: ", error);
        return undefined;
      }
    },

    async register(user: UserRequest): Promise<UserResponse | undefined> {
      try {
        const response = await apiClient.post("/register.php", user);
        // console.log("success register user");
        // console.log("response.data", response.data);

        if (response.data.results.token) {
          this.setUserLocalStorage(response.data.results.token);
        }
        return response.data as UserResponse;
      } catch (error) {
        console.log("error: ", error);
        return undefined;
      }
    },

    async logOut() {
      this.clearStorage();

      // Clear outlet and order data
      const outletStore = useOutletStore();
      outletStore.setSelectedOutlet(null);

      router.push({ name: "Home" });
    },

    async clearStorage() {
      this.isLogin = false;
      this.token = "";
      this.user = {} as User;
      removeStorageData(StorageKeys.CurrentUser);
    },

    async loadUser() {
      const storedUser = await getStorageData(StorageKeys.CurrentUser);
      if (storedUser) {
        this.isLogin = true;
        this.token = JSON.parse(storedUser);
      }
    },

    async setUserLocalStorage(token: any) {
      setStorageData(StorageKeys.CurrentUser, JSON.stringify(token));
      this.token = token;
      this.isLogin = true;

      try {
        const user = await this.getUser();

        const deviceStore = useDeviceStore();
        const deviceId = await Device.getId();
        const deviceInfo = await Device.getInfo();
        const updateUserIdRequest: RegisterDeviceRequest = {
          deviceUuid: deviceId.identifier,
          userId: user.userId,
          deviceType: deviceInfo.platform, // 'ios' or 'android',
        };

        if (isApp) {
          await deviceStore.updateUserId(updateUserIdRequest);
        }
      } catch (error) {
        console.error("Error updating device with userId:", error);
      }
    },

    async getUser(): Promise<User> {
      try {
        // if (isObjectNotEmpty(this.user)) {
        //   return this.user;
        // }

        const response = await apiClient.get("/users.php", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        // console.log("success get");
        // console.log(response.data.results[0]);
        response.data.results.map((user: User) => {
          if (user.avatar && user.avatar != "") {
            const updatedUrl = user.avatar.replace(
              "https://365bakerygroup.com",
              "https://uploads.365bakerygroup.com",
            );
            user.avatar = updatedUrl;
          }
        });
        this.user = response.data.results[0];
        return this.user;
      } catch (error) {
        this.clearStorage();
        // router.push({ name: "Home" });
        console.log("error: ", error);
        throw error;
      }
    },
    async updateProfile(req: UpdateUserRequest): Promise<User> {
      try {
        const formData = new FormData();
        const { avatar, ...form } = req;
        if (avatar) {
          formData.append("avatar", avatar);
        }
        formData.append("data", JSON.stringify(form));

        const response = await apiClient.post("/users.php", formData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.user = response.data.results[0];
        return this.user;
        // return response.data as User;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
    async deleteAccount(): Promise<void> {
      try {
        await apiClient.post("/deleteaccount.php", null, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        this.logOut();
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
    async setLanguage(language: string): Promise<void> {
      try {
        await apiClient.post(
          "/setlanguage.php",
          { language },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
  },
});
