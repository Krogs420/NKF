import { Router } from "express";
import db from "../database/Connection.js";
import bcrypt from "bcrypt";
const router = Router();

router.get("/api/users", async (req, res) => {
    /* try {
        const [users, _] = await db.execute(`SELECT * FROM users`);
        const list = [];
        users.forEach((user) => {
            list.push({
                id: user.id,
                username: user.user_name,
                mail: user.mail,
                admin: user.admin,
            });
        });
        res.send({ data: list });
    } catch {
        res.status(500).send({ data: undefined, message: "No users were found" });
    } */
    res.send("Hallo")
});

router.post("/api/users", async (req, res) => {
    const user = req.body;
    const saltRounds = 12;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const [rows, fields] = await db.execute(
      `INSERT INTO users (mail, password, role) VALUES (?, ?, ?);`,
      [user.mail, user.password, user.role]
    );
    res.send({ data: rows });
  });


export default router;