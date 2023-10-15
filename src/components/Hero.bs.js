// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Styles from "../Styles.bs.js";
import * as GetStarted from "./GetStarted.bs.js";
import * as JsxRuntime from "react/jsx-runtime";
import RobotPng from "../assets/robot.png";
import DiscountSvg from "../assets/Discount.svg";

var discount = DiscountSvg;

var robot = RobotPng;

function Hero(props) {
  return JsxRuntime.jsxs("section", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("img", {
                                      className: "w-[32px] h-[32px]",
                                      alt: "discount",
                                      src: discount
                                    }),
                                JsxRuntime.jsxs("p", {
                                      children: [
                                        JsxRuntime.jsx("span", {
                                              children: "20%",
                                              className: "text-white"
                                            }),
                                        " Discount For ",
                                        JsxRuntime.jsx("span", {
                                              children: "1 Month",
                                              className: "text-white"
                                            }),
                                        " Account "
                                      ],
                                      className: "" + Styles.styles.paragraph + " ml-2"
                                    })
                              ],
                              className: "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsxs("h1", {
                                      children: [
                                        "The Next",
                                        JsxRuntime.jsx("br", {
                                              className: "sm:block hidden"
                                            }),
                                        JsxRuntime.jsx("span", {
                                              children: "Generation",
                                              className: "text-gradient"
                                            })
                                      ],
                                      className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
                                    }),
                                JsxRuntime.jsx("div", {
                                      children: JsxRuntime.jsx(GetStarted.make, {}),
                                      className: "ss:flex hidden md:mr-4 mr-0"
                                    })
                              ],
                              className: "flex flex-row justify-between items-center w-full"
                            }),
                        JsxRuntime.jsx("h1", {
                              children: "Payment Method.",
                              className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
                            }),
                        JsxRuntime.jsx("p", {
                              children: "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
                              className: "" + Styles.styles.paragraph + " max-w-[470px] mt-5"
                            })
                      ],
                      className: "flex-1 " + Styles.styles.flexStart + " flex-col xl:px-0 sm:px-16 px-6"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("img", {
                              className: "w-[100%] h-[100%] relative z-[5]",
                              alt: "billing",
                              src: robot
                            }),
                        JsxRuntime.jsx("div", {
                              className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
                            }),
                        JsxRuntime.jsx("div", {
                              className: "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
                            }),
                        JsxRuntime.jsx("div", {
                              className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
                            })
                      ],
                      className: "flex-1 flex " + Styles.styles.flexCenter + " md:my-0 my-10 relative"
                    }),
                JsxRuntime.jsx("div", {
                      children: JsxRuntime.jsx(GetStarted.make, {}),
                      className: "ss:hidden " + Styles.styles.flexCenter + ""
                    })
              ],
              className: "flex md:flex-row flex-col " + Styles.styles.paddingY + "",
              id: "home"
            });
}

var make = Hero;

export {
  discount ,
  robot ,
  make ,
}
/* discount Not a pure module */