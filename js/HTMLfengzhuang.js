$().ready(function(){
  getHeader();
  getFooter();
  getNowFormatDate();
})

function getHeader(){
  var header = "<div class='navbar navbar-default navbar-static-top'>" +
      "<div class='container'>" +
      "<div class='row'>" +
      "<div class='col-lg-6 col-sm-6'>" +
      "<div class='navbar-header' style='margin-right:40px;'>" +
      "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>" +
      "<span class='icon-bar'></span>" +
      "<span class='icon-bar'></span>" +
      "<span class='icon-bar'></span>" +
      "</button>" +
      "<a class='navbar-brand' href='index.html'>" +
      "<img src='img/imgDG/mengmian1.jpg' width='180' height='70' alt='联越'/></a>" +
      "</div>" +
      "<div style='margin-top:5px;color:blue;font-size:13px;'>" +
      "<strong>无锡联越金属材料有限公司</strong> (<label id='date' style='color:red;font-size:13px;'></label>)<br/>" +
      "手机(朱超) : 15896473031<br/>" +
      "电话 : 0510-82027451<br/>" +
      "传真 : 0510-82027451<br/>" +
      "地址 : 江苏省无锡市锡山区东北塘街道锡港路177号 <a href='ours.html' style='color:red;'>点我查看地图</a><br/>" +
      "</div>" +
      "</div>" +
      "<div class='col-lg-6 col-sm-6'>" +
      "<div class='navbar-collapse collapse '>" +
      "<ul class='nav navbar-nav'>" +
      "<li id='shouyeLi'><a href='index.html'>首页</a></li>" +
      "<li id='jieshaoLi'><a href='about.html'>公司介绍</a></li>" +
      "<!--                        <li><a href='services.html'>新闻中心</a></li>-->" +
      "<li id='xinwenLi' class='dropdown '>" +
      "<a href='#' class='dropdown-toggle ' data-toggle='dropdown' data-hover='dropdown' data-delay='0' data-close-others='false'>新闻中心 <b class=' icon-angle-down'></b></a>" +
      "<ul class='dropdown-menu'>" +
      "<li><a href='news_center.html'>公司新闻</a></li>" +
      "<li><a href='staggerer.html'>无锡大事件</a></li>" +
      "</ul>" +
      "</li>" +
      "<li id='chanpinLi'><a href='product_service.html'>产品服务</a></li>" +
      "<li id='anliLi'><a href='case.html'>产品图片</a></li>" +
      "<li id='lianxiLi'><a href='ours.html'>联系我们</a></li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  $('#headerHTML').html(header);
}

function getFooter(){
  var footer = "<div class='container'>" +
      "<div class='bottom'>" +
      "<strong>无锡联越金属材料有限公司</strong><br/>" +
      "手机(朱超) : 15896473031<br/>" +
      "电话 : 0510-82027451&nbsp;" +
      "传真 : 0510-82027451<br/>" +
      "<a href='ours.html'>地址: 江苏省无锡市锡山区东北塘街道锡港路177号</a>" +
      "</div>" +
      "</div>";
  $('#footerHTML').html(footer);
}


setInterval("getNowFormatDate()",1000);
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var second = date.getSeconds();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  if(minutes >= 0 && minutes < 10){
    minutes = '0' + minutes;
  }
  if(hour >= 0 && hour < 10){
    hour = '0' + hour;
  }
  if(second >= 0 && second < 10){
    second = '0' + second;
  }
  var currentDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + hour + seperator2 + minutes
      + seperator2 + second;
  $('#date').html(currentDate);
}
