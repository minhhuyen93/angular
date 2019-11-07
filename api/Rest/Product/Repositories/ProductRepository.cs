using System.Collections.Generic;
using System.Linq;
using Product.Context;
using Product.Entity;

namespace Product.Repositories
{
    internal class ProductRepository : IProductRepository
    {
        public void AddProduct(Entity.Product product)
        {
            ProductContext context = new ProductContext();
            context.Products.Add(product);
            context.SaveChanges();
        }

        public Entity.Product GetProductByName(string name)
        {
            ProductContext context = new ProductContext();
            return context.Products?.FirstOrDefault(x => x.Name == name);
        }

        public IList<Entity.Product> GetProducts()
        {
            ProductContext context = new ProductContext();
            return context.Products.ToList();
        }
    }
}
