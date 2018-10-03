import { TweenLite, Power2 } from "gsap";

export const animations = {
  AnimateWishMenuOnClose: target => {
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
  },
  AnimateOnRemove: () => {
    let menu = document.querySelector(".menu");
    menu.style.display = "none";
  },
  AnimateAllMenusClose: () => {
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
  },
  AnimateWishMenuOnOpen: target => {
    const duration = 0.15;
    target &&
      TweenLite.fromTo(
        target,
        duration,
        { opacity: "0", transform: `translateY(6px)` },
        { opacity: "1", transform: `translateY(0)` }
      );
  },
  AnimateAddFormOnOpen: () => {
    const duration = 0.4;
    let form = document.querySelector(".add-wish__form");
    TweenLite.fromTo(
      form,
      duration,
      {
        transform: `translateY(100%)`,
      },
      {
        transform: `translateY(10vh)`,
        borderTopLeftRadius: `8px`,
        borderTopRightRadius: `8px`,
        ease: Power2.easeInOut
      }
    );

    let plus = document.querySelector(".plus");
    TweenLite.fromTo(
      plus,
      duration,
      {
        transform: `rotate(0deg)`,
      },
      {
        transform: `rotate(135deg)`,
        ease: Power2.easeInOut
      }
    );
  },
  AnimateAddFormOnClose: () => {
    const duration = 0.4;
    let form = document.querySelector(".add-wish__form");
    TweenLite.fromTo(
      form,
      duration,
      {
        transform: `translateY(10vh)`,
      },
      {
        transform: `translateY(100%)`,
        borderTopLeftRadius: `0px`,
        borderTopRightRadius: `0px`,
        ease: Power2.easeInOut
      }
    );

    let plus = document.querySelector(".plus");
    TweenLite.fromTo(
      plus,
      duration,
      {
        transform: `rotate(135deg)`,
      },
      {
        transform: `rotate(0deg)`,
        ease: Power2.easeInOut
      }
    );
  }
};
