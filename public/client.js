document.querySelectorAll("form")
  .forEach(f => f.addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const { action, method } = form;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }));