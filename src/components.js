export function Button(buttonText, onClickFunction) {
  const button = document.createElement("button");
  button.innerText = buttonText;
  button.className = "button";
  button.onclick = onClickFunction;
  return button;
}

export function Input(id, placeholder, labelText) {
  const input = document.createElement("input");
  input.placeholder = placeholder ? placeholder : "";
  input.className = "input";
  input.id = id;
  input.required = true;
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "inputWrapper";
  if (labelText) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;
    inputWrapper.appendChild(label);
  }
  inputWrapper.appendChild(input);
  return inputWrapper;
}

