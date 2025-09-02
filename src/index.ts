export function clickOutside(node: Node, callback: (node: Event) => void) {
  return outside(node, "click", callback);
}

export function tapOutside(node: Node, callback: (node: Event) => void) {
  return outside(node, "mousedown", callback);
}

function outside(
  node: Node,
  listener: string,
  callback: (node: Event) => void
) {
  const handleClick = (event: Event) => {
    if (
      node &&
      !node.contains(event.target as Node) &&
      !event.defaultPrevented
    ) {
      callback(event);
    }
  };

  document.addEventListener(listener, handleClick);

  return {
    destroy() {
      document.removeEventListener(listener, handleClick);
    },
  };
}
