import pool from "../config/db.js";

export const executeQuery = async (req, res) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({
                message: "SQL query is required"
            });
        }

        if (!query.trim().toLowerCase().startsWith("select")) {
            return res.status(400).json({
                message: "Only SELECT queries are allowed"
            });
        }

        const result = await pool.query(query);

        res.json({
            success: true,
            rowCount: result.rowCount,
            data: result.rows
        });

    } catch (error) {
        console.error("Query execution error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to execute query"
        });
    }
};