(function () {
  function setActiveNav(navKey) {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");

      if (item.getAttribute("data-nav") === navKey) {
        item.classList.add("active");
      }
    });
  }

  function getCurrentPageName() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf("/") + 1) || "homepage.html";
  }

  function applyActiveNavByPage() {
    const page = getCurrentPageName();
    const params = new URLSearchParams(window.location.search);
    const requestedView = params.get("view");

    if (page === "homepage.html" || page === "") {
      if (requestedView === "doctors-view") {
        setActiveNav("doctor");
      } else {
        setActiveNav("home");
      }

      return;
    }

    const pageMap = {
      "booking_hospital.html": "hospital",
      "doctor_view.html": "hospital",
      "doctor_detail.html": "hospital",
      "news.html": "news",
      "booking_list.html": "history",
      "wallet.html": "home",
    };

    setActiveNav(pageMap[page] || "");
  }

  document.addEventListener("DOMContentLoaded", applyActiveNavByPage);

  window.GlobalNav = {
    setActive: setActiveNav,
    refresh: applyActiveNavByPage,
  };
})();