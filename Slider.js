import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonToolbar,
  IonTitle
} from "@ionic/react";

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Slider: React.Component = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <img src="../logo192.png" alt="" />
        <br />
        <h1>First slide will contain info of slide one </h1>
        <br />
      </IonSlide>
      <IonSlide>
        <img src="../logo192.png" alt="" />
        <br />
        <h1>Hello this is the Second slide</h1>
      </IonSlide>
      <IonSlide>
        <img src="../logo192.png" alt="" />
        <h1>Check out info for third slide if you want</h1>
      </IonSlide>
    </IonSlides>
    <IonToolbar color="secondary">
      <IonTitle>Ending First Section</IonTitle>
    </IonToolbar>
  </IonContent>
);

export default Slider;
