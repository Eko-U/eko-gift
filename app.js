const mainList = document.querySelector(".list");
const sideList = document.querySelector(".side-list");
const sideNav = document.querySelector(".side-nav");
const overlayEl = document.querySelector(".overlay");

const sideMenuBtn = document.querySelector(".menu-outline");
const closeBtn = document.querySelector(".close-outline");

const smoothScrollFn = function (e) {
  e.preventDefault();

  sideNav.classList.add("hidden");
  overlayEl.classList.add("hidden");
  document.body.classList.remove("no-scroll");

  let elID = e.target.href;

  if (elID === undefined) return;
  elID = elID.split("#")[1];

  const ele = document.getElementById(elID);
  ele.scrollIntoView({
    behavior: "smooth",
  });
};

function toggleFn(e) {
  e.preventDefault();
  sideNav.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

mainList.addEventListener("click", smoothScrollFn);
sideList.addEventListener("click", smoothScrollFn);

sideMenuBtn.addEventListener("click", toggleFn);
closeBtn.addEventListener("click", toggleFn);
overlayEl.addEventListener("click", toggleFn);

let tick = false;
let showNotification = false;

document.addEventListener("scroll", function (e) {
  if (!tick) {
    tick = true;

    window.requestAnimationFrame(() => {
      if (
        window.scrollY >= 1200 &&
        window.scrollY <= 2000 &&
        !showNotification
      ) {
        document.querySelector(".notification").classList.toggle("hidden");
        showNotification = true;

        setTimeout(() => {
          document.querySelector(".notification").classList.toggle("hidden");
          showNotification = false;
        }, 1000);
      }

      tick = false;
    });
  }
});
