import Gun from "gun/gun"
import "gun/sea"
//TODO: I think AXE is needed when trying to sync data between multiple peers
//import 'gun/axe'
import "gun/lib/radix"
import "gun/lib/radisk"
import "gun/lib/store"
import "gun/lib/rindexed"

export const gun = Gun({
  peers: [],
  localStorage: false,
})
