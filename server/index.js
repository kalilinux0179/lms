import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import router from "./routes/user.route.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 3000, () => {
      console.log("[+] Server Listening...");
    })
  )
  .catch((e) => {
    console.log(e);
  });

  app.use("/api/v1/user", router)
