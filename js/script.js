// 获取ID快捷方式
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
}

// 首页视差滚动
  jQuery(document).ready(function(){
      var target = jQuery("#target");
      
      target
      .children()
      .parallax(
          { mouseport: target },
          { xparallax: 0.05, yparallax: 0.08,xorigin:-0.2,yorigin:0.2},   // Green layer options
          { xparallax: -0.03, yparallax: 0.1,xorigin:0.8,yorigin:0.35}                                      // Red layer options
      );
  });

// 菜单划过显示信息
var menulis = ['关 于 白 熊','表 情 包','海 报','漫 画','杂 物 间','关 于 作 者']
var menudivs = byId('mover').getElementsByTagName("div");

for(var i=0;i<menudivs.length;i++){
  menudivs[i].i=i
  menudivs[i].onmouseover = function (){
    this.style.background = '#171c61';
    this.innerHTML=menulis[this.i];
  };
  menudivs[i].onmouseout = function (){
    this.style.background = 'none';
    this.innerHTML=" ";
  }
}