/*
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 11:10:06
 * @FilePath: /sy_website/src/untils/commentUntils.ts
 */
class commentUntils {
  goAnchor = (cateIndex: number, productIndex: number) => {
    if (cateIndex === 0 && productIndex === 0) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      return;
    }
    //id="'product' + index + '_' + key"
    const id = "#product" + cateIndex + "_" + productIndex;
    console.log("id===>", id);

    const anchor: any = document.querySelector(id);
    console.log("anchor", anchor.offsetTop);

    // chrome
    document.body.scrollTop = anchor.offsetTop - 156 - 50;
    // firefox
    document.documentElement.scrollTop = anchor.offsetTop - 156 - 50;
    // safari
    // window.pageYOffset = anchor.offsetTop;
    // anchor.scrollIntoView(true);
  };
  delay = async (params: delayParams) => {
    await setTimeout(() => {
      params.fun();
    }, params.time);
  };
  //判断是否小数
  isDecimals = (num: number) => {
    const y = String(num).indexOf(".") + 1; //获取小数点的位置
    const count = String(num).length - y; //获取小数点后的个数
    if (y > 0) {
      // console.log("这个数字是小数，有" + count + "位小数");
      return true;
    } else {
      // console.log("不是小数");
      return false;
    }
  };
}

export default new commentUntils();

interface delayParams {
  time: number;
  fun: () => void;
}
