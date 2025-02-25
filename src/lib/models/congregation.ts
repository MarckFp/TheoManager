import { gun } from "$lib/db"
import { createSettings } from "$lib/models/settings"

export interface Congregation {
  id?: string
  name: string
  password: string
  jw_code?: string
  address?: string
  city?: string
  zipcode?: string
  country?: string
  midweek_day?: string
  midweek_time?: string
  weekend_day?: string
  weekend_time?: string
}

//CREATE
export async function createCongregation(congregationData: Congregation) {
  const keyPair = await Gun.SEA.pair()
  const congregationID = keyPair.pub
  const congregation = gun.get("congregations").get(congregationID)

  try {
    const encryptedPassword = await Gun.SEA.encrypt(
      congregationData.password,
      keyPair
    )

    congregation.put({
      id: congregationID,
      name: congregationData.name,
      password: encryptedPassword,
      jw_code: congregationData.jw_code ?? "",
      address: congregationData.address ?? "",
      city: congregationData.city ?? "",
      zipcode: congregationData.zipcode ?? "",
      country: congregationData.country ?? "",
      midweek_day: congregationData.midweek_day ?? "",
      midweek_time: congregationData.midweek_time ?? "",
      weekend_day: congregationData.weekend_day ?? "",
      weekend_time: congregationData.weekend_time ?? "",
    })

    localStorage.setItem("congregationID", congregationID)
    localStorage.setItem("congregationKeyPair", JSON.stringify(keyPair))

    createSettings({})
    return congregationID
  } catch (error) {
    console.error("Error creating congregation:", error)
    throw new Error("Failed to create congregation.")
  }
}

//UPDATE
export async function updateCongregation(congregationData: Congregation) {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }
  const congregation = gun.get("congregations").get(congregationID)

  try {
    if (congregationData.password) {
      const keyPairString = localStorage.getItem("congregationKeyPair")
      if (!keyPairString) {
        return
      }
      const keyPair = JSON.parse(keyPairString)
      congregationData.password = await Gun.SEA.encrypt(
        congregationData.password,
        keyPair
      )
    }

    congregation.put({
      id: congregationID,
      name: congregationData.name,
      password: congregationData.password,
      jw_code: congregationData.jw_code ?? "",
      address: congregationData.address ?? "",
      city: congregationData.city ?? "",
      zipcode: congregationData.zipcode ?? "",
      country: congregationData.country ?? "",
      midweek_day: congregationData.midweek_day ?? "",
      midweek_time: congregationData.midweek_time ?? "",
      weekend_day: congregationData.weekend_day ?? "",
      weekend_time: congregationData.weekend_time ?? "",
    })
    return congregationID
  } catch (error) {
    console.error("Error updating congregation:", error)
    throw new Error("Failed to update congregation.")
  }
}

//DELETE
export async function deleteCongregation() {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }

  try {
    gun.get("congregations").get(congregationID).put(null)
    localStorage.removeItem("congregationID")
    localStorage.removeItem("congregationKeyPair")
  } catch (error) {
    console.error("Error deleting congregation:", error)
    throw new Error("Failed to delete congregation.")
  }
}

//GET
export async function getCongregation(): Promise<Congregation | null> {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }
  return new Promise<Congregation | null>((resolve, reject) => {
    gun
      .get("congregations")
      .get(congregationID)
      .once(async (data) => {
        if (!data) {
          resolve(null)
          return
        }

        try {
          const keyPairString = localStorage.getItem("congregationKeyPair")
          if (!keyPairString) {
            resolve({ ...data, password: "" } as Congregation)
            return
          }
          const keyPair = JSON.parse(keyPairString)
          const decryptedPassword = await Gun.SEA.decrypt(
            data.password,
            keyPair
          )
          resolve({
            ...data,
            password: decryptedPassword ?? "",
          } as Congregation)
        } catch (error) {
          console.error("Error decrypting password:", error)
          reject(new Error("Failed to retrieve congregation."))
        }
      })
  })
}
