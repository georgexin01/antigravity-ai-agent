import { computed } from "vue";
import { Clipboard } from "@capacitor/clipboard";
import { Share } from "@capacitor/share";
import { toast } from "vue3-toastify";
import { getApiBaseUrl } from "../api/apiClient";

export function useInviteLink(phoneNo: () => string | undefined) {
  const inviteLink = computed(() => {
    const phone = phoneNo();
    if (phone) {
      return getApiBaseUrl("/invite?phoneNo=") + phone;
    }
    return "";
  });

  const copyInviteLink = async () => {
    await Clipboard.write({ string: inviteLink.value });
    toast.success("Text copied to clipboard!");
  };

  const shareInviteLink = async () => {
    await Share.share({
      title: "Join 365 Bakery Today!",
      text: "Join 365 Bakery Today!\n",
      url: inviteLink.value,
    });
  };

  return { inviteLink, copyInviteLink, shareInviteLink };
}
