import React from "react";
import Footer from "components/footers/Footer.js";
import Header from "components/headers/light.js";
import { Image } from "antd";
import aboutUs from "./images/about.png";
import AnimationRevealPage from "helpers/AnimationRevealPage";

export default function Subelerimiz() {
  return (
    <AnimationRevealPage>
      <Header />
      <div className="container">
        <div className="twoColumn twoColumnRevised">
          <div className="aboutUsContainer">
            <Image src={`${aboutUs}`} preview={false} />
            <div className="aboutUs">
              <div className="voffset-30"/>
              <h5 className="aboutUsTitle">Lezzet ve Estetiğin Buluşma Noktası</h5>
              <p>Sizleri enfes bir yemek deneyimi ve benzersiz bir atmosferle buluşturmanın heyecanını yaşıyoruz. Lezzetli yemeklerimiz,&nbsp;özenle tasarlanmış mekanımız ve misafirlerimize sunduğumuz kusursuz hizmet ile unutulmaz anlar yaşatmak için buradayız.</p>
              <p>Bizimle birlikte lezzetin, estetiğin ve unutulmaz anların keyfini çıkarmanız için sizleri restoranımıza bekliyoruz.&nbsp;</p>
              <p><strong>Gastronomiye Sanatsal Bir Dokunuş</strong></p>
              <p>Gastronomi dünyasına sanatsal bir bakış açısıyla yaklaşıyor. Şeflerimiz, en taze ve kaliteli malzemeleri seçerek&nbsp;özenle hazırlanan yemeklerle damaklarınıza unutulmaz bir yolculuk sunuyor. Her tabak, lezzetlerin mükemmel uyumunu ve görsel şöleni bir araya getiriyor.</p>
              <p>Hem geleneksel Türk mutfağının enfes tatlarına hem de uluslararası mutfakların&nbsp;özgün yorumlarına yer veren menümüz, her damak zevkine hitap ediyor. Yemeklerimizin tadını, tarihi yarımada manzarasının büyüsüyle birleştirerek çıkarmanız için buradayız.</p>
              <p><strong>Tarihi yarımadanın büyüsüne tanıklık edin!</strong></p>
              <p>Biz, İstanbul'un kalbinde, tarihi yarımada manzarasıyla bütünleşmiş bir lezzet deneyimi sunmanın gururunu yaşıyoruz. Litera; İstanbul boğazı, tarihi yarımada ve Haliç'in birleştiği noktayı en iyi açıdan görmekte olup, adalar ve daha fazlasına sahip olan geniş manzarası ile dört mevsim teras mekan olarak misafirlerine hizmet vermektedir.&nbsp;</p>
              <p><strong>Özel Anlarınıza Eşlik Edin</strong></p>
              <p>Özel etkinlikleriniz ve kutlamalarınız için de mükemmel bir tercihtir. Doğum günleri, yıldönümleri, iş yemekleri veya romantik akşam yemekleri... Her türlü özel anınıza&nbsp;özel bir dokunuşla eşlik ediyoruz&nbsp;</p>
              <p>Misafirlerine lezzet ve manzaranın yanı sıra müzik dolu akşamlarda sunan Litera'da Çarşamba, Cuma ve Cumartesi akşamları canlı müzik geceleri ve DJ perfomansıyla keyifli vakitler geçirebilirsiniz.</p>                        
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
