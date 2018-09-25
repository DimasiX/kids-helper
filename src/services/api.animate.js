import { TweenLite } from "gsap";

export const AnimateMenuOnClose = () => {
  const duration = 0.25;
  let menu = document.querySelector(".menu");
  menu &&
    TweenLite.fromTo(
      menu,
      duration,
      {
        opacity: "1",
        transform: `translateY(0)`
      },
      {
        opacity: "0",
        transform: `translateY(6px)`
      }
    );
};

export const AnimateWishMenuOnOpen = () => {
  const duration = 0.25;
  let menu = document.querySelector(".menu");
  menu &&
    TweenLite.fromTo(
      menu,
      duration,
      { opacity: "0", transform: `translateY(6px)` },
      { opacity: "1", transform: `translateY(0)` }
    );
};
