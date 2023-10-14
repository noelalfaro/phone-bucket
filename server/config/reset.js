import { pool } from "./database.js";
import "./dotenv.js";
import phoneData from "../data/phones.js"; // Change the data source to phones

const createPhonesTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS phones; -- Change table name to "phones"

        CREATE TABLE IF NOT EXISTS phones ( -- Change table name to "phones"
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 phones table created successfully"); // Update the console log
  } catch (err) {
    console.error("⚠️ error creating phones table", err); // Update the console log
  }
};

const seedPhonesTable = async () => {
  await createPhonesTable();

  phoneData.forEach((phone) => {
    const insertQuery = {
      text: "INSERT INTO phones (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)", // Change the table name to "phones"
    };

    const values = [
      phone.name,
      phone.pricePoint,
      phone.audience,
      phone.image,
      phone.description,
      phone.submittedBy,
      phone.submittedOn,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting phone", err); // Update the console log
        return;
      }

      console.log(`✅ ${phone.name} added successfully`);
    });
  });
};

seedPhonesTable();
