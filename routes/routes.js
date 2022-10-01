const express = require("express");
const router = express.Router();
const brandsController = require("../controllers/BrandsControllers.js");
const productsController = require("../controllers/ProductsControllers.js");
const usersController = require("../controllers/UsersControllers");
const categorysController = require("../controllers/CategorysControllers");
const usesController = require("../controllers/UsesControllers");
const subCategorysController = require("../controllers/SubCategorysControllers");

router.get("/users", usersController.getAllUsers)
router.get("/users/:id", usersController.getUser)
router.post("/users", usersController.createUser)
router.put("/users/:id", usersController.updateUser)
router.delete("/users/:id", usersController.deleteUser)

router.get("/brands", brandsController.getAllBrands)
router.get("/logo_brands", brandsController.getAllLogoBrands)
router.get("/crueltyfreecertificate", brandsController.getAllCrueltyFreeCertificated)
router.get("/brands/:id",brandsController.getBrand)
router.post("/brands", brandsController.createBrand)
router.put("/brands/:id", brandsController.updateBrand)
router.delete("/brands/:id", brandsController.deleteBrand)

router.get("/products", productsController.getAllProducts)
router.get("/products/:id",productsController.getProduct)
router.post("/products", productsController.createProduct)
router.put("/products/:id", productsController.updateProduct)
router.delete("/products/:id", productsController.deleteProduct)

router.get("/categorys", categorysController.getAllCategorys)
router.get("/categorys/:id",categorysController.getCategory)
router.post("/categorys", categorysController.createCategory)
router.put("/categorys/:id", categorysController.updateCategory)
router.delete("/categorys/:id", categorysController.deleteCategory)

router.get("/uses", usesController.getAllUses)
router.get("/uses/:id",usesController.getUse)

router.get("/subcategorys", subCategorysController.getAllSubCategorys)
router.get("/subcategorys/:id",subCategorysController.getSubCategory)

module.exports = router;

