import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.feilds;
    const { photo } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Requires" });
      case !description:
        return res.status(500).send({ error: "Description is Requires" });
      case !price:
        return res.status(500).send({ error: "Price is Requires" });
      case !category:
        return res.status(500).send({ error: "Category is Requires" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Requires" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is Required and should be less than 1mb" });
    }
    const products = new productModel({ ...req.feilds, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.contentType = photo.type;
    }
    await products.save();
    res.status(200).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Product",
    });
  }
};
