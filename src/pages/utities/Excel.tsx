import { saveAs } from "file-saver";
import instance_auth from "./instance_auth";

export const Excel = () => {
  (async () => {
    await instance_auth({
      method: "get",
      url: "/excel/order",
      responseType: "blob",
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        saveAs(res.data, "example.xlsx");
      }
    });
  })();
};

export const Excel_one = (id: number) => {
  console.log(id);
  (async () => {
    await instance_auth({
      method: "post",
      url: "/excel/order/one",
      data: { id: id },
      responseType: "blob",
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        saveAs(res.data, "example_one.xlsx");
      }
    });
  })();
};

export default { Excel, Excel_one };
