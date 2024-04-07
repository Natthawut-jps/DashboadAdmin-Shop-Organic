import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const instance_auth = axios.create({
  // baseURL: "http://localhost:8080/admin",
  baseURL: "https://y7ly4z-8080.csb.app/admin",
  timeout: 1000,
});

try {
  instance_auth.interceptors.request.use(
    async (configs) => {
      const _uta = cookies.get("_uta");
      if (_uta) {
        configs.headers.Authorization = `Bearer ${_uta}`;
      }
      return configs;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance_auth.interceptors.response.use(
    async (res) => {
      return res;
    },
    async (error) => {
      const originRequest = error.config;
      if (error.response && (error.response.status === 401 || error.response.status === 403) && !originRequest._retry) {
        originRequest._retry = true;
        const _ura = cookies.get("_ura");
        if (_ura) {
          try {
            const url_sandbox = 'https://y7ly4z-8080.csb.app/admin_authRefreshToken/refresh_token'
           // const url_dev =  "http://localhost:8080/admin_authRefreshToken/refresh_token"
            await axios({
              method: "post",
              url:url_sandbox,
              data: { massage: "Authorize" },
              headers: {
                Authorization: `Bearer ${_ura}`,
              },
            }).then((res:any) => {
              if (res.status === 200) {
                const date = new Date();
                cookies.set("_uta", res.data._uta, {
                  expires: new Date(date.setMinutes(date.getMinutes() + 3)),
                  path: '/',
                  secure: true,
                  sameSite: "strict",
                });
                cookies.set("_ura", res.data._ura, {
                  expires: new Date(date.setDate(date.getDate() + 5)),
                  path: '/',
                  secure: true,
                  sameSite: "strict",
                });
              }
            });
            return instance_auth(originRequest);
          } catch (err) {
            console.log(err);
          }
        }
      }
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default instance_auth;
