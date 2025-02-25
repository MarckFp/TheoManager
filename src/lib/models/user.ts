import { gun } from "$lib/db"

interface IUser {
  id?: string
  firstname: string
  lastname: string
  gender: string
  email?: string
  phone?: string
}
