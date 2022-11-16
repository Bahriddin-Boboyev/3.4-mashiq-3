
let amal = "+";

while(amal == "+" || amal == "-" || amal == "/" || amal == "*" ){
 let son1 = prompt("1-soni kiriting")*1;
 amal = prompt("amalni kiriting (+,/,-,* shulardan birini kiriting yoki kalkulyatordan chiqoqchi bo'lsangiz x ni kiriting)")
 let son2 = prompt("2-soni kiriting")*1;
if (amal == "+"){
  document.write(son1 + son2)
}
else if (amal == "-"){
  document.write(son1 - son2)
}
else if (amal == "/"){
  document.write(son1 / son2)
}
else if (amal == "*"){
  document.write(son1 * son2)
}
else{
  document.write("Siz xato buyruq kiritdingiz, yoki chiqish buyrug'ini yubordingiz. (Amalni qayta boshlash uchun saytni qayta yuklang!)")
}
}