const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenu = document.querySelector('.dropmenu')

toggleBtn.onclick = function () {
    dropMenu.classList.toggle('open')
    const isopen =dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ? 'close'
    : 'grid-outline'
}

const closeBtn = document.querySelector('.icon-close')
const Wrapper = document.querySelector('.wrapper')

closeBtn.onclick = function () {
    Wrapper.classList.toggle('open')
    const isopen =Wrapper.classList.contains('open')
}