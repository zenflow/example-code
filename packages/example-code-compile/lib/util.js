function walk(node, callback) {
  callback(node)
  let childNode, i

  if (node.childNodes !== undefined) {
    i = 0
    childNode = node.childNodes[i]
  }

  while (childNode !== undefined) {
    walk(childNode, callback)
    childNode = node.childNodes[++i]
  }
}
function getTextContent(element) {
  let text = ''
  walk(element, element => {
    if (element.nodeName === '#text') {
      text += element.value
    }
  })
  return text.trim()
}

module.exports = {
  walk,
  getTextContent,
}
