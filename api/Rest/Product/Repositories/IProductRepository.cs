
using System.Collections.Generic;

namespace Product.Repositories
{
    public interface IProductRepository
    {
        IList<Entity.Product> GetProducts();
        Entity.Product GetProductByName(string name);
        void AddProduct(Entity.Product product);
    }
}
