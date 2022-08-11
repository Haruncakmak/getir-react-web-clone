import React from "react";
import Menu from "../components/ui/Menu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const menus = [
  {
    title: "Getir' i Keşfedin",
    items: [
      {
        title: "Hakkımızda",
      },
      {
        title: "Kariyer",
      },
      {
        title: "İletişim",
      },
      {
        title: "Teknoloji Kariyerleri",
      },
      {
        title: "Sosyal Sroumluluk Projeleri",
      },
    ],
  },
  {
    title: "Yardıma mı ihtiyacınız var?",
    items: [
      {
        title: "Sıkça Sorulan Sorular",
      },
      {
        title: "Kişisel Verilerin Korunması",
      },
      {
        title: "Gizlilik Politikası",
      },
      {
        title: "Kullanım Koşulları",
      },
      {
        title: "Çerez Politikası",
      },
    ],
  },
  {
    title: "İş Ortağımız Olun",
    items: [
      {
        title: "Bayimiz Olun",
      },
      {
        title: "Deponuzu Kiralayın",
      },
      {
        title: "GetirYemek Restoranı Olun",
      },
      {
        title: "GetirÇarşı İşletmesi Olun",
      },
      {
        title: "Zincir Restoranlar",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-6 md:pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color"></h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy;2021 Getir
            <a href="#" className="text-primary-brand-color hover:underline">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="h-8 transition-colors text-gray-500 hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center px-2 text-sm gap-x-2"
            >
              <BiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
