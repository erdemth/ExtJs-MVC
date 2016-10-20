using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ModelBinding;
using Newtonsoft.Json;
using System.IO;
using System.Web.Http.Controllers;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;

namespace ExtApp.BLL
{
    /// <summary>
    /// Json Model Binding 
    /// </summary>
    public class JsonModelBinder : IModelBinder
    {
        /// <summary>
        /// Binding Data Model
        /// </summary>
        /// <param name="actionContext"></param>
        /// <param name="bindingContext"></param>
        /// <returns></returns>
        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            if (actionContext == null)
            {
                throw new ArgumentNullException("controllerContext");
            }
            if (bindingContext == null)
            {
                throw new ArgumentNullException("bindingContext");
            }
            try
            {
                var result = actionContext.Request.Content.ReadAsStringAsync();
                bindingContext.Model = JsonConvert.DeserializeObject(result.Result, bindingContext.ModelType.GetType());
                return true;
            }
            catch (Exception e)
            {
                var result = JsonConvert.SerializeObject(new Result
                {
                    Code = 300,
                    Msg = e.Message
                });
                actionContext.Response = actionContext.Request.CreateResponse<string>(HttpStatusCode.OK, result);
                return false;
            }
        }
    }
}