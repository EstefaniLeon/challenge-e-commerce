import {adminService} from '../service/admin-services.js'

const formLogin = document.querySelector('[data-type="formLogin"]')

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.querySelector('[data-type="email"]').value
  const password = document.querySelector('[data-type="password"]').value

  try {
    const admins = await adminService.adminList()
    admins.forEach(admin => {
      if (admin.email === email && admin.password === password) {
        window.location.href = '../screens/edit.html'
      } else {
        Swal.fire({
          title: 'Not an admin',
          text: 'You must use the Contact form to communicate with the administrator of the page',
          icon: 'error',
          confirmButtonText: 'Continue'
        }).then(() => {
          window.location.href = '../screens/login.html'
        })
      }
    })
  } catch (error) {
    Swal.fire({
      title: 'There was a mistake!!!',
      text: 'There was an error. Try again later',
      icon: 'error',
      confirmButtonText: 'Continue'
    }).then(() => {
      window.location.href = '../index.html'
    })
  }
})