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

export function Modal(title, formContent, onSubmit) {
  const modalBackground = document.createElement("div");
  modalBackground.className = "modalBackground";

  const form = document.createElement("form");
  form.className = "modal-content";
  form.onsubmit = onSubmit;

  for (let i = 0; i < formContent.length; i++) {
    form.appendChild(formContent[i]);
  }

  const modal = document.createElement("div");
  modal.className = "modal";
  if (!!title) {
    modal.innerHTML = `
    <div class="modal-header">
      <span class="modal-title">${title}</span>
      <span class="modal-close">&times;</span>
    </div>
`;

    const modalClose = modal.querySelector(".modal-close");
    modalClose.addEventListener("click", () => {
      modalBackground.remove();
    });
  }

  modal.appendChild(form);

  modalBackground.appendChild(modal);
  return modalBackground;
}
