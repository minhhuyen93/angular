using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using TinyERP.Attribute;

namespace TinyERP.Helpers
{
    public static class ValidationHelper
    {
        public static IList<string> GetErrorMessages(object model)
        {
            IList<string> errorMessages = new List<string>();
            IList<PropertyInfo> props = model.GetType().GetProperties();
            foreach (PropertyInfo prop in props)
            {
                IList<BaseAttribute> atrs = prop.GetCustomAttributes<BaseAttribute>().ToList();
                foreach (BaseAttribute atr in atrs)
                {
                    if (!atr.IsValid(prop.GetValue(model)))
                    {
                        errorMessages.Add(atr.ErrorKey);
                    }
                }
            }
            return errorMessages;
        }
    }
}
