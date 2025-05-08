function sayHello() {
  document.getElementById('message').innerText = '안녕하세요! 반가워요!'
}

function showInfo(type) {
  let message = ''
  if (type === 'html') {
    message =
      'HTML은 웹페이지의 구조를 정의하는 마크업 언어입니다. 제목, 문단, 링크, 이미지 등 콘텐츠의 뼈대를 구성합니다.'
  } else if (type === 'css') {
    message =
      'CSS는 웹페이지의 스타일을 지정하는 언어입니다. 색상, 크기, 간격, 배치 등을 조절하여 시각적으로 보기 좋게 만듭니다.'
  } else if (type === 'js') {
    message =
      'JavaScript는 웹페이지에 동적인 기능을 부여하는 프로그래밍 언어입니다. 버튼 클릭, 애니메이션, 데이터 처리 등을 할 수 있습니다.'
  }

  const infoBox = document.getElementById('info-box')
  infoBox.innerText = message
  infoBox.style.display = 'block'
}
