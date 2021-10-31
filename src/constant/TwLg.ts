/*
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 17:21:05
 * @FilePath: /sy_website/src/constant/CONSTS.ts
 */

import { productCate } from "@/store/storeItf/product.itf";
import blog1 from "../assets/img/blog-1.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import blog4 from "../assets/img/blog-4.jpg";
import blog5 from "../assets/img/blog-5.jpg";
import blog7 from "../assets/img/blog-7.jpg";
import blog8 from "../assets/img/blog-8.jpg";
import bt from "../assets/img/struct/bt.png";
import wh from "../assets/img/struct/wh.png";
import qh from "../assets/img/struct/qh.png";
import qhzcb from "../assets/img/xnzcb.jpg";
import btb from "../assets/img/btb.jpg";
import znz from "../assets/img/znz.jpg";
import zcIcon from "../assets/img/prodIcon/zhuce.png";
import zichan from "../assets/img/prodIcon/zichan.png";
import download from "../assets/img/prodIcon/download.png";
import yijian from "../assets/img/prodIcon/yijian.png";
class TwLg {
  t = {
    home: "首頁",
    product: "產品",
    aboutus: "關於我們",
    b_title1: "<span>杭州三猿科技有限公司</span>",
    b_title2: "優秀的團隊",
    b_title3: "強大的抗風險能力",
  };
  productList: Array<productCate> = [
    {
      name: "數字貨幣資產包",
      style: { url: btb, background: "#000" },
      icon: bt,
      content:
        "<br/><b>• 數字貨幣潛力巨大</b> <br/>" +
        "<p>全球數字貨幣市值2.55萬億美元，比特幣的市值是最高的，目前超過1.1萬億美元。" +
        "數字貨幣整體被低估，擁" +
        "有巨大增長空間； </p><br/>" +
        "<b>• 數字貨幣具有匿名、安全儲 存、速度快、低交易成本等特點。</b><br/>" +
        "<p>數字資產，尤其是比特幣，顯" +
        "示出了類似商品金融化的趨勢；</p>" +
        "<br/><b>• 比特幣已開始逐漸發展成為一" +
        "種價值存儲方式；</b> <br/><br/> <b>• 受比特幣減半、全球疫情、全" +
        "球政治風險、DCEP/Libra等因" +
        "素影響，數字貨幣可分散投資" +
        "風險，市場增幅值得期待。</b><br/>" +
        "<p>近 5 年的回測結果表明，通過在投資組合中分配 3%-10％的數字貨幣就會顯著改善投資組合的夏普比率" +
        "</p><br/>",
      list: [
        {
          name: "現貨量化",
          // url: "../assets/img/blog-1.jpg",
          url: blog8,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 數字貨幣具有全球化7x24小時交易，行情變化極快，零售（cta）端交易流量較為充足等特點</li>' +
            "<br/><p><b> &#160; &#160; • 現貨量化全年實時秒級監控，24小時實時大數據投射分析跟踪行情</b></p>" +
            '<li><i class="ri-check-double-line"></i>相對傳統資產有更多的非有效性存在</li>' +
            "<br/><b>&#160; &#160;  • 現貨量化幫您篩選過濾掉非主流的數字貨幣</b><br/><br/>" +
            '<li><i class="ri-check-double-line"></i>數字貨幣同時具有波動幅度大，震盪行情多，週期短，急跌急漲行情等特點</li>' +
            "<br/><p><b>&#160; &#160;  • 現貨量化採用網格交易為基礎的止盈策略，非常適應行情的大波動、震盪，能獲得極大的收益</b></p>" +
            "<p><b>&#160; &#160;  • 花菜AI系統、大數據和防“瀑布”機制可以讓現貨量化更有效的應對黑天鵝等極端行情，保證現貨量化的抗跌、抗風險能力。</b></p>" +
            "<p><b>&#160; &#160;  • 在長期的熊市、市場行情慘淡等月份中，現貨量化擁有斬倉策略和超級斬倉策略，保證客戶穩定的倉位，依然可以保持可觀的收益率，也進一步提高抗跌能力，抗風險能力遠遠領先同行業同類產品</b></p>" +
            '<li><i class="ri-check-double-line"></i>行業領先的技術、優秀的投資業績，年化穩定</li>' +
            "<br/><p><b>&#160; &#160;  • 專業級AI底層平台，領先的量化交易算法，自動機器學習，極速提高AI量化實時處理效率</b></p>" +
            "<p><b>&#160; &#160;  • “花菜”AI回測系統，針對數字貨幣的大數據沉澱，定制出各類策略的模式回測，並對策略進行動態調整，保證策略的有效</b></p>" +
            "<p><b>&#160; &#160;  • 經過多年的實盤驗證，現貨量化收益非常穩定</b></p>",
          steps: {
            title: "投資數字貨幣量化，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "數字貨幣交易所存入資產",
                content: "在火幣、幣安等交易所的其中之一存入USDT",
              },
              {
                icon: download,
                text: "下載貝塔量化app",
                content: "點擊以下按鈕下載或前往貝塔app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開啟量化",
                content: "選擇幣種，輸入倉位，一鍵開啟量化",
              },
            ],
          },
          button: [
            {
              text: "貝塔app下載",
              url: "",
            },
            {
              text: "貝塔app網頁版",
              url: "", //
            },
          ],
        },
        {
          name: "幣本位",
          url: blog5,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 幣本位機器人以BTC、ETH等數字貨幣為本位幣，通過量化幫您獲取收益</li>' +
            "<br/><p><b> &#160; &#160; • 幣本位機器人全年實時秒級監控，24小時實時大數據投射分析跟踪行情</b></p>" +
            '<li><i class="ri-check-double-line"></i> 幣本位機器人同時也具有現貨量化的特點和優勢</li>' +
            "<br/><p><b>&#160; &#160;  • 幣本位機器人採用網格交易為基礎的止盈策略，非常適應行情的大波動、震盪，能獲得極大的收益</b></p>" +
            "<p><b>&#160; &#160;  • 花菜AI系統、大數據和防“瀑布”機制可以讓幣本位機器人更有效的應對黑天鵝等極端行情，保證幣本位機器人的抗跌、抗風險能力。</b></p>" +
            "<p><b>&#160; &#160;  • 在長期的熊市、市場行情慘淡等月份中，幣本位機器人擁有斬倉策略和超級斬倉策略，保證客戶穩定的倉位，依然可以保持可觀的收益率，也進一步提高抗跌能力，抗風險能力遠遠領先同行業同類產品</b></p>" +
            "<br/><p><b>&#160; &#160;  • 專業級AI底層平台，領先的量化交易算法，自動機器學習，極速提高AI量化實時處理效率</b></p>" +
            "<p><b>&#160; &#160;  • “花菜”AI回測系統，針對數字貨幣的大數據沉澱，定制出各類策略的模式回測，並對策略進行動態調整，保證策略的有效</b></p>" +
            "<p><b>&#160; &#160;  • 經過多年的實盤驗證，幣本位機器人收益非常穩定</b></p>",
          steps: {
            title: "投資數字貨幣幣本位產品，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "數字貨幣交易所存入資產",
                content: "在數字貨幣交易所中存入幣本位的幣種",
              },
              {
                icon: download,
                text: "下載幣本位app",
                content: "點擊以下按鈕下載幣本位app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "註冊並通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開幣本位",
                content: "輸入倉位，一鍵開啟幣本位",
              },
            ],
          },

