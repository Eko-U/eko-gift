const el = document.querySelector(".list");
const sideNav = document.querySelector(".side-nav");
const overlayEl = document.querySelector(".overlay");

const sideMenuBtn = document.querySelector(".menu-outline");
const closeBtn = document.querySelector(".close-outline");

el.addEventListener("click", function (e) {
  e.preventDefault();
  let elID = e.target.href;

  if (elID === undefined) return;
  elID = elID.split("#")[1];
  console.log(elID);

  const ele = document.getElementById(elID);
  console.log(ele);
  ele.scrollIntoView({
    behavior: "smooth",
  });
});

function toggleFn(e) {
  e.preventDefault();
  sideNav.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

sideMenuBtn.addEventListener("click", toggleFn);
closeBtn.addEventListener("click", toggleFn);
overlayEl.addEventListener("click", toggleFn);
