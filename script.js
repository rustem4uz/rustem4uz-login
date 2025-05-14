function togglePassword() {
    var pwd = document.getElementById('password')
    var btn = document.querySelector('.toggle-password')
    if (pwd.type === 'password') {
      pwd.type = 'text'
      btn.textContent = 'Скрыть'
    } else {
      pwd.type = 'password'
      btn.textContent = 'Показать'
    }
  }
  
  // клик по соц. ссылкам для флипа
  document.querySelectorAll('.socials a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      document.querySelector('.container').classList.add('flip')
      setTimeout(() => window.location = link.href, 500)
    })
  })
  
  function showAlert() {
    var el = document.getElementById('customAlert')
    el.classList.add('show')
  }
  
  function hideAlert() {
    var alert = document.getElementById('customAlert')
    alert.classList.add('hide')
    setTimeout(() => {
      alert.classList.remove('show', 'hide')
    }, 1000)
  }