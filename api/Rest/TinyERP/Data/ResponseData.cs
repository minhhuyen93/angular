using System.Net;

namespace TinyERP.Data
{
    public class ResponseData
    {
        public HttpStatusCode StatusCode { get; set; }
        public dynamic Data { get; set; }
    }
}
