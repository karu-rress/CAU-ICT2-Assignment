/** Enables DEBUG mode.
 * @type {boolean} */
const _DEBUG = false;


/** SNS buttons list
 * @type {NodeListOf<HTMLSpanElement>} */
const sns = document.querySelectorAll('.sns');

/** Radio buttons list
 * @type {NodeListOf<HTMLInputElement>} */
const radio = document.querySelectorAll("input");

/** e-mail 표시창
 * @type {HTMLSpanElement} */
const contact = document.getElementById('contact');

/** SNS 버튼에서 사용하는 주소 링크 */
const snsDict = {
    naverblog: 'https://blog.naver.com/rollingress',
    tistory: 'https://karupro.tistory.com',
    github: 'https://github.com/karu-rress',
};

/** mail 안내에서 사용하는 이메일 주소 */
const mailDict = {
    cau: 'nsun527@cau.ac.kr',
    rr: 'karu.rress@outlook.com',
    gmail: 'nsun5274@gmail.com',
};


// SNS 버튼에 링크 삽입
for (const elem of sns) {
    elem.addEventListener('click', () => { 
        if (elem.id in snsDict) 
            open(snsDict[elem.id], '_blank');
        else
            alert('비공개 SNS입니다.');
    });
}

// radio button 변경시 이메일 변경
for (const elem of radio) {
    elem.addEventListener('change', () => 
        contact.innerText = '📧 ' + mailDict[elem.id]);
}


// 디버그시 3초마다 페이지 자동 새로고침
if (_DEBUG) {
    setInterval(function() { location.reload() }, 3000);
}