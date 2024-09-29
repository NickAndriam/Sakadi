import { atom } from "recoil"

export const notification = atom({
    key: "notification",
    default: {
        message: "",
        type: "",
        show: false
    }
})