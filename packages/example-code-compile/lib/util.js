function walk(node, callback) {
  if (callback(node) === false) {
    return false
  } else {
    let childNode, i

    if (node.childNodes !== undefined) {
      i = 0
      childNode = node.childNodes[i]
    }

    while (childNode !== undefined) {
      if (walk(childNode, callback) === false) {
        return false
      } else {
        childNode = node.childNodes[++i]
      }
    }
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
