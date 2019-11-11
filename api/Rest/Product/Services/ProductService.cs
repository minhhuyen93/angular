using System.Collections.Generic;
using Product.Dtos;
using Product.Entity;
using Product.Repositories;
using TinyERP.Exceptions;
using TinyERP.Helpers;
using TinyERP.IoC;

namespace Product.Services
{
    internal class ProductService : IProductService
    {
        public void CreateProduct(CreateProductRequest request)
        {
            this.Validate(request);
            Entity.Product product = new Entity.Product()
            {
                Name = request.Name,
                Quantity = request.Quantity,
                Price = request.Price,
                Description = request.Description
            };
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            repo.AddProduct(product);
        }
        private void Validate(CreateProductRequest request)
        {
            IList<string> errorMessages = ValidationHelper.GetErrorMessages(request);
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            Entity.Product product = repo.GetProductByName(request.Name);
            if (product != null)
            {
                errorMessages.Add("inventory.addOrEdit.nameWasExisted");
            }
            if (errorMessages.Count > 0)
            {
                throw new ValidationException(errorMessages);
            }
        }

        public IList<Entity.Product> GetProducts()
        {
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            return repo.GetProducts();
        }
        public Entity.Product GetProduct(int productId)
        {
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            return repo.GetProduct(productId);
        }
        public void UpdateProduct(UpdateProductRequest request)
        {
            this.Validate(request);
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            Entity.Product product = repo.GetProduct(request.Id);
            product.Name = request.Name;
            product.Quantity = request.Quantity;
            product.Price = request.Price;
            product.Description = request.Description;
            repo.Update(product);
        }
        public void DeleteProduct(int productId)
        {
            IProductRepository repo = IoC.Container.Resolve<IProductRepository>();
            repo.Delete(productId);
        }
    }
}
