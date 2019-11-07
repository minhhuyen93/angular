using Product.Repositories;
using Product.Services;
using TinyERP.IoC;
using TinyERP.Tasks;

namespace Product.Task
{
    public class Bootstraper : IBootstraper
    {
        public void Execute()
        {
            IoC.Container.RegisterAsSingleton<IProductService, ProductService>();
            IoC.Container.RegisterAsSingleton<IProductRepository, ProductRepository>();
        }
    }
}
