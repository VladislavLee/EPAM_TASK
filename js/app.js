var array = new Array();

var currentId;
var valid=true;

class Product{
    constructor(name,count,price,id){
      this.name=name;
      this.count=count;
      this.price=price;
      this.id=id;
    }
    
    getName(){
      return this.name;
    }

    getCount(){
      return this.count;
    }

    getPrice(){
      return this.price;
    }

    getId(){
      return this.id;
    }

    changeThis (){
      this.name = document.getElementById('newName').value;
      this.count = document.getElementById('newCount').value;
      this.price = document.getElementById('newPrice').value;
    }

    createElement(id){
      var doc = document.getElementById("blockContainer");
      var node = document.createElement("div");
      var nameDiv = document.createElement('div');
      var countDiv = document.createElement('div');
      var priceDiv = document.createElement('div');
      var actionDiv = document.createElement('div');
      var buttonEdit = document.createElement('button');
      var buttonDelete = document.createElement('button');

      node.className="elementNode";
      nameDiv.className="nameDiv";
      countDiv.className="countDiv";
      priceDiv.className="priceDiv";
      actionDiv.className ="actionDiv";  
      buttonEdit.className="ID";
      buttonDelete.className="ID";

      nameDiv.innerHTML=this.name;
      countDiv.innerHTML=this.count;
      priceDiv.innerHTML=this.price;

      buttonEdit.innerHTML = "Edit";
      buttonDelete.innerHTML = "Delete";
      buttonEdit.value = id;
      buttonDelete.value=id;

      buttonEdit.onclick = function myEdit(){
      currentId = id;
      var myButton=document.getElementById("add");
      myButton.value='update';}

      buttonDelete.onclick =  function myDelete(){
      var Conf = confirm("Подтвердить удаление");
      if(Conf){
        array.splice(buttonDelete.value,1); 
        rePaint(array);
        i--;
        } else return false;
      }

      node.appendChild(nameDiv);
      node.appendChild(countDiv);
      node.appendChild(priceDiv);
      node.appendChild(actionDiv);
      actionDiv.appendChild(buttonEdit);
      actionDiv.appendChild(buttonDelete);  
      doc.appendChild(node); 
    }
}

var i =0;


function ReturnNewElement(id){
    var name = document.getElementById('newName').value;
    var count = document.getElementById('newCount').value;
    var price = document.getElementById('newPrice').value;
    return new Product( name,count,price,id);
}


function createNewElement(){
  var myButton=document.getElementById("add");
  if(myButton.value==="update"){
    if(Validation()){
      array[currentId].changeThis();
      rePaint(array);
    }
  }else{ 
    if(Validation()){
      var pr = ReturnNewElement();
      pr.createElement(i);
      array[i]=pr;
      i++;
    }
  }
}  


function filtr(){
  var mainStr;
  var myStr =document.getElementById('input-search').value ;
  myStr=myStr.toLowerCase();
  var arr=[];
  var j=0;
  for(var i =0 ; i<array.length;i++){
    var prod = array[i];
    mainStr=prod.getName();
    mainStr = mainStr.toLowerCase();
    var pos = mainStr.indexOf(myStr);
    if(pos>-1){
      arr[j]=prod;
      j++;
    }
  }
  rePaint(arr);
}


function rePaint(arr){
  var doc = document.getElementById("blockContainer");
  doc.innerHTML="";
  for(var i=0; i<arr.length; i++){
      arr[i].createElement(i);
  }
}


var f=true;
function SortingCount(){
        if (f){
          array.sort(compareA);
          function compareA(A, B){
            return A.getCount() - B.getCount();
          } 
          rePaint(array);
          f=false;
        }
        else{
          array.sort(compareB);
          function compareB(A, B){
            return B.getCount() - A.getCount();
          }
          rePaint(array);
          f=true;
        }
}


function SortingPrice(){
        if (f){
          array.sort(compareA);
          function compareA(A, B){
            return A.getPrice()  - B.getPrice() ;
          } 
          rePaint(array);
          f=false;
        }
        else{
          array.sort(compareB);
          function compareB(A, B){
            return B.getPrice() - A.getPrice() ;
          }
          rePaint(array);
          f=true;
        }
}


function DeleteProduct(ind){
    array.splice(ind,1);
    rePaint(array);
}


function Filter1(id){
    var myButton=document.getElementById("add");
    var name = document.getElementById('newName').value=" ";
    var count = document.getElementById('newCount').value=" ";
    var price = document.getElementById('newPrice').value=" ";
    myButton.value="add";
    return new Product(name,count,price,id);
}
  
 
function Validation(){
    var pr = ReturnNewElement();
    if(pr.name === '' ) {
        newName.className="error";
        alert("Поле не должно быть пустым");
        valid=false;
        return false;
    }else {valid=true;}

    if(/^\s+$/.test(pr.name)===true) {
      newName.className="error";
      alert("Строка не должна состоять из пробелов"); 
      valid=false;
      return false; 
    }else {valid=true;}

    var blaBla= "aaaaaaaaaaaaaaa";
    var LengthName=pr.name;

    if(LengthName.length >blaBla.length){
        newName.className="error";
        alert("Максимальная длина 15 букв "); 
        valid=false;
        return false; 
      }else {valid=true;}
  
    if(/^\d+$/.test(pr.count) ===false){
      newCount.className="error";
      alert('Поле должно сотоять из цифр');
      valid=false;
      return false;
    }else {valid=true;}

  return true;
}

newName.onfocus = function() {
  if(newName.className == 'error') {newName.className = "";}
}


newCount.onfocus = function() {
  if ( newCount.className == 'error') {newCount.className = "";}
}


newPrice.onfocus= function() {
  if (newPrice.className == 'error') {newPrice.className = "";}
  
}


$("#newPrice").change(function () {
  if (!$.isNumeric($(this).val()))
      $(this).val('0').trigger('change');
      $(this).val(parseFloat($(this).val(), 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
});

var color=true;


function Link(){
    var myLink = document.getElementById('sortCount');
    if(color){
        myLink.style.background = 'url(https://image.freepik.com/free-icon/no-translate-detected_318-25354.jpg)';
        myLink.style.backgroundSize="contain";
        color=false;
    }else{
        myLink.style.background = 'url(https://image.freepik.com/free-icon/no-translate-detected_318-25338.jpg)';
        myLink.style.backgroundSize ="contain";
        color=true;
    }
}


function Link2(){
    var myLink = document.getElementById('sortPrice');
    if(color){
        myLink.style.background = 'url(https://image.freepik.com/free-icon/no-translate-detected_318-25354.jpg)';
        myLink.style.backgroundSize="contain";
        color=false;
    }else{
        myLink.style.background = 'url(https://image.freepik.com/free-icon/no-translate-detected_318-25338.jpg)';
        myLink.style.backgroundSize ="contain";
        color=true;
    }
}