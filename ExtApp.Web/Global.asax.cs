using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

using ExtApp.Model;
using ExtApp.BLL;
using NHibernate;

namespace ExtApp.Web
{
    /// <summary>
    /// WebApplication
    /// </summary>
    public class WebApplication : System.Web.HttpApplication
    {
        /// <summary>
        /// Application starts
        /// </summary>
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            //Initializes the database data
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from User");
            int count = query.List().Count;
            if (count == 0)
            {
                // Add a user
                User user = new User
                {
                    Username = "admin",
                    Password = "123",
                    Name = "administrator"
                };
                session.Save(user);
            }

            // Write a log
            LogHelper.Info("The system starts");
        }
    }
}
