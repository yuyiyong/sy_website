/*
 * @LastEditors:
 * @LastEditTime: 2021-06-30 18:07:15
 * @FilePath: /sy_website/src/constant/CONSTS.ts
 */

import { productCate } from "@/store/storeItf/product.itf";
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import blog4 from "../assets/img/blog-4.jpg";
import blog5 from "../assets/img/blog-5.jpg";
import blog7 from "../assets/img/blog-7.jpg";
import blog8 from "../assets/img/blog-8.jpg";
import bt from "../assets/img/struct/bt.png";
import wh from "../assets/img/struct/wh.png";
import qh from "../assets/img/struct/qh.png";
import qhzcb from "../assets/img/xnzcb.jpg";
import xnzcb from "../assets/img/qhzcb.jpeg";
import btb from "../assets/img/btb.jpg";
import znz from "../assets/img/znz.jpg";
import zcIcon from "../assets/img/prodIcon/zhuce.png";
import zichan from "../assets/img/prodIcon/zichan.png";
import download from "../assets/img/prodIcon/download.png";
import yijian from "../assets/img/prodIcon/yijian.png";
class CONSTS {
  productList: Array<productCate> = [
    {
      name: "数字货币资产包",
      style: { url: btb, background: "#000" },
      icon: bt,
      content:
        "<br/><b>• 数字货币潜力巨大</b> <br/>" +
        "<p>全球数字货币市值2.55万亿美元，比特币的市值是最高的，目前超过1.1万亿美元。" +
        "数字货币整体被低估，拥" +
        "有巨大增长空间； </p><br/>" +
        "<b>• 数字货币具有匿名、安全储 存、速度快、低交易成本等特点。</b><br/>" +
        "<p>数字资产，尤其是比特币，显" +
        "示出了类似商品金融化的趋势；</p>" +
        "<br/><b>• 比特币已开始逐渐发展成为一" +
        "种价值存储方式；</b> <br/><br/> <b>• 受比特币减半、全球疫情、全" +
        "球政治风险、DCEP/Libra等因" +
        "素影响，数字货币可分散投资" +
        "风险，市场增幅值得期待。</b><br/>" +
        "<p>近 5 年的回测结果表明，通过在投资组合中分配 3%-10％的数字货币就会显著改善投资组合的夏普比率" +
        "</p><br/>",
      list: [
        {
          name: "现货量化",
          // url: "../assets/img/blog-1.jpg",
          url: blog8,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 数字货币具有全球化7x24小时交易，行情变化极快，零售（cta）端交易流量较为充足等特点</li>' +
            "<br/><p><b> &#160; &#160; • 现货量化全年实时秒级监控，24小时实时大数据投射分析跟踪行情</b></p>" +
            '<li><i class="ri-check-double-line"></i>相对传统资产有更多的非有效性存在</li>' +
            "<br/><b>&#160; &#160;  • 现货量化帮您筛选过滤掉非主流的数字货币</b><br/><br/>" +
            '<li><i class="ri-check-double-line"></i>数字货币同时具有波动幅度大，震荡行情多，周期短，急跌急涨行情等特点</li>' +
            "<br/><p><b>&#160; &#160;  • 现货量化采用网格交易为基础的止盈策略，非常适应行情的大波动、震荡，能获得极大的收益</b></p>" +
            "<p><b>&#160; &#160;  • 花菜AI系统、大数据和防“瀑布”机制可以让现货量化更有效的应对黑天鹅等极端行情，保证现货量化的抗跌、抗风险能力。</b></p>" +
            "<p><b>&#160; &#160;  • 在长期的熊市、市场行情惨淡等月份中，现货量化拥有斩仓策略和超级斩仓策略，保证客户稳定的仓位，依然可以保持可观的收益率，也进一步提高抗跌能力，抗风险能力远远领先同行业同类产品</b></p>" +
            '<li><i class="ri-check-double-line"></i>行业领先的技术、优秀的投资业绩，年化稳定</li>' +
            "<br/><p><b>&#160; &#160;  • 专业级AI底层平台，领先的量化交易算法，自动机器学习，极速提高AI量化实时处理效率</b></p>" +
            "<p><b>&#160; &#160;  • “花菜”AI回测系统，针对数字货币的大数据沉淀，定制出各类策略的模式回测，并对策略进行动态调整，保证策略的有效</b></p>" +
            "<p><b>&#160; &#160;  • 经过多年的实盘验证，现货量化收益非常稳定</b></p>",
          steps: {
            title: "投资数字货币量化，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "数字货币交易所存入资产",
                content: "在火币、币安等交易所的其中之一存入USDT",
              },
              {
                icon: download,
                text: "下载贝塔量化app",
                content: "点击以下按钮下载或前往贝塔app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开启量化",
                content: "选择币种，输入仓位，一键开启量化",
              },
            ],
          },
          button: [
            {
              text: "贝塔app下载",
              url: "",
            },
            {
              text: "贝塔app网页版",
              url: "", //
            },
          ],
        },
        {
          name: "币本位",
          url: blog5,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 币本位机器人以BTC、ETH等数字货币为本位币，通过量化帮您获取收益</li>' +
            "<br/><p><b> &#160; &#160; • 币本位机器人全年实时秒级监控，24小时实时大数据投射分析跟踪行情</b></p>" +
            '<li><i class="ri-check-double-line"></i> 币本位机器人同时也具有现货量化的特点和优势</li>' +
            "<br/><p><b>&#160; &#160;  • 币本位机器人采用网格交易为基础的止盈策略，非常适应行情的大波动、震荡，能获得极大的收益</b></p>" +
            "<p><b>&#160; &#160;  • 花菜AI系统、大数据和防“瀑布”机制可以让币本位机器人更有效的应对黑天鹅等极端行情，保证币本位机器人的抗跌、抗风险能力。</b></p>" +
            "<p><b>&#160; &#160;  • 在长期的熊市、市场行情惨淡等月份中，币本位机器人拥有斩仓策略和超级斩仓策略，保证客户稳定的仓位，依然可以保持可观的收益率，也进一步提高抗跌能力，抗风险能力远远领先同行业同类产品</b></p>" +
            "<br/><p><b>&#160; &#160;  • 专业级AI底层平台，领先的量化交易算法，自动机器学习，极速提高AI量化实时处理效率</b></p>" +
            "<p><b>&#160; &#160;  • “花菜”AI回测系统，针对数字货币的大数据沉淀，定制出各类策略的模式回测，并对策略进行动态调整，保证策略的有效</b></p>" +
            "<p><b>&#160; &#160;  • 经过多年的实盘验证，币本位机器人收益非常稳定</b></p>",
          steps: {
            title: "投资数字货币币本位产品，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "数字货币交易所存入资产",
                content: "在数字货币交易所中存入币本位的币种",
              },
              {
                icon: download,
                text: "下载币本位app",
                content: "点击以下按钮下载币本位app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "注册并通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开币本位",
                content: "输入仓位，一键开启币本位",
              },
            ],
          },

