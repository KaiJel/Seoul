$(function(){
    const menuOpen = $('.menu-open');
    const more = $('.more');


    //알림마당,공지사항 열기
    menuOpen.click(function() {
        $(this).children('ul').slideToggle(300);
        $(this).children('span').children(more).toggleClass('on');
    })

    // 공지 JSON불러오기
    function loadNoticDate(){
        return fetch('js/data.json')
        .then( response => response.json())
        .then( json => json.noticList);
    }
    function displayNoticData(noticList){
        const list = document.querySelector('.list');
        list.innerHTML += noticList.map(noticList => createHTMLNoticData(noticList)).join('');
    }
    function createHTMLNoticData(noticList){
        return`
        <li class="list__fix">
            <span>공지</span>
            <span><a href="#">${noticList.title}</a></span>
            <span>${noticList.attachment}</span>
            <span>${noticList.writer}</span>
            <span>${noticList.view}</span>
        </li>
        `
    }

    loadNoticDate()
    .then(noticList => {
        displayNoticData(noticList);
        setEventListerners(noticList);
    })
    .catch( console.log('notice'))


    //일반글 JSON불러오기
    function loadNormalDate(){
        return fetch('js/data.json')
        .then( response => response.json())
        .then( json => json.normalList);
    }
    function displayNormalData(normalList){
        const list = document.querySelector('.list');
        list.innerHTML += normalList.map(normalList => createHTMLNormalData(normalList)).join('');
    }
    function createHTMLNormalData(normalList){
        for(let i=0; i<= Object.keys(normalList).length; i++) {
            return`
            <li class="list__normal">
                <span>${i}</span>
                <span><a href="#">${normalList.title}</a></span>
                <span class="attachment">${normalList.attachment}</span>
                <span>${normalList.writer}</span>
                <span>${normalList.view}</span>
            </li>
            `
         }
    }

    loadNormalDate()
    .then(normalList => {
        displayNormalData(normalList);
        setEventListerners(normalList);
    })
    .catch( console.log('normal'))


//만약 span안의 문자가 file이라면 <img src="imgs/ico_file_pc.png" alt="첨부파일"> 로 대체해주기
    function reverse(){
        let chText = document.querySelectorAll('attachment');
        let giveText = chText.innerHTML;
        console.log(givText);
        if(chText.indexOf('file') > -1) { // 이 때 data 변수안에 문자가 존재하면 값은 0이다.
        chText.innerText = '<img src="imgs/ico_file_pc.png" alt="첨부파일">';
        }
    }
    reverse()
    
})


