import { pool } from "../config/database.js";

const getPhones = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM phones ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getPhoneById = async (req, res) => {
  try {
    const phoneId = req.params.phoneId;
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM phones
      WHERE id = ${phoneId}
    `;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const createPhone = async (req, res) => {
  try {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon,
    } = req.body;

    const results = await pool.query(
      `INSERT INTO phones (name, pricepoint, audience, image, description, submittedby, submittedon) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, pricepoint, audience, image, description, submittedby, submittedon]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updatePhone = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon,
    } = req.body;

    const results = await pool.query(
      `UPDATE phones SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7 WHERE id = $8`,
      [
        name,
        pricepoint,
        audience,
        image,
        description,
        submittedby,
        submittedon,
        id,
      ]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deletePhone = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const results = await pool.query("DELETE FROM phones WHERE id = $1", [id]);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getPhones,
  getPhoneById,
  createPhone,
  updatePhone,
  deletePhone,
};
