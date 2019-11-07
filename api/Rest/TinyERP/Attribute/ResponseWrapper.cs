
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using TinyERP.Data;

namespace TinyERP.Attribute
{
    public class ResponseWrapper : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext context)
        {
            ResponseData response = new ResponseData();
            if (context.Exception == null && context.Response.StatusCode == System.Net.HttpStatusCode.NoContent)
            {
                response.StatusCode = HttpStatusCode.OK;
            }
            if (context.Exception == null && context.Response.StatusCode != System.Net.HttpStatusCode.NoContent)
            {
                ObjectContent dataContent = (ObjectContent)context.Response.Content;
                response.Data = dataContent.Value;
                response.StatusCode = HttpStatusCode.OK;
            }
            context.Response = context.Request.CreateResponse(response.StatusCode, response);
        }
    }
}
