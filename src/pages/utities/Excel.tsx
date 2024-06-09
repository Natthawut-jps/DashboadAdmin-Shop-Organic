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
        const date = new Date();
        saveAs(res.data, `${new Date(date.setDate(date.getDate() - 1)).toISOString().slice(0,10)}.xlsx`);
      }
    });
  })();
};

export const Excel_one = (id: number) => {
  (async () => {
    await instance_auth({
      method: "post",
      url: "/excel/order/one",
      data: { id: id },
      responseType: "blob",
    }).then((res) => {
      if (res.status === 200) {
        saveAs(res.data, `#${id}_${new Date().toISOString().slice(0,10)}.xlsx`);
      }
    });
  })();
};

export default { Excel, Excel_one };
