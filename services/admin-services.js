// Get all admins
const adminList = () => fetch('http://localhost:3000/admins').then(res => res.json())

export const adminService = {
  adminList
}