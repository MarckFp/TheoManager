import Gun from 'gun'
import 'gun/sea'
import 'gun/lib/webrtc'

const gun = Gun({
  peers: []
})

export default gun
