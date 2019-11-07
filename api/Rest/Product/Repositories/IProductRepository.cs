
using System.Collections.Generic;

namespace Product.Repositories
{
    public interface IProductRepository
    {
        IList<Entity.Product> GetProducts();
    }
}
