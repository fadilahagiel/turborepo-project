import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import * as serviceAccount from "../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "ebuddy-project-abf5a"
});

const db = getFirestore();

export { db };
