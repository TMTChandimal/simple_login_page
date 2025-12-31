
import app from './app.js';
import { sync } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

sync()
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("DB connection failed:", err);
  });
