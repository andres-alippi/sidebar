let barIsOpen = false

DOM = {
  logo: document.querySelector('div #logo'),
  spacer: document.querySelector('div.spacer'),
  userInfo: document.querySelector('#user-info')
}

Bar = {
  open() {
    DOM.spacer.classList.remove('bar-close')
    DOM.spacer.classList.add('bar-open')
    DOM.logo.classList.remove('hide-elements')
    DOM.logo.classList.add('show-elements')
    DOM.userInfo.classList.remove('hide-elements')
    DOM.userInfo.classList.add('show-elements')
  },
  close() {
    DOM.spacer.classList.remove('bar-open')
    DOM.spacer.classList.add('bar-close')
    DOM.logo.classList.remove('show-elements')
    DOM.logo.classList.add('hide-elements')
    DOM.userInfo.classList.remove('show-elements')
    DOM.userInfo.classList.add('hide-elements')
  },
  toggle() {
    barIsOpen ? Bar.close() : Bar.open()
    barIsOpen = !barIsOpen
  }
}
