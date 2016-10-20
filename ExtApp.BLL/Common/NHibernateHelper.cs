using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace ExtApp
{
    /// <summary>
    /// NHibernate Help Class
    /// </summary>
    public sealed class NHibernateHelper
    {
        /// <summary>
        /// Session Stored NHibernate key of the object
        /// </summary>
        private const string CurrentSessionKey = "nhibernate.current_session";

        /// <summary>
        /// NHibernate Session Factory
        /// </summary>
        private static readonly ISessionFactory sessionFactory;

        /// <summary>
        /// Constructor
        /// </summary>
        static NHibernateHelper()
        {
            sessionFactory = new Configuration().Configure().BuildSessionFactory();
        }

        /// <summary>
        /// Get current Session
        /// </summary>
        /// <returns></returns>
        public static ISession GetCurrentSession()
        {
            HttpContext context = HttpContext.Current;
            ISession currentSession = context.Items[CurrentSessionKey] as ISession;

            if (currentSession == null)
            {
                currentSession = sessionFactory.OpenSession();
                context.Items[CurrentSessionKey] = currentSession;
            }

            return currentSession;
        }

        /// <summary>
        /// Close the current Session
        /// </summary>
        public static void CloseSession()
        {
            HttpContext context = HttpContext.Current;
            ISession currentSession = context.Items[CurrentSessionKey] as ISession;

            if (currentSession == null)
            {
                // No current session
                return;
            }

            currentSession.Close();
            context.Items.Remove(CurrentSessionKey);
        }

        /// <summary>
        /// Down Session Factory
        /// </summary>
        public static void CloseSessionFactory()
        {
            if (sessionFactory != null)
            {
                sessionFactory.Close();
            }
        }
    }
}
