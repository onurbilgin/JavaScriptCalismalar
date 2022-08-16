var kullanicilar = [
    {email:"onurbilgin73@gmail.com",sifre:"12345"},
    {email:"ahmetcelik@gmail.com",sifre:"12345"}
]

var tivitler = [
    {email:"onurbilgin73@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"onurbilgin73@gmail.com",tivit:"Bugün hava çok güzeln 2"},
    {email:"ahmetcelik@gmail.com",tivit:"Kapıyı ben açacağım"},
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    for(i = 0; i < kullanicilar.length; i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tivitler)
    }else{
        console.log("Kullanıcı adı veya şifre yanlış")
    }
}

giris(email,sifre)