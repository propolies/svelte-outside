export function clickOutside(node: Node, callback: (node: Node) => void) {
  return outside(node, "click", callback)
}

export function tapOutside(node: Node, callback: (node: Node) => void) {
  return outside(node, "mousedown", callback)
}

function outside(node: Node, listener: string, callback: (node: Node) => void) {
  
  const handleClick = (event: Event) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      callback(node)
    }
  }

  document.addEventListener(listener, handleClick)
  
  return {
    destroy() {
      document.removeEventListener(listener, handleClick)
    }
  }
}