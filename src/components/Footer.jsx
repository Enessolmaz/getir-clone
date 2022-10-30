import React from "react";
import "./CSS/footer.css"


function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container-lg mt-5">
        <div className="footer-getir">
          <span>
            <h6>Getir'i indirin!</h6>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/app/id995280265"
            >
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt=""
                srcset=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              arget="blank"
              href="https://play.google.com/store/apps/details?id=com.getir"
            >
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt=""
                srcset=""
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://appgallery.huawei.com/#/app/C100954039"
            >
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt=""
                srcset=""
              />
            </a>
          </span>
          <span>
            <h6>Getir'i keşfedin</h6>
            <span>Hakkımızda</span>
            <span>Kariyer</span>
            <span>Teknoloji Kariyerleri</span>
            <span>İletişim</span>
            <span>Sosyal Sorumluluk Projeleri</span>
          </span>
          <span>
            <h6>Yardıma mı ihtiyacınız var?</h6>
            <span>Sıkça Sorulan Sorular</span>
            <span>Kişisel Verilerin Korunması</span>
            <span>Gizlilik Politikası</span>
            <span>Kullanım Koşulları</span>
            <span>Çerez Politikası</span>
          </span>
          <span>
            <h6>İş Ortağımız Olun</h6>
            <span>Bayimiz Olun</span>
            <span>Deponuzu Kiralayın</span>
            <span>GetirYemek Restoranı Olun</span>
            <span>GetirÇarşı İşletmesi Olun</span>
            <span>Zincir Restoranlar</span>
          </span>
        </div>
        <div className="bottom-footer mt-5">
        K146_Bingöl, Elazığ, Malatya & Tunceli React Bootcamp Bitirme Projesi 
        </div>
      </div>
    </div>
  );
}

export default Footer;
