namespace TinyERP.Attribute
{
    public class BaseAttribute : System.Attribute
    {
        public string ErrorKey { get; private set; }
        public BaseAttribute(string errorKey)
        {
            this.ErrorKey = errorKey;
        }
        public virtual bool IsValid(object value) { return false; }
    }
}
