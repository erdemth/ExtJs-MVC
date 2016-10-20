using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

using ExtApp.Model;

namespace ExtApp.BLL.Controller
{
    /// <summary>
    /// Login Controller
    /// </summary>
    public class LoginController : ApiController
    {
        /// <summary>
        /// Login 
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<LoginResult> Login(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return Json(new LoginResult
                {
                    Code = 300,
                    Msg = "User Name or Password Empty is not Allowed！"
                });
            }

            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from User where Username=:username and Password=:password");
            query.SetParameter("username", username);
            query.SetParameter("password", password);
            User user = query.UniqueResult<User>();

            if (user == null)
            {
                return Json(new LoginResult
                {
                    Code = 300,
                    Msg = "User Name or Password error，login Failure！"
                });
            }

            // Login Success，Log information to the Data library
            LoginSession ls = new LoginSession();
            ls.Expire = 120 * 60; //120 min
            ls.Guid = Guid.NewGuid().ToString();
            ls.LoginIP = Request.RequestUri.Host;
            ls.LoginTime = DateTime.Now;
            ls.LoginUser = new User
            {
                ID = user.ID
            };
            session.SaveOrUpdate(ls);
            session.Flush();

            LogHelper.Info("User" + username + "login successful.", type: LogType.User);

            return Json(new LoginResult
            {
                Code = 200,
                Msg = "Login Success！",
                Ticket = ls.Guid
            });
        }

        /// <summary>
        /// Modify Password
        /// </summary>
        /// <param name="oldPwd"></param>
        /// <param name="newPwd"></param>
        /// <param name="confirmPwd"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> ChangePwd(string oldPwd, string newPwd, string confirmPwd)
        {
            return Json(new Result
            {
                Code = 200,
                Msg = "Password changed Success！"
            });
        }
    }
}
