const smoothScroll = () => {
  const navBar = document.querySelector(".article__nav");
  const links = navBar.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

smoothScroll();
