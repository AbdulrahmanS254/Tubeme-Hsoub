$(document).ready(function () {
   $("#myBtn").click(function () {
      read();
   });

   $(".reply").click(function () {
      $(this).parents("div.row").next(".card-inner").slideToggle();
   });
   //    The next() method returns the next sibling element
});

function read() {
   var dot = document.getElementById("dots");
   var moreText = document.getElementById("extend");
   var btnText = document.getElementById("myBtn");

   if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";
   } else {
      dot.style.display = "none";
      btnText.innerHTML = "عرض عناصر اقل";
      moreText.style.display = "inline";
   }
}
