import { saveAs } from "file-saver";
import instance_auth from "./instance_auth";

const Excel = () => {
  (async () => {
    await instance_auth({
      method: "get",
      url: "/excel/order",
      responseType: "blob"
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        saveAs(res.data, "example.xlsx");
      }
    });
  })();
};

export default Excel;
