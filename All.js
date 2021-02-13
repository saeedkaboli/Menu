var El={
    select:document.getElementById("select"),
    home:document.getElementById("home"),
    shop:document.getElementById("shop"),
    contact:document.getElementById("contact"),
    aboutus:document.getElementById("aboutus")
}
function hom(){
    El.select.style.left="75%";
}
function sho(){
    El.select.style.left="50%"
}
function con(){
    El.select.style.left="25%";
}
function abo() {
    El.select.style.left="0"
  }
El.home.onclick=hom;
El.shop.onclick=sho;
El.contact.onclick=con;
El.aboutus.onclick=abo;
