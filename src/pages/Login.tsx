import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const LoginPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonBackButton slot="start"/>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form>
                            <IonInput label="Username" type="text" placeholder="350xxxxxxx" fill="outline" labelPlacement="floating" className="ion-margin-top"/>
                            <IonInput label="Password" type="password" placeholder="" fill="outline" labelPlacement="floating" className="ion-margin-top"/>
                            <IonButton type="submit" expand="block">Login</IonButton>
                            <IonButton type="button" expand="block" color={"danger"}>Register</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default LoginPage;