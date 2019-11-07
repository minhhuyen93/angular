using System.Collections.Generic;
using System.Net;
using TinyERP.Exceptions;

namespace TinyERP.Data
{
    public class ResponseData
    {
        public IList<ExceptionErrorMessage> Errors { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public dynamic Data { get; set; }
        public IList<ExceptionErrorMessage> SetErrors(IList<ExceptionErrorMessage> errorKeys)
        {
            return this.Errors = errorKeys;
        }
    }
}
