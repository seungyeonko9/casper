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

  //1. 내비게이션 변수선언
  let nav = $('#m_navi > ul > li');

  //2. 클릭시 해당 아이디값을 찾아서 페이지를 상단으로 scroll해서 올린다.

  nav.click(function(e){
    e.preventDefault();

    let i = $(this).index();
    console.log(i); //0,1,2,3,4
    //$('html, body').animate({scrollTop:'0px'},500);

    let offTop = $('main section').offset().top;
    //두번째 방법 id값을 가져와서 구현하는 법
    // let id_name=$(this).attr('href');
    // let offTop = $(id_name).offset().top;
    // $('html, body').animate({scrollTop:offTop},500);

    //첫번째 방법 - if문을 사용하여 구현하기
    //i가 0일때 1번째 section(#intro)을 선택
    if(i==0){
      $('html, body').animate({scrollTop:$('#intro').offset().top},500);
    }else if(i==1){
    //i가 1일때 2번째 section(#drive_con)을 선택
      $('html, body').animate({scrollTop:$('#drive_con').offset().top},500);
    }else if(i==2){
      //i가 2일때 3번째 section(#event_con)을 선택
      $('html, body').animate({scrollTop:$('#event_con').offset().top},500);
    }else if(i==3){
      //i가 3일때 4번째 section(#buy_con)을 선택
      $('html, body').animate({scrollTop:$('#buy_con').offset().top},500);
    }else{
      //i가 4일때 5번째 section(#cs_con)을 선택
      $('html, body').animate({scrollTop:$('#cs_con').offset().top},500);
    }
  });

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

$('header').mouseleave(function(){ //마우스를 빼는 경우
  if($(window).scrollTop()<=1){ //스크롤값이 70이상일 경우 아래내용 실행
    $('header').removeClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper-white.png');
  }
});

// 헤더가 올라가면 헤더 고정하기
$(window).scroll(function(){
  let sPos = $(this).scrollTop();//세로스크롤값
  console.log(sPos);

  if(sPos>=1){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper_black.png');
    //화면이 내려왔을 경우 - 마우스를 헤더에서 빼면
    // $('header').mouseleave(function(){
    //   $('header').addClass('h_act');
    //   $('header h1 img').attr('src','./images/logo-casper_black.png');
    // });

  }else{
    $('header').removeClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper-white.png');
    //화면이 올라갔을 경우 - 마우스를 헤더에서 빼면
    // $('header').mouseleave(function(){
    //   $('header').removeClass('h_act');
    //   $('header h1 img').attr('src','./images/logo-casper-white.png');
    // });
  }
  
  if(sPos>=1650){
    $('.intro_title_left').addClass('act1');
    $('.intro_title_right').addClass('act2');
  }
});

// 이벤트 랜덤배너
let r_num = Math.floor(Math.random()*3)+1;
console.log(r_num);
const r_banner = document.getElementById('ran_img');
r_banner.src='./images/ran_banner0'+r_num+'.jpg';
});