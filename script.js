$(document).ready(function(){
  var url1 = $(location).attr('href');

if(url1.startsWith("https://www.vinted.co.uk/items/new") && url1.endsWith("?action=1")) doWork();

});
function doWork(){
  setTimeout(function() { getTotalPages(1); }, 3000);
}
function getTotalPages(obj){
  let foo = prompt('Get data');
  alert(foo);
  image = document.getElementsByClassName("web_ui__Image__image web_ui__Image__cover web_ui__Image__square web_ui__Image__rounded web_ui__Image__scaled web_ui__Image__ratio")[0];
  if (image==undefined)doWork();
  else{
    title = document.getElementsByClassName("web_ui__Input__value")[0].value;
    description = document.getElementsByClassName("web_ui__Input__value")[1].value;
    price = document.getElementsByClassName("web_ui__Input__value")[2].value;
    selectCategory(obj1);
    selectBrand(obj1);
    selectSize(obj1);
    selectCondition(obj1);
    selectParcelSize(obj1);
  }
}
function selectCondition(obj1) {
    var d = document.getElementsByClassName('input-dropdown__content')[0].children[0].children[0].children;
    for (var i = 0; i < d.length; i++) {
        console.log(obj + '==' + d[i].textContent);
        if (obj1 == d[i].textContent) {
            d[i].children[0].click();
        }
    }
}
function selectSize(obj1) {
    var c = document.getElementsByClassName('input-dropdown__content')[0].children[0].children[2].children;
    for (var i = 0; i < c.length; i++) {
        console.log(obj + '==' + c[i].textContent);
        if (obj1 == c[i].textContent) {
            c[i].children[0].click();
        }
    }
}
function selectBrand(obj1) {
    var a = document.getElementsByClassName('input-dropdown__content')[0].children[0].children[1].children;
    console.log(a);
    if (a != null) {
        for (var i = 0; i < a.length; i++) {
            console.log(obj + '==' + a[i].textContent);
            if (obj1 == a[i].textContent) {
                a[i].children[0].click();
            }
        }
    } else {
        var b = document.getElementsByClassName('input-dropdown__content')[0].children[0].children[4].children;
        if (b != null) {
            for (var i = 0; i < b.length; i++) {
                console.log(obj + '==' + b[i].textContent);
                if (obj1 == b[i].textContent) {
                    b[i].children[0].click();
                }
            }
        }
    }
}
function selectCategory(obj1) {
    a = document.getElementsByClassName('input-dropdown__content')[0].children[0].children[0].children;
    console.log(a);
    obj2 = obj1.split('/');
    for (var j = 0; j < obj2.length; j++) {
        obj = obj2[j];
        for (var i = 0; i < a.length; i++) {
            console.log(obj + '==' + a[i].textContent);
            if (obj == a[i].textContent) {
                a[i].children[0].click()
            }
        }
    }
}
