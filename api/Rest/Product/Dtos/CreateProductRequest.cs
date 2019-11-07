using Product.Enums;
using TinyERP.Attribute;

namespace Product.Dtos
{
    public class CreateProductRequest
    {
        [Required("inventory.addOrEdit.nameWasRequired")]
        [MinLength("inventory.addOrEdit.nameWasUnderMinLenght", (int)ProductValidationRules.MinLength)]
        [MaxLength("inventory.addOrEdit.nameWasExceedMaxLength", (int)ProductValidationRules.MaxLength)]
        public string Name { get; set; }
        [Required("inventory.addOrEdit.quantityWasRequired")]
        [GreaterThan("inventory.addOrEdit.quantityWasGreaterThanZero", (int)ProductValidationRules.Zero)]
        public int Quantity { get; set; }
        [Required("inventory.addOrEdit.priceWasRequired")]
        [GreaterThan("inventory.addOrEdit.priceWasGreaterThanZero", (int)ProductValidationRules.Zero)]
        public decimal Price { get; set; }
        public string Description { get; set; }
    }
}
