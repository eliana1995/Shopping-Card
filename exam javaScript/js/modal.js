let modalWrap = null;

let btn;
const observer = new MutationObserver(function () {
  if (document.querySelector("#btn")) {
    btn = document.querySelector("#btn");
    btn.addEventListener("click", showModal);

    observer.disconnect();
  }
});

let target = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };
observer.observe(target, config);

const showModal = () => {
  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `<div class="modal" tabindex="-1">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title">${product.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p>${product.description}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
    </div>
</div>
</div>`;

  document.body.append(modalWrap);
  const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};