          button: [
            {
              text: "敬請期待",
              url: "",
            },
          ],
        },
        {
          name: "期現套利",
          url: blog3,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 期現套利機器人利用交易所合約券商系統，幫您全自動化賺取利息(資金費率)</li>' +
            "<br/><p><b> &#160; &#160; • 期現套利機器人全年實時秒級監控，24小時實時大數據投射分析跟踪行情，每8小時幫你全自動化賺取利息(資金費率)。</b></p>" +
            '<li><i class="ri-check-double-line"></i> 強大的風控體係與風險保障金機制讓您安心套利。 </li>' +
            "<br/><p><b> &#160; &#160; • 花菜AI系統、大數據使期現套利機器人能從容應對大漲大跌極端行情，獲取穩定的收益</b></p>" +
            "<p><b> &#160; &#160; • 期現套利機器人比較於數字貨幣資產包中別的產品，它風險是最小的</b></p>" +
            '<li><i class="ri-check-double-line"></i> 期現套利機器人可以保持穩定的收益</li>' +
            "<br/><p><b> &#160; &#160; • 期現套利收益非常穩定，但是相對於數字貨幣資產包中別的產品，它的收益比較低</b></p>",
          steps: {
            title: "投資數字貨幣期現套利，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "數字貨幣交易所存入資產",
                content: "在數字貨幣交易所存入USDT，並開通合約",
              },
              {
                icon: download,
                text: "下載期現套利app",
                content: "點擊以下按鈕下載期現套利app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開啟期現套利",
                content: "選擇幣種，輸入倉位，一鍵開啟期現套利",
              },
            ],
          },
          button: [
            {
              text: "敬請期待",
              // text: "期現套利App下載",
              url: "",
            },
          ],
        },
        {
          name: "CTA",
          // url: "../assets/img/blog-1.jpg",
          url: blog4,
          intruduce:
            '<li><i class="ri-check-double-line"></i> CTA更適應新時代，不受基本面影響</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略與程序化越來越緊密的結合在了一起，一方面因為機器代替人工是普遍的大趨勢，但我們認為更核心的原因在於程序化這種交易形式更契合了 CTA 策略只基於價格的本質，畢竟對於代碼而言不知道何為基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基於純價格驅動，只需監測是否有趨勢啟動的跡象，而不用管因何啟動，也無所謂啟動的方向，因此對於 CTA 策略也就沒有牛熊市的概念，甚至當全球市場表現不佳時，CTA 策略往往還能脫穎而出。</b></p>" +
            "<p><b> &#160; &#160; • 本質上，CTA 策略做多的是「波動率」本身，當市場波動性越強，收益越輕鬆，但若市場處於窄幅震盪期，則對 CTA 策略非常不利。 </b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA傾向於非暴利穩健型收益投資者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基於花菜AI系統、大數據分析，程序化交易，避免人為情緒非理性干預，收益會偏向穩定，不能和主觀策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系統動態調整回撤控制、防“瀑布”機制，以及風控系統可有效控制風險，應對暴漲暴跌行情，對極端行情防禦性較強</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA對於不同的數字貨幣，會建立多策略的投資組合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA機器人基於花菜AI系統，以趨勢跟踪策略為基礎，對不同的數字貨幣動態採用日間趨勢策略（趨勢較強）、日內策略（變化較快）的不同策略，同時整體上組合兩種策略，動態調整投資組合配比</b></p>" +
            "",
          steps: {
            title: "投資數字貨幣CTA，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "數字貨幣交易所存入資產",
                content: "在火幣、幣安等交易所的其中之一存入USDT",
              },
              {
                icon: download,
                text: "下載 CTA app",
                content: "點擊以下按鈕下載 CTA app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開啟 CTA ",
                content: "選擇幣種，輸入倉位，一鍵開啟 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬請期待",
              url: "",
            },
          ],
        },
        //諾貝爾獎的Tversky和Kahneman的行為經濟學理論，以及其後的大量關於行為偏差和市場價格反應不足之間聯繫的研究。
      ],
    },
    {
      name: "期貨資產包",
      style: { url: qhzcb, background: "#000" },

      icon: qh,
      content:
        "期貨交易品種十分豐富，農產品、工業品、貴金屬、匯率、利率、股票等都是期貨的投資標的。目前全球有150多個期貨交易市場，從傳統的商品期貨，到外匯、利率、指數等金融期貨，投資範圍廣闊。在國內，期貨品種也涵蓋了股指、國債、商品等40多個品種，許多品種還可進行夜盤交易。不同品種的投資標的價格影響因素各不相同，風險來源及其分散。",
      list: [
        {
          name: "期貨CTA",
          // url: "../assets/img/blog-1.jpg",
          url: blog7,
          intruduce:
            "期貨交易品種十分豐富，農產品、工業品、貴金屬、匯率、利率、股票等都是期貨的投資標的。目前全球有150多個期貨交易市場，從傳統的商品期貨，到外匯、利率、指數等金融期貨，投資範圍廣闊。在國內，期貨品種也涵蓋了股指、國債、商品等40多個品種，許多品種還可進行夜盤交易。不同品種的投資標的價格影響因素各不相同，風險來源及其分散。" +
            "CTA基金通過配置不同期貨品種，建立多周期多策略的投資組合策略，在獲得投資品種收益同時，憑藉品種間低相關性特徵，分散投資組合風險。'" +
            "商品期貨投資作為CTA投資策略的重要組成部分，有著較強的抗通脹能力。" +
            "當前我國人民幣貶值壓力不斷上升，全球經濟整體處於加息週期下，通貨膨脹風險預期不斷增加, CTA策略作為抗通脹的有效方式之一，有利於資產組合的保值增值。" +
            '<li><i class="ri-check-double-line"></i> CTA更適應新時代，不受基本面影響</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略與程序化越來越緊密的結合在了一起，一方面因為機器代替人工是普遍的大趨勢，但我們認為更核心的原因在於程序化這種交易形式更契合了 CTA 策略只基於價格的本質，畢竟對於代碼而言不知道何為基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基於純價格驅動，只需監測是否有趨勢啟動的跡象，而不用管因何啟動，也無所謂啟動的方向，因此對於 CTA 策略也就沒有牛熊市的概念，甚至當全球市場表現不佳時，CTA 策略往往還能脫穎而出。</b></p>" +
            "<p><b> &#160; &#160; • 本質上，CTA 策略做多的是「波動率」本身，當市場波動性越強，收益越輕鬆，但若市場處於窄幅震盪期，則對 CTA 策略非常不利。 </b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA傾向於非暴利穩健型收益投資者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基於花菜AI系統、大數據分析，程序化交易，避免人為情緒非理性干預，收益會偏向穩定，不能和主觀策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系統動態調整回撤控制、防“瀑布”機制，以及風控系統可有效控制風險，應對暴漲暴跌行情，對極端行情防禦性較強</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA對於不同的期貨，會建立多策略的投資組合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA機器人基於花菜AI系統，以趨勢跟踪策略為基礎，對不同的期貨動態採用日間趨勢策略（趨勢較強）、日內策略（變化較快）的不同策略，同時整體上組合兩種策略，動態調整投資組合配比</b></p>" +
            "",
          steps: {
            title: "投資期貨CTA，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "期貨交易所存入資產",
                content: "在期貨交易所存入資金",
              },
              {
                icon: download,
                text: "下載 CTA app",
                content: "點擊以下按鈕下載 CTA app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開啟 CTA ",
                content: "選擇期貨品種，輸入倉位，一鍵開啟 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬請期待",
              url: "",
            },
          ],
        },
      ],
    },

    {
      name: "外匯資產包",
      icon: wh,
      style: {
        url: znz,
        background: "#00112f",
      },
      content:
        "外匯市場的特點有以下幾點：無形的交易市場  24小時交易  客戶市場和銀行市場  品種少，易於操作  成交量大，不管何種投資都需要謹慎，儘管有時候外匯市場的波動率不大，但經過槓桿放大之後，投資者的風險會與其收益一起被放大。此外，雖然外匯市場規模比股市大很多，並且不會存在像股票市場一樣的機構操盤控制股價，這也不意味著外匯市場的風險更小，因為全球性的特徵，影響外匯市場波動的原因更加複雜，如預期的作用，利率的作用，預期通貨膨脹率的作用，貨幣資產之間的相關關係，貨幣資產和黃金之間的相關關係，貨幣資產和原油及大宗商品之間的相關關係，各國央行政策的干預等等。",
      list: [
        {
          name: "外匯cta",
          // url: "../assets/img/blog-1.jpg",
          url: blog1,
          intruduce:
            '<li><i class="ri-check-double-line"></i> CTA更適應新時代，不受基本面影響</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略與程序化越來越緊密的結合在了一起，一方面因為機器代替人工是普遍的大趨勢，但我們認為更核心的原因在於程序化這種交易形式更契合了 CTA 策略只基於價格的本質，畢竟對於代碼而言不知道何為基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基於純價格驅動，只需監測是否有趨勢啟動的跡象，而不用管因何啟動，也無所謂啟動的方向，因此對於 CTA 策略也就沒有牛熊市的概念，甚至當全球市場表現不佳時，CTA 策略往往還能脫穎而出。</b></p>" +
            "<p><b> &#160; &#160; • 本質上，CTA 策略做多的是「波動率」本身，當市場波動性越強，收益越輕鬆，但若市場處於窄幅震盪期，則對 CTA 策略非常不利。 </b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA傾向於非暴利穩健型收益投資者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基於花菜AI系統、大數據分析，程序化交易，避免人為情緒非理性干預，收益會偏向穩定，不能和主觀策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系統動態調整回撤控制、防“瀑布”機制，以及風控系統可有效控制風險，應對暴漲暴跌行情，對極端行情防禦性較強</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA對於不同的外匯幣種，會建立多策略的投資組合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA機器人基於花菜AI系統，以趨勢跟踪策略為基礎，對不同的外匯幣種動態採用日間趨勢策略（趨勢較強）、日內策略（變化較快）的不同策略，同時整體上組合兩種策略，動態調整投資組合配比</b></p>" +
            "",
          steps: {
            title: "投資外匯CTA，就是這麼簡單",
            list: [
              {
                icon: zichan,
                text: "外匯交易所存入資產",
                content: "在外匯交易所存入資金",
              },
              {
                icon: download,
                text: "下載 CTA app",
                content: "點擊以下按鈕下載 CTA app",
              },
              {
                icon: zcIcon,
                text: "註冊會員，接通API",
                content: "通過app中的詳細教程接通API",
              },
              {
                icon: yijian,
                text: "一鍵開啟 CTA ",
                content: "選擇外匯幣種，輸入倉位，一鍵開啟 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬請期待",
              url: "",
            },
          ],
        },
      ],
    },
  ];
}

export default new TwLg();
