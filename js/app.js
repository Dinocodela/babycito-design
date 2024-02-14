const boxCnt = document.querySelectorAll(".box_content_area");
const boxDot = document.querySelector(".box_dot ol");
const boxWrapper = document.querySelector(".box_wrapper");

// creating dots
for (let i = 1; i <= boxCnt.length; i++) {
  boxDot.innerHTML += `<li><span></span></li>`;
}

// geting dots
const spanDot = document.querySelectorAll(".box_dot ol li span");

spanDot.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove "itemActive" class from all items
    spanDot.forEach((item) => {
      item.classList.remove("itemActive");
    });

    // Add "itemActive" class to the clicked item
    item.classList.add("itemActive");

    // Update boxWrapper transform
    boxWrapper.style.transform = `translateX(${index * -340}px)`;
  });
});

// code for 2nd slider
const blgCnt = document.querySelectorAll(".box_area_rbs");
const blgDot = document.querySelector(".blgdot ol");
const blogWrapper = document.querySelector(".blog_wrapper");

// creating dots
for (let i = 1; i <= blgCnt.length; i++) {
  blgDot.innerHTML += `<li><span></span></li>`;
}

const spanBlgDot = document.querySelectorAll(".blgdot ol li span");

spanBlgDot.forEach((item, index) => {
  item.addEventListener("click", () => {
    spanBlgDot.forEach((item) => {
      item.classList.remove("itemActive");
    });

    item.classList.add("itemActive");

    blogWrapper.style.transform = `translateX(${index * -360}px)`;
  });
});

// code for dropdown
const dropdownItems = document.querySelectorAll(".dropdown_cnt_wrapper a");
const dropholder = document.querySelector("label.dropbtn span");

dropdownItems.forEach((item) => {
  item.setAttribute("href", "JavaScript:void(0)");
  item.addEventListener("click", () => {
    const itemTextWrapper = item.textContent;
    dropholder.textContent = itemTextWrapper;
  });
});
