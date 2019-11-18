namespace TinyERP.Attribute
{
    public class GreaterThan : BaseAttribute
    {
        public dynamic GreaterThanNumberInput { get; set; }
        public GreaterThan(string errorKey, int valueInputNumber) : base(errorKey)
        {
            this.GreaterThanNumberInput = valueInputNumber;
        }
        public override bool IsValid(object value)
        {
            return (dynamic)value > this.GreaterThanNumberInput;
        }
    }
}
