window.addEventListener("load", function() {
    const IntroName = document.querySelectorAll('#intro_name_list > li');   //파버카스텔 이름
    const IntroSince=document.querySelectorAll('#intro_since_list > li');   // 연도
    const IntroImg=document.querySelector('#intro_img') //이미지
    const delay1=130;   // 파버카스텔 이름 타이핑 속도 조정
    const delay2=100;   // 연도 타이핑 속도 조절
    let nameIndex=0;
    let sinceIndex=0;
    let typingInterval=null;
    let typingInterval2=null;

    showIntroImg(); // 이미지 나오는 효과
    startTyping();  //타이핑 효과

    function showIntroImg(){
        gsap.to(IntroImg,{width:146+'px',opacity:1,delay:0.2,duration:0.7,ease:'none.none'})
    }
    function startTyping(){
      typingInterval=setInterval(IntroNameTyping, delay1);
      typingInterval2=setInterval(IntroSinceTyping, delay2);
    }

    function IntroNameTyping(){
      if (nameIndex<IntroName.length) {
        const IntroNameBox=IntroName[nameIndex];
        gsap.to(IntroNameBox,{display:'block',opacity:1,delay:0.2,duration:0.5,ease:'power1.out'})
        nameIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }
    function IntroSinceTyping(){
      if (sinceIndex < IntroSince.length) {
        const IntroSincBox=IntroSince[sinceIndex];
        gsap.to(IntroSincBox,{display:'block',opacity:1,delay:1.2,duration:0.4,ease:'power1.out'})
        sinceIndex++;
      } else {
        clearInterval(typingInterval2);
      }
    }
    
  });
