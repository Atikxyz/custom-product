


function product(info) {
  
  var htmlCode = `
   <div class="product">
    <img src="${info.productUrl}" alt="">
    <h3>${info.title}</h3>
    <p>${info.description}</p>

    <a href="${info.productDetailsUrl}" target="_blank">
    <button>details</button></a>
  </div>
  
  `
  return htmlCode;
}

var from=document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var title = e.target.title.value;
  var productUrl = e.target.productUrl.value;
  var productDetailsUrl = e.target.productDetailsUrl.value;
  var description = e.target.description.value;


  var productInfo = {
    title,
    productUrl,
    productDetailsUrl,
    description
  }
   var html=product(productInfo)
  var root = document.querySelector(".root");
  root.innerHTML +=html
})
