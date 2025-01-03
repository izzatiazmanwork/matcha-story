const header = document.querySelector(".header-cont"),
  letters = document.querySelectorAll(".letter"),
  websiteContent = document.querySelector(".website-content");

let lastScroll = 0;
const sectionHeight = 150;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY < 850) {
    websiteContent.style.position = "fixed";
    websiteContent.style.top = "0px";
  } else {
    websiteContent.style.position = "absolute";
    websiteContent.style.top = "850px";
  }

  const orderPairs = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ];

  orderPairs.forEach((pair, orderIndex) => {
    const startScroll = sectionHeight * orderIndex;

    if (scrollY >= startScroll) {
      const moveFactor = Math.min(1, (scrollY - startScroll) / sectionHeight);
      const translateY = -moveFactor * header.offsetHeight;

      pair.forEach((index) => {
        const letter = letters[index];
        gsap.to(letter, {
          y: translateY,
          zIndex: 1 - moveFactor
        });
      });
    } else {
      pair.forEach((index) => {
        const letter = letters[index];
        gsap.to(letter, {
          y: 0,
          zIndex: 1
        });
      });
    }
  });
  lastScroll = scrollY;
});


