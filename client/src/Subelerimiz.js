import React from "react";
import Footer from "components/footers/Footer.js";
import Header from "components/headers/light.js";
import { Image, ConfigProvider } from "antd";
import branchOne from "./images/branch/branch1.webp";
import branchTwo from "./images/branch/branch2.webp";
import branchThree from "./images/branch/branch3.webp";
import branchFour from "./images/branch/branch4.webp";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import trTr from "antd/lib/locale/tr_TR";

export default function Subelerimiz() {
  return (
    <AnimationRevealPage>
      <Header />
      <div className="container">
        <div className="twoColumn twoColumnRevised">
          <div className="addressBox">
            <ConfigProvider locale={trTr}>
              <Image src={`${branchOne}`} />
            </ConfigProvider>
            <div className="addressContent">
              <ul>
                <li>
                  <h3>ANKARA - TEPE PRIME AVM</h3>
                  <p>
                    <strong>Adres: </strong>Dumlupınar Blv. No:266 Çankaya /
                    Ankara
                  </p>
                  <p>
                    <strong>Telefon: </strong>(0312) 287 61 46
                  </p>
                  <p>
                    <strong>Çalışma Saatleri: </strong>
                    <br />
                    Pazartesi :10:00-22:00
                    <br />
                    Salı :10:00-22:00
                    <br />
                    Çarşamba :10:00-22:00
                    <br />
                    Perşembe :10:00-22:00
                    <br />
                    Cuma :10:00-22:00
                    <br />
                    Cumartesi :10:00-22:00
                    <br />
                    Pazar :10:00-22:00
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="addressBox" key={1}>
            <div className="addressContent">
              <ul>
                <li>
                  <h3>İSTANBUL - BEYOĞLU</h3>
                  <p>
                    <strong>Adres: </strong>Tomtom Mah. Yeni Çarşı Cad. No:32
                    Kat: 6 Beyoğlu / İstanbul
                  </p>
                  <p>
                    <strong>Telefon: </strong>(0532) 598 99 98
                  </p>
                  <p>
                    <strong>Çalışma Saatleri: </strong>
                    <br />
                    Pazartesi :10:00-22:00
                    <br />
                    Salı :10:00-22:00
                    <br />
                    Çarşamba :10:00-22:00
                    <br />
                    Perşembe :10:00-22:00
                    <br />
                    Cuma :10:00-22:00
                    <br />
                    Cumartesi :10:00-22:00
                    <br />
                    Pazar :10:00-22:00
                  </p>
                </li>
              </ul>
            </div>
            <ConfigProvider locale={trTr}>
              <Image src={`${branchThree}`} />
            </ConfigProvider>
          </div>
          <div className="addressBox" key={2}>
            <ConfigProvider locale={trTr}>
              <Image src={`${branchFour}`} />
            </ConfigProvider>
            <div className="addressContent">
              <ul>
                <li>
                  <h3>İSTANBUL - ÜSKÜDAR</h3>
                  <p>
                    <strong>Adres: </strong>Beylerbeyi İskele Cd. 18 A D:18 A
                    İstanbul
                  </p>
                  <p>
                    <strong>Telefon: </strong>(0216) 385 25 36
                  </p>
                  <p>
                    <strong>Çalışma Saatleri: </strong>
                    <br />
                    Pazartesi :10:00-22:00
                    <br />
                    Salı :10:00-22:00
                    <br />
                    Çarşamba :10:00-22:00
                    <br />
                    Perşembe :10:00-22:00
                    <br />
                    Cuma :10:00-22:00
                    <br />
                    Cumartesi :10:00-22:00
                    <br />
                    Pazar :10:00-22:00
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="addressBox" key={3}>
          <div className="addressContent">
              <ul>
                <li>
                  <h3>ANKARA - 365 AVM</h3>
                  <p>
                    <strong>Adres: </strong>Birlik Mah. NO: 1B Çankaya / Ankara
                  </p>
                  <p>
                    <strong>Telefon: </strong>(0312) 375 32 34
                  </p>
                  <p>
                    <strong>Çalışma Saatleri: </strong>
                    <br />
                    Pazartesi :10:00-22:00
                    <br />
                    Salı :10:00-22:00
                    <br />
                    Çarşamba :10:00-22:00
                    <br />
                    Perşembe :10:00-22:00
                    <br />
                    Cuma :10:00-22:00
                    <br />
                    Cumartesi :10:00-22:00
                    <br />
                    Pazar :10:00-22:00
                  </p>
                </li>
              </ul>
            </div>
            <ConfigProvider locale={trTr}>
              <Image src={`${branchTwo}`} />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
