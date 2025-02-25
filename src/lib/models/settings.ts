import { gun } from "$lib/db"
import { t } from "svelte-i18n"

export interface Settings {
  week_order?: string
  name_order?: string
  circuit_overseer_name?: string
}

//CREATE
export async function createSettings(data: Settings) {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }
  const settings = gun.get("congregations").get(congregationID).get("settings")

  try {
    settings.put({
      week_order: data.week_order ?? "monday",
      name_order: data.name_order ?? "firstname",
      circuit_overseer_name: data.circuit_overseer_name ?? "",
    })

    return settings
  } catch (error) {
    console.error("Error creating settings:", error)
    throw new Error("Failed to create Settings.")
  }
}

//TODO:UPDATE
export async function updateSettings(data: Settings) {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }
  const settings = gun.get("congregations").get(congregationID).get("settings")
  try {
    settings.put({
      week_order: data.week_order ?? "monday",
      name_order: data.name_order ?? "firstname",
      circuit_overseer_name: data.circuit_overseer_name ?? "",
    })

    return settings
  } catch (error) {
    console.error("Error updating settings:", error)
    throw new Error("Failed to update Settings.")
  }
}

//DELETE
export async function deleteSettings() {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }

  try {
    gun.get("congregations").get(congregationID).get("settings").put(null)
  } catch (error) {
    console.error("Error deleting settings:", error)
    throw new Error("Failed to delete settings.")
  }
}

//GET
export async function getSettings(): Promise<Settings | null> {
  const congregationID = localStorage.getItem("congregationID")
  if (!congregationID) {
    throw new Error("Congregation ID is required for settings.")
  }

  return new Promise<Settings | null>((resolve, reject) => {
    gun
      .get("congregations")
      .get(congregationID)
      .get("settings")
      .once(async (data) => {
        if (!data) {
          resolve(null)
          return
        }

        resolve(data as Settings)
      })
  })
}
