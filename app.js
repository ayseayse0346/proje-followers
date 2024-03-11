
// !42.50dk da kaldık.
// js tarafında ilk olarak butona ihtiyacım var butonu yakalmalıyız.kullanıcı butona basacak ve ben de arka planda kullanıcının butona basmasını yakalayıp yazacağım fonksiyonları harekete geçirmem lazım.
// sonra API den veri gelecek,yani ben istek attım apı ye ve o apı dan bana bir veri gelecek bu veriyi kullanıcıya göstermem lazım kullanıcıya göstereceğim alana da ihityacım var. bu alanda html de oluşturulmuş,bir sect kısmı açılmış buraya gelen verileri(bir kart yapısı olabilir,nasıl tercih edersek o şekilde buraya yerleştirmem lazım).ikinci olarak da benim bu alana da ihtiyacım var js tarafında.bu alanı yakalyabilmem lazım ki onu modifiye edebileyim.
// !1-buton yakala 
// !2-verileri basacağımız alanı yakalayacağız(section kısmı)

// ? Not: konsol bizim en önemli dostumuz.her aşamada konsola başvurucaz. test için en iyi dost!!!
// ?not:requered sadece form submit ile çalışır.

// !1-BUTON ELEMENTİNİ YAKALA

const getBtn = document.getElementById("button");
// tanımladık ve şimdi bu elemnte bir listener vereceğim ki bana tanımladığını söylesin.

getBtn.addEventListener("click",()=>{
    // dışardan fonksiyon da çağırabiliriz. burda calback fonksiyonda açabiliriz.
    // console.log("butuona tıklandı");butona tıklandığınıtest ettik.
    // ihtiyacım olan şey kullanıcının inputa yazacağı değer,karakterler..o yüzden benim inputu yakalam gerek.elementin kendisine ihtiyacım yok o yzüden içine yazdığımız değere yani value ya ihtiyaç var. 
    const value = document.querySelector("#searchText").value.trim();
    // console.log("~getBtn.addEventListener~value:",value);
    // value aldık artık bu value kullanmaya başlayabilirim.kullanıcının boşluk kullanmasını istemiyorsam trim()methoduyla hallederiz.bu method başlangıçta ve sondaki boşluklara bakar ve ilk karakterler ve son karakterler boşluksa onları temizler..

    // şimdi bu value doluysa ben bir fonksiyon çağırabiliri.ama boşsa kullanıcıyı uyarabilirim.koşula ihityaç var.
    if (condition) {
        
    } else {
        
    }



})