//main.js

$(document).ready(function(){
  //1. 모달 변수 생성하기
  const modal=`
  <div class="modal">
    <div class="inner">
      <a href="#" title="배너">
        <img src="./images/main_Popup_PC_450x600.jpg" alt="">
      </a>
      <p>
        <input type="checkbox" id="ch">
        <label for="ch">일주일 간 창 보지 않기</label>
        <input type="button" value="닫기" id="c_btn">  
      </p>
    </div>
  </div>
`;

// 모달변수를 body의 맨 뒤쪽에 출력한다.
$('body').append(modal);

//쿠키생성하기
let ch = $('.modal #ch');  //체크박스 변수

//현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지 않게함.
if($.cookie('popup')=='none'){
  $('.modal').hide();
}
//쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도 숨기기
function closeModal(){
  if(ch.is(':checked')){ //만약에 체크박스에 체크가 된 경우라면
    //쿠키를 생성하기
    $.cookie('popup', 'none', {expires:7, path:'/'});
  }
  //체크박스에 체크 안한 경우 그냥 모달 숨기기
  $('.modal').hide();
}

//닫기 버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기 한다.
$('.modal #c_btn').click(function(){
  closeModal();
});

$('header').mouseenter(function(){
  $('header').addClass('h_act');
  $('header h1 img').attr('src','./images/logo-casper_black.png');
});

$('header').mouseleave(function(){
  if($(window).scrollTop()<=1){
  $('header').removeClass('h_act');
  $('header h1 img').attr('src','./images/logo-casper-white.png');
  }else{

  }
});

// 헤더가 올라가면 헤더 고정하기
$(window).scroll(function(){
  let sPos = $(this).scrollTop();//세로스크롤값
  console.log(sPos);

  if(sPos>=70){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper_black.png');

    // $('header').mouseleave(function(){
    //   $('header').addClass('h_act');
    //   $('header h1 img').attr('src','./images/logo-casper_black.png');
    // });
  }else{
    $('header').removeClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper-white.png');

    // $('header').mouseleave(function(){
    //   $('header').removeClass('h_act');
    //   $('header h1 img').attr('src','./images/logo-casper-white.png');
    // });
  }

});



// 이벤트 랜덤배너
let r_num = Math.floor(Math.random()*3)+1;
console.log(r_num);
const r_banner = document.getElementById('ran_img');
r_banner.src='./images/ran_banner0'+r_num+'.jpg';

});