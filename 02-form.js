import"./assets/styles-Cnd8Xh6F.js";const e=document.querySelector(".feedback-form"),o="feedback-form-data";function a(t){t.preventDefault();const m={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},s=JSON.stringify(m);localStorage.setItem(o,s)}e.addEventListener("submit",a);
//# sourceMappingURL=02-form.js.map
