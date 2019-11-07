using Product.Services;
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
    }
}
