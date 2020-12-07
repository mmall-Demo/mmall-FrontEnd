/*
 * @Author: luzhibin
 * @Date: 2020-12-07 16:13:24
 * @Last Modified by: luzhibin
 * @Last Modified time: 2020-12-07 16:25:50
 */

"use strict";
require("./index.css");
require("page/common/nav-simple/index.js");
var _mm = require("util/mm.js");

$(function () {
  var type = _mm.getUrlParam("type") || "default",
    $element = $("." + type + "-success");
  if (type === "payment") {
    var orderNumber = _mm.getUrlParam("orderNumber"),
      $orderNumber = $element.find(".order-number");
    $orderNumber.attr("href", $orderNumber.attr("href") + orderNumber);
  }
  // 显示对应的提示元素
  $element.show();
});
