using System.Collections.Generic;
using Product.Entity;
using Product.Repositories;
using TinyERP.IoC;

namespace Product.Services
{
    internal class ProductService : IProductService
    {
        public IList<Entity.Product> GetProducts()
        {
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            return repo.GetProducts();
        }
    }
}
