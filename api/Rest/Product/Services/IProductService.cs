﻿using System.Collections.Generic;

namespace Product.Services
{
    public interface IProductService
    {
        IList<Entity.Product> GetProducts();
    }
}