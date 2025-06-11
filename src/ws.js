export const ws = new WebSocket("ws://localhost:3001")

ws.onopen = ws => {
  console.log(`Connected to server: ${ws}`)
}

import { useCartStore} from "./stores/cart.js"
ws.onmessage = data => {
  console.log(`Message from server: ${data.data}`)

  const kanbanStore = useCartStore()
  kanbanStore.lists = JSON.parse(data.data)
  //   messages.value = messages.value + "\n" + data.data
}

