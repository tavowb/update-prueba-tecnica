export const errorInputEffect = (miInput) => {
  miInput.classList.remove('succes')
  miInput.classList.add('error')
}

export const succesInputEffect = (miInput) => {
  miInput.classList.remove('error')
  miInput.classList.add('succes')
}

export const clearInputEffect = (miInput) => {
  miInput.classList.remove('succes')
  miInput.classList.remove('error')
}
