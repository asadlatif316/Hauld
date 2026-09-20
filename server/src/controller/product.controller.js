const getProducts = async (req, res) => {
  res.json('Get Products');
};
const addNewProduct = async (req, res) => {
  res.json('Add new Products');
};
const editProduct = async (req, res) => {
  res.json('edit Products');
};
const deleteProduct = async (req, res) => {
  res.json('delete Products');
};

export { getProducts, addNewProduct, editProduct, deleteProduct };
