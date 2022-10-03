
//menu hamburguer

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//---------------------------------------------------

//Texto animado

const initTypingAnimation = () => {
  const paragrafo1 = document.querySelector('#paragrafo1')
  const titulo = document.querySelector('#sobre .banner h1')
  const subtitulo = document.querySelector('#sobre .banner h2')

  const typingAnimation = (element) => {

      if (element == paragrafo1) {
          element.innerHTML = 'Olá, eu sou o '
          const textToArray = element.innerHTML.split('')
          element.innerHTML = ''

          textToArray.forEach((item, index) => {
              setTimeout(() => element.innerHTML += item, 120 * index)
          })

      } else if (element == titulo) {
          element.innerHTML = 'Pablo Miceli :)'
          const textToArray = element.innerHTML.split('')
          element.innerHTML = ''

          textToArray.forEach((item, index) => {
              setTimeout(() => element.innerHTML += item, 150 * index)
          })

      } else {
          element.innerHTML = 'Designer gráfico e iniciante nas áreas de desenvolvimento web e UI/UX design...'
          const textToArray = element.innerHTML.split('')
          element.innerHTML = ''

          textToArray.forEach((item, index) => {
              setTimeout(() => element.innerHTML += item, 75 * index)
          })

      }
      
  }

  typingAnimation(paragrafo1)
  setTimeout(() => typingAnimation(titulo), 1600)
  setTimeout(() => typingAnimation(subtitulo), 3700)

}

initTypingAnimation()