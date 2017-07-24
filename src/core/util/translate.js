export function setLanguage(language, reload) {
  localStorage.setItem('core.language', language)

  if (reload) {
    window.location.reload()
  }
}

export function getLanguage() {
  if (!localStorage.getItem('core.language')) {
    setLanguage(navigator.language, false)
  }

  return localStorage.getItem('core.language')
}

export function getPreferentialLanguage() {
  return window.navigator.languages[0] || window.navigator.language
}
