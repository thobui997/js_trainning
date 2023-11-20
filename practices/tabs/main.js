const tabs = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  const content = tabsContent[index];
  tab.addEventListener("click", function () {
    const tabActive = document.querySelector(".tab-item.active");
    const contentActive = document.querySelector(".tab-content.active");
    tabActive.classList.remove("active");
    contentActive.classList.remove("active");
    tab.classList.add("active");
    content.classList.add("active");
   
  });
});
