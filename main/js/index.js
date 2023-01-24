(function() {
    'use strict'
    
    // main_nav-menu-date
    // 현재 날짜 출력 ex.2023-01-19
    const $navDate = document.querySelector('#main_nav-menu-date')
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1; //0부터 시작하므로 1을 더한다.
    let day = date.getDate();

    if (("" + month).length === 1) { month = "0" + month; }
    if (("" + day).length   === 1) { day   = "0" + day;   }
    
    const $today = `${year} - ${month} - ${day}`

    $navDate.innerHTML = $today;


    // main_mobile-menu 메뉴 펼치기
    const $menuBtn = document.querySelector('#main_mobile-menu img')
    const $mobileTap = document.querySelector('#main_mobile-toggle')
    $menuBtn.addEventListener('click', function() {
        $mobileTap.classList.toggle('active')
    })

    // main_mobile-toggle 버티컬 탭
    const tabParent = document.querySelectorAll('.main_mobile-parent li');
    const tapChild = document.querySelectorAll('#main_mobile-child-wrap ul')
    let activeCont = ''; // 현재 활성화 된 컨텐츠 

    for(let i=0; i<tabParent.length; i++) {
        tabParent[i].addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target)
            for(var j = 0; j < tabParent.length; j++){
                // 나머지 버튼 클래스 제거
                tabParent[j].classList.remove('is_on');
        
                // 나머지 컨텐츠 display:none 처리
                tapChild[j].style.display = 'none';
            }
            // 버튼 관련 이벤트
            this.parentNode.classList.add('is_on');

            // 버튼 클릭시 컨텐츠 전환
            activeCont = this.querySelector('a').getAttribute('href');
            document.querySelector(activeCont).style.display = 'flex';
        });
    }


    // con3 기숙사 점수 카운팅
    const counter = ($counter, max) => {
        let now = max;
      
        const handle = setInterval(() => {
          $counter.innerHTML = Math.ceil(max - now);
        
          // 목표수치에 도달하면 정지
          if (now < 1) {
            clearInterval(handle);
          }
          
          // 증가되는 값이 계속하여 작아짐
          const step = now / 10;
          
          // 값을 적용시키면서 다음 차례에 영향을 끼침
          now -= step;
        }, 50);
      }
      
      window.onload = () => {
        // 카운트를 적용시킬 요소
        const $counter = document.querySelector(".main_con3-score > h3");
        
        // 목표 수치
        const max = 17249;
        
        setTimeout(() => counter($counter, max), 2000);
      }
    
    // con6
    // con6 card list 가져오기
    let cardList = null;

    function getData() {
        fetch('js/mainProfessor.json')
        .then(res => res.json())
        .then(result => {
            cardList = result;
            makeList(result);
        })
    }

    function makeList(items) {
        $cardWrapper.innerHTML = null;
        items.forEach((item, idx) => {
            const result = makeItem(item);
            $cardWrapper.appendChild(result);
        })
    }

    function makeItem(item, idx) {
        const div = document.createElement('div');
        div.classList.add('main_con6_card');


        div.innerHTML = `
                <div class="main_con6_card-front">
                <div class="main_con6_card-border">
                    <p>${item.front_num}</p>
                    <img src="${item.front_icon}" alt="">
                    <p>${item.front_subject}</p>
                </div>
                </div>
                <div class="main_con6_card-back" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.78%, rgba(0, 0, 0, 0.8) 100%), url('${item.back_img}'); background-size: cover;" >
                    <div>
                        <span>${item.back_subject}</span>
                        <span>${item.back_professor}</span>
                    </div>
                </div>
        `;
        return div;
    } 


    getData();
    const $cardWrapper = document.querySelector('.main_con6_card-wrapper')

    // con6 card flip
    // $card.addEventListener('click', flipper)

    // function flipper (e) {
    //     const cardTarget = e.currentTarget;
    //     cardTarget.style.transform = 'rotateY(180deg)'
    //     cardTarget.addEventListener('click', backFlipper);
    // };

    // function backFlipper(e) {
    //     const cardTarget = e.currentTarget;
    //     cardTarget.style.transform = 'rotateY(0deg)'
    //     cardTarget.addEventListener('click', flipper);
    //     cardTarget.removeEventListener('click', backFlipper);
    // }

    // 텍스트 좌우 롤링


})();
