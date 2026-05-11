export const loginUser = (email, password) => {

    if (email && password) {

        localStorage.setItem("token", "taskflow-token");

        return true;
    }

    return false;
};