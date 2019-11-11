using Product.Dtos;
using System.Collections.Generic;

namespace Product.Services
{
    public interface IProductService
    {
        IList<Entity.Product> GetProducts();
        void CreateProduct(CreateProductRequest request);
        Entity.Product GetProduct(int productId);
        void UpdateProduct(UpdateProductRequest request);
        void DeleteProduct(int productId);
    }
}
