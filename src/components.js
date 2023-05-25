export function Button(buttonText, onClickFunction) {
  const button = document.createElement("button");
  button.innerText = buttonText;
  button.className = "button";
  button.onclick = onClickFunction;
  return button;
}

