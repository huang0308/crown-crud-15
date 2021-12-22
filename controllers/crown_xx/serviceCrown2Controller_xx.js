const Category_xx = require('../../models/crown_xx/Category_xx');
const Shop_xx = require('../../models/crown_xx/Shop_xx');

exports.getCategories = async (req, res) => {
  try {
    return await Category_xx.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_xx.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
   console.log('service', category);
   
   try {
    const cid = await Category_xx.fetchCatIdByName(category);
    const results = await Shop_xx.fetchByCatId(cid);
    // console.log('sevv getProductsByCategory', JSON.stringify(results));
    return results;
   } catch(err){
     console.log(err);
   }

}
