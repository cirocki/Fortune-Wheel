import gsap from "gsap";
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let pos = 0;
export const randomRotate = selector => {
  let x = randomNumber(720, 1440); //between 2-4 wheel turns
  pos = pos + x;
  gsap.to(selector, {
    duration: 3,
    rotation: pos,
    transformOrigin: "50% 50%",
    ease: " power4. out"
  });
};
