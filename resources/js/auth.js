import { store } from "./store";
import { router } from "./router";

export function signIn(data) {
    return new Promise((res, rej) => {
        axios
            .post("/api/auth/login", data)
            .then(response => {
                res(response.data);
            })
            .catch(err => {
                rej("Wrong email or password");
            });
    });
}

export function doSignIn(data) {
    signIn(data).then(res => {
        store.commit("signInSuccess", res);
        router.push({ path: "/" });
    });
}

export function getLocalUser() {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) {
        return null;
    }

    return JSON.parse(userInfo);
}
