import { Router } from "express";
import { CartItem , Product , User  } from "../db.js";

export const cartItemRouter = Router();

cartItemRouter.post("/", async (req, res) => {
    const { productId, quantity , userId } = req.body;
    if(!productId || !quantity || !userId){
        res.status(400).send("Date lipsa");
        return;
    }
    try{
        const cartItem = await CartItem.create({ ProductId: productId, quantity ,UserId: userId})
        res.status(201).json(cartItem);
    }catch(err) {
        console.error(err);
        res.status(500).send("Eroare la adaugarea in cos");
    }
});

cartItemRouter.get("/:userId", async (req, res) => {
    try{
        const items = await CartItem.findAll({
            where: { UserId: req.params.userId },
            include: [Product],
        });
        res.json(items);
    }catch(err){
        res.status(500).send("Eroare la obtinerea cosului");
    }
});

cartItemRouter.delete("/:id", async (req, res ) => {
    try {
        const deleted = await CartItem.destroy({ where: { id: req.params.id  } });
        if(!deleted) {
            res.status(404).send("Produsul nu a fost gasit");
            return;
        }
        res.send("Produsul sters din cos");
    }catch (err) {
        res.status(500).send("Eroare la stergere");
    }
});
