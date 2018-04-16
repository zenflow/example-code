module.exports = `\
div.example-code-buttons {
  position: absolute;
  right: 0;
  font-size: 18px;
}

div.example-code-buttons > button {
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.5;
  transition-property: opacity;
  transition-duration: 500ms;
}

div.example-code-buttons > button:hover {
  opacity: 1;
}
`
