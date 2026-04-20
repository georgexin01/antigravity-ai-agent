export enum StorageKeys {
  CurrentUser = "currentUser",
  CurrentLanguage = "currentLanguage",
  CurrentOutlet = "currentOutlet",
  CurrentCart = "currentCart",
  ReferralId = "referralId",
  CurrentPickupTime = "currentPickupTime",
  CurrentOrderType = "currentOrderType",
  CurrentShippingType = "currentShippingType",
  IsToday = "isToday",
  IsTodayPickupNow = "isTodayPickupNow",
  TodayScheduleTime = "todayScheduleTime",
  NotTodayScheduleTime = "notTodayScheduleTime",
  NotTodayScheduleDate = "notTodayScheduleDate",
  Remarks = "remarks",
  CurrentAddress = "currentAddress",
}

export interface StorageModel {
  data: any;
  expireDate: string | null;
}
