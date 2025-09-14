(function () {
  const init = () => {
    const customRadios = document.querySelectorAll(
      ".custom-radio1, .custom-radio2, .custom-radio3, .custom-radio4, .custom-radio5, .custom-radio6",
    );
    const customCheckboxes = document.querySelectorAll(
      ".custom-checkbox7, .custom-checkbox8",
    );
    const customSwitch = document.querySelectorAll(".custom-switch");

    customRadios.forEach((radio) => {
      radio.addEventListener("change", function () {
        const radioGroup = document.querySelectorAll(
          `input[name="${this.name}"]`,
        );
        radioGroup.forEach((r) => {
          const container = r.closest(".relative");
          const circle = container.querySelector(
            'div[class*="text-"]',
          );
          if (r.checked) {
            circle.classList.remove("text-gray-300");
            circle.classList.add("text-cyan-600");
            if (container.querySelector(".absolute.top-0")) {
              container
                .querySelector(".absolute.top-0")
                .classList.add("border-cyan-600");
            }
          } else {
            circle.classList.remove("text-cyan-600");
            circle.classList.add("text-gray-300");
            if (container.querySelector(".absolute.top-0")) {
              container
                .querySelector(".absolute.top-0")
                .classList.remove("border-cyan-600");
            }
          }
        });
      });
    });

    customCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const container = this.closest(".relative");
        const checkDiv = container.querySelector('div[class*="text-"]');
        if (this.checked) {
          checkDiv.classList.remove("text-gray-300");
          checkDiv.classList.add("text-cyan-600");
          if (container.querySelector(".absolute.top-0")) {
            container
              .querySelector(".absolute.top-0")
              .classList.add("border-cyan-600");
          }
        } else {
          checkDiv.classList.remove("text-cyan-600");
          checkDiv.classList.add("text-gray-300");
          if (container.querySelector(".absolute.top-0")) {
            container
              .querySelector(".absolute.top-0")
              .classList.remove("border-cyan-600");
          }
        }
      });
    });

    customSwitch.forEach((switchEl) => {
      switchEl.addEventListener("change", function () {
        const container = this.closest("label");
        const bg = container.querySelector('div[class*="bg-gray"]');
        const dot = container.querySelector(".dot");
        if (this.checked) {
          bg.classList.remove("bg-gray-300");
          bg.classList.add("bg-cyan-600");
          dot.classList.add("translate-x-4");
        } else {
          bg.classList.remove("bg-cyan-600");
          bg.classList.add("bg-gray-300");
          dot.classList.remove("translate-x-4");
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
