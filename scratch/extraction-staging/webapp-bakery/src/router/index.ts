import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useCartStore } from "../stores/cart";
import { useUserStore } from "../stores/user";
import HomeView from "../views/HomeView.vue";
import BannerDetailView from "../views/BannerDetailView.vue";
import { useNavigationStore } from "../stores/navigation";
import MenuView from "../views/MenuView.vue";
import ItemView from "../views/ItemView.vue";
import SearchView from "../views/SearchView.vue";
import CartView from "../views/CartView.vue";
import OrderHistoryView from "../views/OrderHistoryView.vue";
import AllOrdersView from "../views/AllOrdersView.vue";
import ActiveOrdersView from "../views/ActiveOrdersView.vue";
import PastOrdersView from "../views/PastOrdersView.vue";
import PaymentDoneView from "../views/PaymentDoneView.vue";
import InviteFriendsView from "../views/InviteFriendsView.vue";
import VouchersView from "../views/VouchersView.vue";
import ActiveVouchersView from "../views/ActiveVouchersView.vue";
import PastVouchersView from "../views/PastVouchersView.vue";
import RewardsView from "../views/RewardsView.vue";
import MissionsView from "../views/MissionsView.vue";
import RedeemRewardsView from "../views/RedeemRewardsView.vue";
import AccountView from "../views/AccountView.vue";
import EditProfileView from "../views/EditProfileView.vue";
import TierView from "../views/TierView.vue";
import SelectOutletView from "../views/SelectOutletView.vue";
import LoginView from "../views/LoginView.vue";
import OTPView from "../views/OTPView.vue";
import RedirectHandler from "../views/RedirectHandler.vue";
import SignUpView from "../views/SignUpView.vue";
import GiftView from "../views/GiftView.vue";
import DeliveryView from "../views/DeliveryView.vue";
import SmallBannerDetailView from "../views/SmallBannerDetailView.vue";
import PointTransactionView from "../views/PointTransactionView.vue";
import QRCodeView from "../views/QRCodeView.vue";
import NotificationDetailView from "../views/NotificationDetailView.vue";
import StampsView from "../views/StampsView.vue";
import StampTransactionView from "../views/StampTransactionView.vue";
import InviteLandingView from "../views/InviteLandingView.vue";
import OrderDetailView from "../views/OrderDetailView.vue";
import AddressView from "../views/AddressView.vue";
import PickLocationView from "../views/PickLocationView.vue";
import SetAddressView from "../views/SetAddressView.vue";
import VoucherDetailView from "../views/VoucherDetailView.vue";

