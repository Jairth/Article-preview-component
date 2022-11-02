const share = document.querySelector(".card__wrapper")
const btn = document.querySelector(".card__icon")

btn.addEventListener('click', () => {
  share.classList.toggle('active')
  btn.classList.toggle('active')
})