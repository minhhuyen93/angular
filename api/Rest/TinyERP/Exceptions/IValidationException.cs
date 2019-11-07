using System.Collections.Generic;

namespace TinyERP.Exceptions
{
    public interface IValidationException
    {
        IList<ExceptionErrorMessage> Errors { get; }
    }
}
