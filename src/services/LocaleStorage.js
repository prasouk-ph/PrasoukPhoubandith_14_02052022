export function removeItem(item) {
  return window.localStorage.removeItem(item)
}

export function getItem(item) {
  return window.localStorage.getItem(item)
}

export function addItem(itemName, item) {
  return window.localStorage.setItem(itemName, item)
}