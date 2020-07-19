const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    remove,
    list,
    update
} = require("../controller/product");

router.get("/", list);
router.post("/insert",  create);
router.delete(
    "/delete/:productId",
    remove
);
router.put(
    "/update/:productId",
    update
);

router.param("productId", productById);

module.exports = router;
