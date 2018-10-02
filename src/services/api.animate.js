import { TweenLite } from "gsap";

export const AnimateWishMenuOnClose = target => {
  const duration = 0.15;
  target &&
    TweenLite.fromTo(
      target,
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

export const AnimateOnRemove = () => {
  let menu = document.querySelector(".menu");
  menu.style.display = "none";
};

export const AnimateAllMenusClose = () => {
  const duration = 0.15;
  let menu = document.querySelectorAll(".menu");
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

export const AnimateWishMenuOnOpen = target => {
  const duration = 0.15;
  target &&
    TweenLite.fromTo(
      target,
      duration,
      { opacity: "0", transform: `translateY(6px)` },
      { opacity: "1", transform: `translateY(0)` }
    );
};

export const AnimateAddFormOnOpen = () => {
  const duration = .25;
  let form = document.querySelector(".add-wish__form");
  TweenLite.fromTo(form, duration, {
    transform: `translateY(90vh)`
  }, {
    transform: `translateY(0%)`
  });
};
