// Retrives the catalg from a particular seller using sellerId

const mongoose = require('mongoose');

async function retriveCatalog(req, res){
    const sid = req.params.sellerId;
    console.log(sid);
    try {
    
        const CatalogSchema = new mongoose.Schema({
          catalog: [{
      itemName: String,
    }],
          
        });
    
        const CatalogModel = mongoose.model('Seller', CatalogSchema);
    
        const result = await CatalogModel.find({sellerId: sid }, 'catalog -_id');

result.forEach((document, index) => {

  document.catalog.forEach((item, itemIndex) => {
    Object.entries(item).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  });
});
        mongoose.connection.close();
    
        res.status(200).json({ result });
      } catch (e) {
        console.error('Error fetching sellers from MongoDB:', e.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }

};
module.exports= retriveCatalog;
