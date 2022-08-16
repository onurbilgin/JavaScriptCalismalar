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

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tivitler)
    }else {
        console.log("Kullancı adı veya parola yanlış")
    }
}

giris(email,sifre)