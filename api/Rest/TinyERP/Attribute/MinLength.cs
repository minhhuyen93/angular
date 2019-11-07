namespace TinyERP.Attribute
{
    public class MinLength : BaseAttribute
    {
        public int MinLengthValue { get; set; }
        public MinLength(string errorKey, int minLengthValue) : base(errorKey)
        {
            this.MinLengthValue = minLengthValue;
        }
        public override bool IsValid(object value)
        {
            return value.ToString().Length > this.MinLengthValue;
        }
    }
}
