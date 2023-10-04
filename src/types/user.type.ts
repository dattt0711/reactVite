type Role = 'User' | 'Admin'
export interface User {
  roles: Role[]
  _id: string
  name: string
  date_of_birth: null
  address: string
  phone: string
  email: string
  createdAt: string
  updatedAt: string
}
