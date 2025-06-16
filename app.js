const el = document.querySelector(".list");
const sideMenuEl = document.querySelector(".menu-outline");
const sideNav = document.querySelector(".side-nav");

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

sideMenuEl.addEventListener("click", function () {
  sideNav.classList.toggle("hidden");
});
