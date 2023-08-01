$(document).ready(function() {

    var url1 = $(location).attr('href');

    if (url1.startsWith("https://www.vinted.co.uk/items/new?action=1&action2=")) doWork(url1.split("action2=")[1],1);
    else if (url1, ['https://simsapp.co.uk/', 'login'])
        setLoginCredentials();

    else if (url1, ['localhost:8080', 'login'])
        setLoginCredentials();

});
function getElementsByClassName(className,key){
  image = document.getElementsByClassName(className);
  for (let i = 0; i < image.length; i++) {
    const ele = image[i];
    if (ele.name ===key) return ele;

}
return null;
}
function doWork(url,selection) {
  if(selection==1){
      setTimeout(function() {
          getTotalPages(url);
        //  saveForm(url);
      }, 3000);
  }
  if(selection==2){
      setTimeout(function() {
          selectingDropDowns(url);
        //  saveForm(url);
      }, 1000);
  }
}


function setLoginCredentials() {
    document.getElementById("email").value = "admin@gmail.com";
    document.getElementById("password").value = "admin123";
    document.getElementById("log").click();
}
    function checkNext(x,obj) {
        setTimeout(function() {
             k =getElementsByClassName(x,"brand_id");
             if (k==null) return checkNext(x)
             else return doWork(obj,2)
        }, 3000);
    }
    function checkValidNext(a,x,obj) {
        setTimeout(function() {
             k =getElementsByClassName(x,a);
             if (k==null) return checkValidNext(a,x,obj)
             else return checkNext(x)
        }, 3000);
    }
    // function contineFurther(obj){
    //   image = getElementsByClassName("c-input__value", "material");
    //   if (image.value==="") doWork(obj,2);
    //   else{
    //   loadValues("web_ui__Input__value", "price",obj);
    //   selectPackageSize("item-upload__package-size",obj["parcelSize"]);
    //   }
    // }
    function selectingDropDowns(obj){
      const dropDownElements = document.getElementsByClassName('c-input__content');
      for (let j = 1; j < dropDownElements.length; j++) {
        dropDownElements[j].children[1].click();
        const ele = dropDownElements[j].children[0];
        const name = ele.name;
        if (obj["brand"]!=null && name === 'brand_id') {
          selectBrand(obj["brand"]);
        }
        if (obj["rating"]!=null && name === 'video_game_rating_id') {
          selectRating(obj["rating"]);
        }

        if (obj["conditionId"]!=null && name === 'status_id') {
          //dropDownElements[j].children[1].click();
          selectCondition(obj["conditionId"]);
        }

        if (obj["color"]!=null && name === 'color') {
          //dropDownElements[j].children[1].click();
          selectColor(obj["color"]);

        }
        if (obj["color"]==null && name === 'color') {
          selectColor('Black');
          //checkValidNext('color','c-input__value',obj)
        }

        if (obj["material"]!=null && name === 'material') {
          //dropDownElements[j].children[1].click();
          selectMaterial(obj["material"]);
        }

        if (obj["size"]!=null && name === 'size') {
          //dropDownElements[j].children[1].click();
          selectSize(obj["size"]);
          //checkValidNext('size','c-input__value',obj)
          //waitForNext("c-input__value","size");
        }
        if (obj["parcelSize"]!=null) {
          //dropDownElements[j].children[1].click();
          selectPackageSize(obj["parcelSize"]);
          //checkValidNext('size','c-input__value',obj)
          //waitForNext("c-input__value","size");
        }

      }
    }
    function selectPackageSize(cls,b){
      const dropDownElements = document.getElementsByClassName(cls);
        if(b==='SmallChoose this for light T-shirts and small beauty items.See sizing and compensation details') document.getElementsByClassName(cls)[0].children[0].click();
        if(b==='RecommendedMediumDresses, handbags, and ballet flats will fit into this parcel.See sizing and compensation details')document.getElementsByClassName(cls)[1].children[0].click();
        if(b==='LargeLight coats, trainers, or heavy knitwear? Use a large box.See sizing and compensation details')document.getElementsByClassName(cls)[2].children[0].click();
        if(b==='Recommended5kgA good fit for roller skates and small furnitureSee sizing and compensation details')document.getElementsByClassName(cls)[0].children[0].click();
        if(b==='10kgThe right size for furniture and foldable pushchairsSee sizing and compensation details')document.getElementsByClassName(cls)[1].children[0].click();
        if(b==='20kgFor car seats and other heavy itemsSee sizing and compensation details')document.getElementsByClassName(cls)[2].children[0].click();
    }

function loadValues(a,b,obj){
  element = getElementsByClassName(a,b);
  element.value = obj[b];
}

function getTotalPages(obj) {
    const decodedString = decodeURIComponent(obj);
    const jsonObject = JSON.parse(decodedString);
    console.log(jsonObject);
    image = getElementsByClassName("web_ui__Input__value", "title");
    if (!image.value.endsWith("$")) doWork(obj,1);
    else{
      loadValues("web_ui__Input__value", "description",jsonObject);
      document.getElementsByClassName('c-input__icon')[0].click();
      selectCategory(jsonObject['tooltip']);
      checkNext("c-input__value",jsonObject);
      loadValues("web_ui__Input__value", "price",jsonObject);
      //document.getElementsByClassName('c-input__icon')[1].click();
      //selectBrand(jsonObject['brand']);
    }


}

function selectRating(obj1) {
  var a = document.getElementsByClassName('pile__element');
  for (var i = 0; i < a.length; i++) {
      console.log(obj1 + '==' + a[i].textContent);
      if (obj1 == a[i].textContent) {
          a[i].children[0].click();
      }
  }
}
function selectCondition(obj1) {
  var a = document.getElementsByClassName('pile__element');
  for (var i = 0; i < a.length; i++) {
      console.log(obj1 + '==' + a[i].textContent);
      if (obj1 == a[i].textContent) {
          a[i].children[0].click();
      }
  }
}
function selectMaterial(obj1) {
  var a = document.getElementsByClassName('pile__element');
  for (var i = 0; i < a.length; i++) {
      console.log(obj1 + '==' + a[i].textContent);
      if (obj1 == a[i].textContent) {
          a[i].children[0].click();
      }
  }
}

function selectFeedBack() {
    const button = document.getElementsByClassName('web_ui__Button__content')[8];
    if (button) {
        button.click();
    }
}

function selectSaveDraft() {
    const button = document.getElementsByClassName('web_ui__Button__content')[9];
    if (button) {
        button.click();
    }
}

function selectSave(obj) {
    const button = document.getElementsByClassName('web_ui__Button__content')[10];
    if (button) {
        button.click();
    }
}

function selectSize(obj1) {
  var a = document.getElementsByClassName('pile__element');
  for (var i = 0; i < a.length; i++) {
      console.log(obj1 + '==' + a[i].textContent);
      if (obj1 == a[i].textContent) {
          a[i].children[0].click();
      }
  }
}

function selectBrand(obj1) {
  var a = document.getElementsByClassName('pile__element');
  for (var i = 0; i < a.length; i++) {
      console.log(obj1 + '==' + a[i].textContent);
      if (obj1 == a[i].textContent) {
          a[i].children[0].click();
      }
  }
}
function selectColor(obj1) {
    var a = document.getElementsByClassName('pile__element');
    for (var i = 0; i < a.length; i++) {
        console.log(obj1 + '==' + a[i].textContent);
        if (obj1 == a[i].textContent) {
            a[i].children[0].click();
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
            //console.log(obj + '==' + a[i].textContent);
            if (obj == a[i].textContent) {
                a[i].children[0].click()
            }
        }
    }
}
