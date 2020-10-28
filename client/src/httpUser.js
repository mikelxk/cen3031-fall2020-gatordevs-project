import axios from "axios";
async function SignUp(userInfo) {
    const response = await axios.post("api/users", userInfo);
    const token = response.data.token;
    if (token) {
        this.defaults.headers.common.token = this.setToken(token);
    }
}
export default { SignUp };