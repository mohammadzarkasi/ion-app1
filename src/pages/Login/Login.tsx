import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { SyntheticEvent } from "react";

const LoginPage: React.FC = () => {

    const doLogin = (ev: any) => {
        ev.preventDefault();
        console.log(ev.constructor.name);
        console.log(ev);
        console.log('do login');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput label="Username" type="text" placeholder="350xxxxxxx" fill="outline" labelPlacement="floating" className="ion-margin-top" />
                            <IonInput label="Password" type="password" placeholder="" fill="outline" labelPlacement="floating" className="ion-margin-top" />
                            <IonButton type="submit" expand="block">Login</IonButton>
                            <IonButton type="button" expand="block" color={"danger"} routerLink="/register">Register</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default LoginPage;