/** @type {boolean} */
const _DEBUG = false;


// SNS 버튼에 링크 삽입
/** @type {NodeListOf<HTMLSpanElement>} */
const sns = document.querySelectorAll('.sns');
for (const elem of sns) {
    elem.addEventListener('click', () => { switch (elem.id) {
        case 'naverblog':
            open('https://blog.naver.com/rollingress', '_blank');
            return;
        case 'tistory':
            open('https://karupro.tistory.com', '_blank');
            return;
        default:
            alert('비공개 SNS입니다.');
            return;
    }});
}


// 디버그시 3초마다 페이지 자동 새로고침
if (_DEBUG) {
    setInterval(function() { location.reload() }, 3000);
}