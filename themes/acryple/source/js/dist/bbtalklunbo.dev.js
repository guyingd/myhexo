"use strict";

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const AV = require('leancloud-storage');
var _AV = AV,
    Query = _AV.Query,
    User = _AV.User;
AV.init({
  appId: "scoYEr3En3ziMEOiqoPSDobL-MdYXbMMI",
  appKey: "4QmRbUDlm93CCkiz3RopAAyG",
  serverURL: "https://scoyer3e.api.lncldglobal.com"
});
var speaks = [];
var query = new AV.Query('content');
query.find().then(function (talks) {
  for (i = talks.length - 1; i >= 0; i--) {
    speaks.push(talks[i]["attributes"]["content"]);
  }
});

window.onload = function () {
  // function f1(){
  //     var count=1;
  //     setTimeout(function () {
  //         document.getElementsByClassName("shuoshuo")[0].innerHTML=speaks[count%speaks.length];
  //         f1();
  //         count++;
  //     }, 5000);
  //     }
  // var count=0;
  // document.getElementsByClassName("shuoshuo")[0].innerHTML=speaks[count%speaks.length];
  // count++;
  // f1()
  var count = 0;

  function countSecond() {
    document.getElementsByClassName("shuoshuo")[0].innerHTML = speaks[count % speaks.length];
    count++;
    console.log(count);
    setTimeout("countSecond()", 5000);
  }

  countSecond();
};