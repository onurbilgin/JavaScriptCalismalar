class Personel {

    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet(){
        console.log(`Personel Kaydedildi: ${this.ad} `)
    }
}

 const personel = new Personel("Onur","Bilgin")
 personel.kaydet();

  console.log(personel.ad)
