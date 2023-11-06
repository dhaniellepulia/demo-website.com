function openMenu() {
  var x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const div = document.getElementById("clickWrapper");

div.addEventListener("click", () => {
  if (div.childNodes[0].classList.contains("close")) {
    div.childNodes[0].className = "menu animate";
  } else {
    div.childNodes[0].className = "close animate";
  }
});

var acc = document.getElementsByClassName("products-dropdown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = document.querySelector(".mobile-dropdown-content");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  $(".banner-carousel").slick({
    dots: true,
    autoplay: true,
  });

  $(".tab-item[data-category='all']").addClass("active");

  $(".tab-item").click(function () {
    $(".tab-item").removeClass("active");

    $(this).addClass("active");

    var selectedCategory = $(this).data("category");

    $(".homepage-product-item").each(function () {
      var productCategory = $(this).data("category");
      if (selectedCategory === "all" || selectedCategory === productCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
