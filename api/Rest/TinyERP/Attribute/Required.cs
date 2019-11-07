﻿namespace TinyERP.Attribute
{
    public class Required : BaseAttribute
    {
        public Required(string messageKey) : base(messageKey)
        {
        }
        public override bool IsValid(object value)
        {
            return !string.IsNullOrEmpty(value.ToString());
        }
    }
}