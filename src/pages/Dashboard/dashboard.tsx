import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToast, IonToolbar } from "@ionic/react";

const DashboardPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default DashboardPage;