          button: [
            {
              text: "敬请期待",
              url: "",
            },
          ],
        },
        {
          name: "期现套利",
          url: blog3,
          intruduce:
            '<li><i class="ri-check-double-line"></i> 期现套利机器人利用交易所合约券商系统，帮您全自动化赚取利息(资金费率)</li>' +
            "<br/><p><b> &#160; &#160; • 期现套利机器人全年实时秒级监控，24小时实时大数据投射分析跟踪行情，每8小时帮你全自动化赚取利息(资金费率)。</b></p>" +
            '<li><i class="ri-check-double-line"></i> 强大的风控体系与风险保障金机制让您安心套利。</li>' +
            "<br/><p><b> &#160; &#160; • 花菜AI系统、大数据使期现套利机器人能从容应对大涨大跌极端行情，获取稳定的收益</b></p>" +
            "<p><b> &#160; &#160; • 期现套利机器人比较于数字货币资产包中别的产品，它风险是最小的</b></p>" +
            '<li><i class="ri-check-double-line"></i> 期现套利机器人可以保持稳定的收益</li>' +
            "<br/><p><b> &#160; &#160; • 期现套利收益非常稳定，但是相对于数字货币资产包中别的产品，它的收益比较低</b></p>",
          steps: {
            title: "投资数字货币期现套利，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "数字货币交易所存入资产",
                content: "在数字货币交易所存入USDT，并开通合约",
              },
              {
                icon: download,
                text: "下载期现套利app",
                content: "点击以下按钮下载期现套利app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开启期现套利",
                content: "选择币种，输入仓位，一键开启期现套利",
              },
            ],
          },
          button: [
            {
              text: "敬请期待",
              // text: "期现套利App下载",
              url: "",
            },
          ],
        },
        {
          name: "CTA",
          // url: "../assets/img/blog-1.jpg",
          url: blog4,
          intruduce:
            '<li><i class="ri-check-double-line"></i> CTA更适应新时代，不受基本面影响</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略与程序化越来越紧密的结合在了一起，一方面因为机器代替人工是普遍的大趋势，但我们认为更核心的原因在于程序化这种交易形式更契合了 CTA 策略只基于价格的本质，毕竟对于代码而言不知道何为基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基于纯价格驱动，只需监测是否有趋势启动的迹象，而不用管因何启动，也无所谓启动的方向，因此对于 CTA 策略也就没有牛熊市的概念，甚至当全球市场表现不佳时，CTA 策略往往还能脱颖而出。</b></p>" +
            "<p><b> &#160; &#160; • 本质上，CTA 策略做多的是「波动率」本身，当市场波动性越强，收益越轻松，但若市场处于窄幅震荡期，则对 CTA 策略非常不利。</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA倾向于非暴利稳健型收益投资者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基于花菜AI系统、大数据分析，程序化交易，避免人为情绪非理性干预，收益会偏向稳定，不能和主观策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系统动态调整回撤控制、防“瀑布”机制，以及风控系统可有效控制风险，应对暴涨暴跌行情，对极端行情防御性较强</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA对于不同的数字货币，会建立多策略的投资组合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA机器人基于花菜AI系统，以趋势跟踪策略为基础，对不同的数字货币动态采用日间趋势策略（趋势较强）、日内策略（变化较快）的不同策略，同时整体上组合两种策略，动态调整投资组合配比</b></p>" +
            "",
          steps: {
            title: "投资数字货币CTA，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "数字货币交易所存入资产",
                content: "在火币、币安等交易所的其中之一存入USDT",
              },
              {
                icon: download,
                text: "下载 CTA app",
                content: "点击以下按钮下载 CTA app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开启 CTA ",
                content: "选择币种，输入仓位，一键开启 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬请期待",
              url: "",
            },
          ],
        },
        //诺贝尔奖的Tversky和Kahneman的行为经济学理论，以及其后的大量关于行为偏差和市场价格反应不足之间联系的研究。
      ],
    },
    {
      name: "期货资产包",
      style: { url: qhzcb, background: "#000" },

      icon: qh,
      content:
        "期货交易品种十分丰富，农产品、工业品、贵金属、汇率、利率、股票等都是期货的投资标的。目前全球有150多个期货交易市场，从传统的商品期货，到外汇、利率、指数等金融期货，投资范围广阔。在国内，期货品种也涵盖了股指、国债、商品等40多个品种，许多品种还可进行夜盘交易。不同品种的投资标的价格影响因素各不相同，风险来源及其分散。",
      list: [
        {
          name: "期货CTA",
          // url: "../assets/img/blog-1.jpg",
          url: blog7,
          intruduce:
            "期货交易品种十分丰富，农产品、工业品、贵金属、汇率、利率、股票等都是期货的投资标的。目前全球有150多个期货交易市场，从传统的商品期货，到外汇、利率、指数等金融期货，投资范围广阔。在国内，期货品种也涵盖了股指、国债、商品等40多个品种，许多品种还可进行夜盘交易。不同品种的投资标的价格影响因素各不相同，风险来源及其分散。" +
            "CTA基金通过配置不同期货品种，建立多周期多策略的投资组合策略，在获得投资品种收益同时，凭借品种间低相关性特征，分散投资组合风险。'" +
            "商品期货投资作为CTA投资策略的重要组成部分，有着较强的抗通胀能力。" +
            "当前我国人民币贬值压力不断上升，全球经济整体处于加息周期下，通货膨胀风险预期不断增加, CTA策略作为抗通胀的有效方式之一，有利于资产组合的保值增值。" +
            '<li><i class="ri-check-double-line"></i> CTA更适应新时代，不受基本面影响</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略与程序化越来越紧密的结合在了一起，一方面因为机器代替人工是普遍的大趋势，但我们认为更核心的原因在于程序化这种交易形式更契合了 CTA 策略只基于价格的本质，毕竟对于代码而言不知道何为基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基于纯价格驱动，只需监测是否有趋势启动的迹象，而不用管因何启动，也无所谓启动的方向，因此对于 CTA 策略也就没有牛熊市的概念，甚至当全球市场表现不佳时，CTA 策略往往还能脱颖而出。</b></p>" +
            "<p><b> &#160; &#160; • 本质上，CTA 策略做多的是「波动率」本身，当市场波动性越强，收益越轻松，但若市场处于窄幅震荡期，则对 CTA 策略非常不利。</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA倾向于非暴利稳健型收益投资者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基于花菜AI系统、大数据分析，程序化交易，避免人为情绪非理性干预，收益会偏向稳定，不能和主观策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系统动态调整回撤控制、防“瀑布”机制，以及风控系统可有效控制风险，应对暴涨暴跌行情，对极端行情防御性较强</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA对于不同的期货，会建立多策略的投资组合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA机器人基于花菜AI系统，以趋势跟踪策略为基础，对不同的期货动态采用日间趋势策略（趋势较强）、日内策略（变化较快）的不同策略，同时整体上组合两种策略，动态调整投资组合配比</b></p>" +
            "",
          steps: {
            title: "投资期货CTA，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "期货交易所存入资产",
                content: "在期货交易所存入资金",
              },
              {
                icon: download,
                text: "下载 CTA app",
                content: "点击以下按钮下载 CTA app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开启 CTA ",
                content: "选择期货品种，输入仓位，一键开启 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬请期待",
              url: "",
            },
          ],
        },
      ],
    },

    {
      name: "外汇资产包",
      icon: wh,
      style: {
        url: znz,
        background: "#00112f",
      },
      content:
        "外汇市场的特点有以下几点：无形的交易市场  24小时交易  客户市场和银行市场  品种少，易于操作  成交量大，不管何种投资都需要谨慎，尽管有时候外汇市场的波动率不大，但经过杠杆放大之后，投资者的风险会与其收益一起被放大。此外，虽然外汇市场规模比股市大很多，并且不会存在像股票市场一样的机构操盘控制股价，这也不意味着外汇市场的风险更小，因为全球性的特征，影响外汇市场波动的原因更加复杂，如预期的作用，利率的作用，预期通货膨胀率的作用，货币资产之间的相关关系，货币资产和黄金之间的相关关系，货币资产和原油及大宗商品之间的相关关系，各国央行政策的干预等等。",
      list: [
        {
          name: "外汇cta",
          // url: "../assets/img/blog-1.jpg",
          url: blog1,
          intruduce:
            '<li><i class="ri-check-double-line"></i> CTA更适应新时代，不受基本面影响</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略与程序化越来越紧密的结合在了一起，一方面因为机器代替人工是普遍的大趋势，但我们认为更核心的原因在于程序化这种交易形式更契合了 CTA 策略只基于价格的本质，毕竟对于代码而言不知道何为基本面。</b></p>" +
            "<p><b> &#160; &#160; • 基于纯价格驱动，只需监测是否有趋势启动的迹象，而不用管因何启动，也无所谓启动的方向，因此对于 CTA 策略也就没有牛熊市的概念，甚至当全球市场表现不佳时，CTA 策略往往还能脱颖而出。</b></p>" +
            "<p><b> &#160; &#160; • 本质上，CTA 策略做多的是「波动率」本身，当市场波动性越强，收益越轻松，但若市场处于窄幅震荡期，则对 CTA 策略非常不利。</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA倾向于非暴利稳健型收益投资者</li>' +
            "<br/><p><b> &#160; &#160; • CTA 策略基于花菜AI系统、大数据分析，程序化交易，避免人为情绪非理性干预，收益会偏向稳定，不能和主观策略大收益相比</b></p>" +
            "<p><b> &#160; &#160; • 花菜AI系统动态调整回撤控制、防“瀑布”机制，以及风控系统可有效控制风险，应对暴涨暴跌行情，对极端行情防御性较强</b></p>" +
            '<li><i class="ri-check-double-line"></i> CTA对于不同的外汇币种，会建立多策略的投资组合策略</li>' +
            "<br/><p><b> &#160; &#160; • CTA机器人基于花菜AI系统，以趋势跟踪策略为基础，对不同的外汇币种动态采用日间趋势策略（趋势较强）、日内策略（变化较快）的不同策略，同时整体上组合两种策略，动态调整投资组合配比</b></p>" +
            "",
          steps: {
            title: "投资外汇CTA，就是这么简单",
            list: [
              {
                icon: zichan,
                text: "外汇交易所存入资产",
                content: "在外汇交易所存入资金",
              },
              {
                icon: download,
                text: "下载 CTA app",
                content: "点击以下按钮下载 CTA app",
              },
              {
                icon: zcIcon,
                text: "注册会员，接通API",
                content: "通过app中的详细教程接通API",
              },
              {
                icon: yijian,
                text: "一键开启 CTA ",
                content: "选择外汇币种，输入仓位，一键开启 CTA",
              },
            ],
          },
          button: [
            {
              text: "敬请期待",
              url: "",
            },
          ],
        },
      ],
    },
  ];
}

export default new CONSTS();
