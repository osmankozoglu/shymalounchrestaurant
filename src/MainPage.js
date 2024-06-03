import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/Footer.js";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lezzetli & Hesaplı <span className="highlighted-text ">Yemekler Yakınınızda.</span></>}
        description="Üstün lezzet deneyimleri için sizleri bekliyoruz."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageDecoratorBlob={true}
        watchVideoButtonText="Yoksa Siz Hala İzlemediniz Mi?"
      />
      <MainFeature
        subheading=""
        heading={
          <>
           Gerçek hamburgerle tanışma zamanı
          </>
        }
        description = {<><span>Bir hamburger severin olması gerektiği yerdesin!</span><br/><span>Kendini en sevdiğin lezzetlerle dolu bir yolculuğa çıkarmaya hazır mısın?</span></>}
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss="homePageImageCss"
        imageDecoratorBlob={true}
        imageDecoratorBlobCss="imageDecoratorBlobCss"
      />
  
      <Features
        heading={
          <>
            İnanılmaz <span className="highlighted-text ">Hizmetler</span>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Kalbinizdeki Lezzet Noktası",
            description: "Şehrin en canlı ve merkezi noktasında yer alarak, hem ulaşım kolaylığı hem de keyifli bir ortam sunuyoruz",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Tutkunun ve Yeteneğin Buluştuğu Nokta",
            description: "Alanında uzman ve yaratıcı şeflerimiz sayesinde her zaman en yüksek standartlarda hizmet veriyoruz",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Özel Günlerinizi Unutulmaz Kılın",
            description: "Bu özel anlarınızı daha da unutulmaz kılmak için sizlere çeşitli ikramlar sunuyoruz",
          }
        ]}
        imageContainerCss="imageContainerCss"
        imageCss="imageCss"
      />
      <MainFeature2
        subheading=""
        heading={<>Neden <span className="highlighted-text">Biz ?</span></>}
        description="Restoranımız, damak zevkinizi şımartacak ve her ziyaretinizde kendinizi özel hissettirecek benzersiz bir gastronomi deneyimi sunmayı amaçlıyor."
        statistics={[
          {
            key: "Müşteri",
            value: "11000+"
          },
          {
            key: "Uzman Şefler",
            value: "150+"
          }
        ]}
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss="imageBackgroundSizeCss"
        imageContainerCss="imageContainer"
        imageDecoratorBlob={true}
        imageDecoratorBlobCss="imageDecoratorBlobCss"
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Müşterilerimiz <span className="highlighted-text">Bizi Seviyor</span></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
