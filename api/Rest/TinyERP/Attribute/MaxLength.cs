namespace TinyERP.Attribute
{
    public class MaxLength : BaseAttribute
    {
        public int MaxLengthValue { get; set; }
        public MaxLength(string errorKey, int maxLengthValue) : base(errorKey)
        {
            this.MaxLengthValue = maxLengthValue;
        }
        public override bool IsValid(object value)
        {
            return value.ToString().Length < this.MaxLengthValue;
        }
    }
}
