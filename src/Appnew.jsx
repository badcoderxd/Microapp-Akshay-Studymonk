import React,{useEffect, useRef,useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
import {calculatorOutline,refreshOutline} from 'ionicons/icons'
import axios from "axios";



const Ppp = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const allDataData = async() => {
    const response = await axios.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow");
      setCardData(response.data.items);
    }

    const loadMore = () => {
      setVisible(visible + 5);
    }

    useEffect(()=> {
     allDataData();
    },[]);

    const renderCard = (items,index) => {
      return(
      <a href={items.owner.link} target="_blank" style={{textDecoration: 'none'}}>
    <IonItem>
          <IonAvatar slot="start">
            <img src={items.owner.profile_image}/>
          </IonAvatar>
          <IonLabel>
          <IonLabel>{items.title}</IonLabel>
            <p>{items.owner.user_id}</p>
          </IonLabel>
    </IonItem>   </a>  
      );
    };

  return(
    <IonApp>
      <IonHeader>
    <IonToolbar>
      <IonTitle>
        Study Monk 
      </IonTitle>
      
    </IonToolbar>
    </IonHeader>
    <IonContent >

    {cardData.slice(0, visible).map(renderCard)}
    

 
  </IonContent>
  {visible < cardData.length && (
        <IonButton  onClick={loadMore} style={{padding:"5px 100px 5px 100px" }}>Load More</IonButton>
      )}
  </IonApp>
  );
};

export default Ppp;
