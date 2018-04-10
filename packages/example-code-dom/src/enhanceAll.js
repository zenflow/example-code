import { enhanceElement } from './enhanceElement'

export function enhanceAll(options) {
  for (const element of document.querySelectorAll('code')) {
    enhanceElement(element, options)
  }
}
