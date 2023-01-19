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
})();


