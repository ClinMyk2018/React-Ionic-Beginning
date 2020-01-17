import React, { Component } from "react";
import apiKey from "./APIKeys";
import Slider from "./Slider";

import {
  IonApp,
  // IonTabs,
  // IonTabBar,
  // IonTabButton,
  // IonIcon,
  // IonLabel,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from "@ionic/react";
import axios from "axios";

// Import Ionic 4 styles
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import "./App.css";

// eslint-disable-next-line no-undef
class App extends Component {
  API_KEY = apiKey.newsKey;
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`;

  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get(this.API_URL)
      .then(response => response.data)
      .then(data => {
        this.setState({ items: data.articles });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Beginning With React / Ionic App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Slider />
        </IonContent>
        <IonContent>
          {this.state.items.map(item => (
            <IonCard>
              <img src={item.urlToImage} alt="" />
              <IonCardHeader>
                <IonCardTitle>{item.title}</IonCardTitle>
                <IonCardSubtitle>{item.author}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{item.content}</p>
                <IonButton href={item.url}> Read</IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
