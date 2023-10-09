export default function processItems(items) {
  return items.filter(item => item.type === "Food")
}