const savedPositions: Record<string, number> = {};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/banner-detail/:bannerId",
    name: "BannerDetail",
    component: BannerDetailView,
    meta: {
      title: "Banner Detail",
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuView,
    meta: {
      title: "Menu",
    },
  },
  {
    path: "/item/:productId",
    name: "Item",
    component: ItemView,
    meta: {
      title: "Item",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
    meta: {
      title: "Search Menu",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
    meta: {
      title: "Order Confirmation",
    },
  },
  {
    path: "/orders",
    name: "OrderHistory",
    component: OrderHistoryView,
    meta: {
      title: "My Order",
      requiresAuth: true,
    },
    redirect: "/orders/active-orders",
    children: [
      {
        path: "all-orders",
        name: "AllOrders",
        component: AllOrdersView,
      },
      {
        path: "active-orders",
        name: "ActiveOrders",
        component: ActiveOrdersView,
      },
      {
        path: "past-orders",
        name: "PastOrders",
        component: PastOrdersView,
      },
    ],
  },
  {
    path: "/order-detail/:id",
    name: "OrderDetail",
    component: OrderDetailView,
    meta: {
      title: "Order Detail",
      requiresAuth: true,
    },
  },
  {
    path: "/payment-done",
    name: "PaymentDone",
    component: PaymentDoneView,
    meta: {
      title: "Payment Done",
    },
  },
  {
    path: "/vouchers",
    name: "Vouchers",
    component: VouchersView,
    meta: {
      title: "Voucher Wallet",
      requiresAuth: true,
    },
    redirect: "/vouchers/active-vouchers",
    children: [
      {
        path: "active-vouchers",
        name: "ActiveVouchers",
        component: ActiveVouchersView,
      },
      {
        path: "past-vouchers",
        name: "PastVouchers",
        component: PastVouchersView,
      },
    ],
  },
  {
    path: "/voucher-detail/:voucherId",
    name: "VoucherDetail",
    component: VoucherDetailView,
    meta: {
      title: "Vouche Detail",
    },
  },
  {
    path: "/gift",
    name: "Gift",
    component: GiftView,
    meta: {
      title: "Gift",
    },
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: DeliveryView,
    meta: {
      title: "Delivery",
    },
  },
  {
    path: "/invite-friends",
    name: "InviteFriends",
    component: InviteFriendsView,
    meta: {
      title: "Invite Friends",
      requiresAuth: true,
    },
  },
  {
    path: "/invite",
    name: "Invite",
    component: InviteLandingView,
    meta: {
      title: "Invite",
    },
  },
  {
    path: "/point-transactions",
    name: "PointTransaction",
    component: PointTransactionView,
    meta: {
      title: "Point Transactions",
      requiresAuth: true,
    },
  },
  {
    path: "/stamps",
    name: "Stamps",
    component: StampsView,
    meta: {
      title: "Stamps",
      requiresAuth: true,
    },
  },
  {
    path: "/stamp-transactions",
    name: "StampTransaction",
    component: StampTransactionView,
    meta: {
      title: "Stamp Transactions",
      requiresAuth: true,
    },
  },
  {
    path: "/qr-code",
    name: "QRCode",
    component: QRCodeView,
    meta: {
      title: "Membership QR Code",
      requiresAuth: true,
    },
  },
  {
    path: "/rewards",
    name: "Rewards",
    component: RewardsView,
    meta: {
      title: "Mission and Rewards",
      requiresAuth: true,
    },
    redirect: "/rewards/missions",
    children: [
      {
        path: "missions",
        name: "Missions",
        component: MissionsView,
      },
      {
        path: "redeem-rewards",
        name: "RedeemRewards",
        component: RedeemRewardsView,
      },
      // {
      //   path: "my-rewards",
      //   name: "MyRewards",
      //   component: () => import("../views/MyRewardsView.vue"),
      // },
    ],
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
    meta: {
      title: "Account",
      requiresAuth: true,
    },
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfileView,
    meta: {
      title: "Edit Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/tier",
    name: "Tier",
    component: TierView,
    meta: {
      title: "365 Bakery Club",
    },
  },
  {
    path: "/select-outlet",
    name: "SelectOutlet",
    component: SelectOutletView,
    meta: {
      title: "Select Your Outlet",
    },
  },
  {
    path: "/small-banner/:smallBannerId",
    name: "SmallBannerDetail",
    component: SmallBannerDetailView,
    meta: {
      title: "Small Banner Detail",
    },
  },
  {
    path: "/notification-detail/:notificationId",
    name: "NotificationDetail",
    component: NotificationDetailView,
    meta: {
      title: "Notification Detail",
    },
  },
  {
    path: "/address",
    name: "Address",
    component: AddressView,
    meta: {
      title: "Set Your Address",
      requiresAuth: true,
    },
  },
  {
    path: "/pick-location",
    name: "PickLocation",
    component: PickLocationView,
    meta: {
      title: "Pick Your Location",
      requiresAuth: true,
    },
  },
  {
    path: "/set-address/:id?",
    name: "SetAddress",
    component: SetAddressView,
    meta: {
      title: "Set Your Address",
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      title: "Login or Sign Up",
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/otp",
    name: "OTP",
    component: OTPView,
    meta: {
      title: "Confirm OTP",
    },
  },
  {
    path: "/auth/callback", // This route handles the OAuth redirect
    name: "RedirectHandler",
    component: RedirectHandler,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.name === "Home") {
      return { top: savedPositions[to.name] || 0 };
    } else {
      return new Promise((resolve) => {
        if (savedPosition) {
          resolve(savedPosition);
        } else if (to.meta.scrollPosition) {
          resolve({ top: 0 });
        } else {
          resolve({ top: 0 });
        }
      });
    }
  },
});

// let isAuthInitialized = false;
// onAuthStateChanged(auth, async (user) => {
//   // login. logout , refresh
//   console.log(user);
//   if (user) {
//     const email = user.email;
//     await useUserStore().fetchUserByEmail(email as string); // masuk user ke userStore
//   }
//   isAuthInitialized = true;
// });

router.beforeEach(async (to, from, next) => {
  const navigationStore = useNavigationStore();
  await useUserStore().loadUser();
  navigationStore.setPreviousRoute(from); // Store the last route

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  useCartStore().loadCart();

  if (requiresAuth && !useUserStore().isLogin) {
    next({ name: "Login" });
  } else if (
    (to.name == "Login" || to.name == "OTP") &&
    useUserStore().isLogin
  ) {
    next({ name: "Home" });
  } else {
    if (from.name === "Home") {
      savedPositions[from.name] =
        window.scrollY || document.documentElement.scrollTop;
    }
    next();
  }
});

// Auto-detect if using hash routing (checks router's history mode)
export const isHashRouting = (): boolean => {
  // createWebHashHistory uses "#" in the base, createWebHistory does not
  return router.options.history.base?.includes("#") ?? false;
};

export default router;
