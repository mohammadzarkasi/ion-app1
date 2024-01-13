import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";

const RegisterPage: React.FC = () => {
    const doRegister = (ev: any) => {
        ev.preventDefault();
        console.log(ev.constructor.name);
        console.log(ev);
        console.log('do register');
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput label="Username" type="text" placeholder="350xxxxxxx" fill="outline" labelPlacement="floating" className="ion-margin-top"/>
                            <IonInput label="Password" type="password" placeholder="" fill="outline" labelPlacement="floating" className="ion-margin-top"/>
                            <IonInput label="Ulangi Password" type="password" placeholder="" fill="outline" labelPlacement="floating" className="ion-margin-top"/>
                            <IonButton type="submit" expand="block" color={'danger'}>Register</IonButton>
                            <IonButton type="button" expand="block" color={"primary"} routerLink="/login">Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default RegisterPage;