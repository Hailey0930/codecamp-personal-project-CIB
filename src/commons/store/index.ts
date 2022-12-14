import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const logInStatusState = atom({
  key: "logInStatusState",
  default: false,
});

export const ChangeUserInfoState = atom({
  key: "ChangeUserInfoState",
  default: false,
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});
