using System.Collections.Generic;
using System.Linq;
using Product.Context;
using Product.Entity;

namespace Product.Repositories
{
    internal class ProductRepository : IProductRepository
    {
        public IList<Entity.Product> GetProducts()
        {
            ProductContext context = new ProductContext();
            return context.Products.ToList();
        }
    }
}
