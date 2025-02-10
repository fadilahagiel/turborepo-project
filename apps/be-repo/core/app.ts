import express from "express";
import routes from "../routes";
import cors from "cors";
import * as functions from "firebase-functions"

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export const api = functions.https.onRequest(app);