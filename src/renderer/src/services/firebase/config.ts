export const firebaseAppConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

export const isFirebaseConfigured = false

export const firebaseIntegrationNotes = `
Substitua a persistencia local pelos imports de initializeApp, getFirestore e pelos helpers do
Firestore mantendo a mesma interface de addCliente, getClientes e deleteCliente.
`
