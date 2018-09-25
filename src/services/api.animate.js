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

export const AnimateAddFormOpen = () => {
  const duration = 0.25;
  let form = document.querySelector(".add-wish-form");
  let formContainer = document.querySelector(".add-wish-form__container");
  TweenLite.fromTo(
    form,
    duration,
    { transform: `translateY(97%)` },
    { transform: `translateY(0%)` }
  );
  TweenLite.to(formContainer, 0, { zIndex: "2" });
};

export const AnimateAddFormClose = () => {
  const duration = 0.25;
  let form = document.querySelector(".add-wish-form");
  let formContainer = document.querySelector(".add-wish-form__container");
  TweenLite.fromTo(
    form,
    duration,
    { transform: `translateY(0%)` },
    { transform: `translateY(97%)` }
  );
  TweenLite.to(formContainer, 0, { zIndex: "0" });
};
