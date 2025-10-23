import { AppDataSource } from "infrastructure/data-source";
import "reflect-metadata";

AppDataSource.initialize()
  .then(async () => {
    const app = (await import("./config/app")).default;

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running at http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch(console.error);
