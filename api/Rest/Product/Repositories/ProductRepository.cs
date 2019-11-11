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
        public Entity.Product GetProduct(int productId)
        {
            ProductContext context = new ProductContext();
            return context.Products.FirstOrDefault(x => x.Id == productId);
        }
        public void Update(Entity.Product product)
        {
            ProductContext context = new ProductContext();
            Entity.Product currentProduct = context.Products.FirstOrDefault(x => x.Id == product.Id);
            currentProduct.Name = product.Name;
            currentProduct.Quantity = product.Quantity;
            currentProduct.Price = product.Price;
            currentProduct.Description = product.Description;
            context.SaveChanges();
        }
        public void Delete(int productId)
        {
            ProductContext context = new ProductContext();
            Entity.Product product = context.Products.FirstOrDefault(x => x.Id == productId);
            context.Products.Remove(product);
            context.SaveChanges();
        }
    }
}
