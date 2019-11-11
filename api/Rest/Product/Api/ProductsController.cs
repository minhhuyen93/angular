using Product.Dtos;
using Product.Services;
using System;
using System.Collections.Generic;
using System.Web.Http;
using TinyERP.Attribute;
using TinyERP.IoC;

namespace Product.Api
{
    [RoutePrefix("api/inventory/products")]
    public class ProductsController : ApiController
    {
        [Route("")]
        [HttpGet()]
        [ResponseWrapper()]
        public IList<Entity.Product> GetProducts()
        {
            IProductService service = IoC.Container.Resolve<IProductService>();
            return service.GetProducts();
        }
        [Route("")]
        [HttpPost()]
        [ResponseWrapper()]
        public void CreateProduct(CreateProductRequest request)
        {
            IProductService service = IoC.Container.Resolve<IProductService>();
            service.CreateProduct(request);
        }

        [Route("{productId}")]
        [HttpGet()]
        [ResponseWrapper()]
        public Entity.Product GetProduct(string productId)
        {
            IProductService service = IoC.Container.Resolve<IProductService>();
            return service.GetProduct(Int32.Parse(productId));
        }
        [Route("{productId}")]
        [HttpPost()]
        [ResponseWrapper()]
        public void UpdateProduct(UpdateProductRequest request, string productId)
        {
            request.Id = Int32.Parse(productId);
            IProductService service = IoC.Container.Resolve<IProductService>();
            service.UpdateProduct(request);
        }
        [Route("{productId}")]
        [HttpDelete()]
        [ResponseWrapper()]
        public void DeleteProduct(string productId)
        {
            IProductService service = IoC.Container.Resolve<IProductService>();
            service.DeleteProduct(Int32.Parse(productId));
        }
    }
}
