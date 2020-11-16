import { store } from "./store";
import { router } from "./router";

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    error => {
        if (error.response.status == 401) {
            store.commit("signout");
            router.push("signin");
        }

        store.commit(
            "error",
            `Error happened: code ${error.response.status} <br> <pre> ${error.response.data.message} </pre>`
        );
        return Promise.reject(error);
    }
);
