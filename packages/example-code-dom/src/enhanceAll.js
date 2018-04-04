import { enhance } from './enhance'

export function enhanceAll() {
  enhance(document.querySelectorAll('code'))
}
