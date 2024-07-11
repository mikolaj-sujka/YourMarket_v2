import { Router } from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from "../controllers/product-controller.js";

const router = Router();

router.post("/", addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;
