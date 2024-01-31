//Header 스크롤액션
var lastScrollTop = 0;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop(); 

    if(scrollTop >= 100) {
        if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) { 
            
            $("header").css("top","-150px");
        } else {
            $("header").css("top","0px");
        }

        lastScrollTop = scrollTop;
    } 

});

//Background 스크롤에 따른 색상 변경
  $(window).scroll(function() {
  
    var $window = $(window),
        $body = $('.index-body'),
        $panel = $('.color-panel');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();

//nav변경 토글버튼
  $(".tabout-obj-btn").click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

//단순 이미지 변경
  $(".change-obj-btn").click(function(){
    $(this).toggleClass("active");
  })