const scrollToTop = () => {
  const toTop = document.querySelector(".button-up");

  window.onscroll = () => {
    // const hasScrolling = !(window.scrollX === 0 && window.scrollY === 0);
    // let scroll = {
    //   hasScrolling: hasScrolling,
    //   scrollY: Math.round(scrollY),
    // };

    if (scrollY >= 800) {
      toTop.classList.add("_active");
    } else {
      toTop.classList.remove("_active");
    }
  };

  toTop.addEventListener("click", () => {
    seamless.scrollIntoView(document.querySelector("#header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};

scrollToTop();
