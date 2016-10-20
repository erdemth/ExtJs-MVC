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
    /// User Controller
    /// </summary>
    public class UserController : ApiController
    {
        /// <summary>
        /// Get the column  Table
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult<IList<User>> List(string keyword, int pageSize, int pageNum)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from User where Username like :keyword or Name like :keyword");
            query.SetParameter("keyword", "%" + keyword + "%");
            IList<User> list = query.List<User>();
            return Json(list);
        }

        /// <summary>
        /// Add
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Add(User user)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(user);
            return Json(new Result
            {
                Code = 200,
                Msg = "Added successfully！"
            });
        }

        /// <summary>
        /// Edit
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Edit(User user)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(user);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Editing Success！"
            });
        }

        /// <summary>
        /// delete
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Delete(int id)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.Delete("from User where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Delete Success！"
            });
        }
    }
}
