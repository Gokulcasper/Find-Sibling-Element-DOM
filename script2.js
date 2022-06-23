// Clone Elements:

const ListEl = document.querySelector("#input-list");
const duplicateEl = document.getElementById("duplicate");
const duplicateBtn = document.getElementById("duplicate-btn");

duplicateBtn.addEventListener("click", () => {
  duplicateEl.innerHTML = "";

  const cloneEl = ListEl.cloneNode(true);

  duplicateEl.append(cloneEl);
});
