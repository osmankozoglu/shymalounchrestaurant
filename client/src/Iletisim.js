import React, { useState } from "react";
import Footer from "components/footers/Footer.js";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { Controller, useForm } from "react-hook-form";
import { Button, ConfigProvider, Input } from "antd";
import { PhoneOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { TinyColor } from "@ctrl/tinycolor";
import axios from "axios";
const { TextArea } = Input;
const colors1 = ["#6253E1", "#04BEFE"];

export default function Subelerimiz() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState();

  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());

  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  async function sendToMail(data) {
    setStatus("")
    axios.post("https://shymalounch-backend.vercel.app/send", {
        name: data.name,
        email: data.email,
        message: data.subject,
        phone: data.phone,
      },
      {
        headers: {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*',
        }
      }
    )
      .then((response) => {
        setStatus("Mesajınız gönderilmiştir.");
      })
      .catch((error) => {
        setStatus("Mesajınız gönderilemedi. Daha sonra tekrar deneyiniz.");
      });
  }

  return (
    <AnimationRevealPage>
      <Header />
      <div className="container">
        <div className="twoColumn twoColumnRevised">
          <div className="addressBox">
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
                    <strong>Email : </strong>shymaloungerestaurant@gmail.com
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
            <form onSubmit={handleSubmit(sendToMail)}>
              <div className="paddingTop">
                <label className="text-title">Adınız Soyadınız</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, name, value }, ref }) => (
                    <Input
                      size="large"
                      name={name}
                      value={value}
                      ref={ref}
                      onChange={(e) => {
                        setStatus("")
                        onChange(e);
                      }}
                      prefix={<UserOutlined />}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: `Adınızı ve soyadınızı giriniz`,
                    },
                  }}
                />
                {errors.name ? (
                  <p className="text-title error">{errors.name.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="paddingTop">
                <label className="text-title">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, name, value }, ref }) => (
                    <Input
                      size="large"
                      name={name}
                      value={value}
                      ref={ref}
                      type="email"
                      onChange={(e) => {
                        setStatus("")
                        onChange(e);
                      }}
                      prefix={<MailOutlined />}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: `Email adresinizi giriniz`,
                    },
                  }}
                />
                {errors.email ? (
                  <p className="text-title error">{errors.email.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="paddingTop">
                <label className="text-title">Telefon</label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, name, value }, ref }) => (
                    <Input
                      size="large"
                      name={name}
                      value={value}
                      ref={ref}
                      onChange={(e) => {
                        setStatus("")
                        onChange(e);
                      }}
                      prefix={<PhoneOutlined />}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: `Telefon numaranızı giriniz`,
                    },
                  }}
                />
                {errors.name ? (
                  <p className="text-title error">{errors.phone.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="paddingTop">
                <label className="text-title">Mesajınız</label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field: { onChange, name, value }, ref }) => (
                    <TextArea
                      size="large"
                      rows={4}
                      name={name}
                      value={value}
                      ref={ref}
                      onChange={(e) => {
                        setStatus("")
                        onChange(e);
                      }}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: `Mesajınızı giriniz`,
                    },
                  }}
                />
                {errors.subject ? (
                  <p className="text-title error">{errors.subject.message}</p>
                ) : (
                  ""
                )}
              </div>
              {status ? <div className="error">{status}</div> : <></>}
              <div className="buttonPaddingTop">
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: `linear-gradient(135deg, ${colors1.join(
                          ", "
                        )})`,
                        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                          colors1
                        ).join(", ")})`,
                        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                          colors1
                        ).join(", ")})`,
                        lineWidth: 0,
                      },
                    },
                  }}
                >
                  <Button type="primary" size="large" htmlType="submit">
                    Gönder
                  </Button>
                </ConfigProvider>
              </div>
            </form>
          </div>
          <div className="mapsPadding">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.444484584704!2d32.75260677720406!3d39.90906818637915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d1b1930c71%3A0xba45308b92372545!2sMustafa%20Kemal%2C%20Tepe%20Prime%2C%2006510%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1717328126243!5m2!1str!2str"
              width="1270"
              height="500"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
