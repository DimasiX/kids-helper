import { TweenLite } from "gsap";

export const AnimateMenuOnClose = () => {
  const duration = 0.15;
  let menu = document.querySelector(".menu-leave");
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

export const AnimateWishMenuOnOpen = () => {
  const duration = 0.15;
  let menu = document.querySelector(".menu-enter");
  console.log(menu);
  menu &&
    TweenLite.fromTo(
      menu,
      duration,
      { opacity: "0", transform: `translateY(6px)` },
      { opacity: "1", transform: `translateY(0)` }
    );
};

export const AnimateAddFormOpen = () => {
  const duration = 0.25;
  let form = document.querySelector(".add-wish-form");
  TweenLite.fromTo(
    form,
    duration,
    { transform: `translateY(97%)` },
    { transform: `translateY(0%)` }
  );
  let fromContainer = document.querySelector(".add-wish-form__container");
  fromContainer.style.zIndex = 2;
};

export const AnimateAddFormClose = () => {
  const duration = 0.25;
  let form = document.querySelector(".add-wish-form");
  TweenLite.fromTo(
    form,
    duration,
    { transform: `translateY(0%)` },
    { transform: `translateY(97%)` }
  );
  let fromContainer = document.querySelector(".add-wish-form__container");
  fromContainer.style.zIndex = 0;
};
