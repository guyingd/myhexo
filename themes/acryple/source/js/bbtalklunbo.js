
AV.init({
    appId: "scoYEr3En3ziMEOiqoPSDobL-MdYXbMMI",
    appKey: "4QmRbUDlm93CCkiz3RopAAyG",
    serverURL: "https://scoyer3e.api.lncldglobal.com"
});
var speaks=[];
const query = new AV.Query('content');
query.find().then((talks) => {
    for(i=talks.length-1;i>=0;i--){
        speaks.push(talks[i]["attributes"]["content"]);
    }
    
});
window.onload=function(){
var count=0;
document.getElementsByClassName("shuoshuo")[0].innerHTML=speaks[count%speaks.length];
    count++;
setInterval(()=>{
    document.getElementsByClassName("shuoshuo")[0].innerHTML=speaks[count%speaks.length];
    count++;
},5000)
}
