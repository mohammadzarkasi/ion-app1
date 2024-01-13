import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const LandingPage: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonTitle>Selamat Datang</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonCard>
                <IonCardContent>
                    Hello World
                    <IonButton type="button" routerLink="/login">Login</IonButton>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
}

export default LandingPage;