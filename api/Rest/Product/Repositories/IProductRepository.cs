
using System.Collections.Generic;

namespace Product.Repositories
{
    public interface IProductRepository
    {
        IList<Entity.Product> GetProducts();
        Entity.Product GetProductByName(string name);
        void AddProduct(Entity.Product product);
        Entity.Product GetProduct(int productId);
        void Update(Entity.Product product);
        void Delete(int productId);
    }
}
