﻿using System.Data.Entity;

namespace Product.Context
{
    public class ProductContext : DbContext
    {
        public ProductContext():base("ProductConnectionString")
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<ProductContext>());
        }
        public IDbSet<Entity.Product> Products { get; set; }
    }
}