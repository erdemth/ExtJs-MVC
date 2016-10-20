using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ExtApp.BLL
{
    /// <summary>
    /// Web APIConfiguration
    /// </summary>
    public static class WebApiConfig
    {
        /// <summary>
        /// Registered Api Controller
        /// </summary>
        /// <param name="config"></param>
        public static void Register(HttpConfiguration config)
        {
            // Web API Configuration and Services

            // Web API Routing
            config.MapHttpAttributeRoutes();

            // DataBinding 
            var binder = new JsonModelBinder();
            config.BindParameter(binder.GetType(), binder);

            // The default route
            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            // Routing with action
            config.Routes.MapHttpRoute(
                name: "ActionApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}
