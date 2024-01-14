import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToast, IonToolbar } from "@ionic/react";

const DashboardPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Profil Saya</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p><b>Nama:</b> Toni Stark</p>
                            <p><b>NIK:</b> 350xxxxxxxx</p>
                            <p><b>Peran:</b> Petugas</p>
                        </IonText>
                        <IonButton>Ubah</IonButton>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Capaian</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>Grafik Pie (belum, ongoing, sudah)</p>
                        </IonText>
                        <IonButton>Tambah Data</IonButton>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Tanggungan</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <p>5 item teratas</p>
                        </IonText>
                        <IonButton>Detil</IonButton>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
}

export default DashboardPage;