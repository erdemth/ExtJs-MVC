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
    /// Role Controller
    /// </summary>
    public class RoleController : ApiController
    {
        /// <summary>
        /// Get the column  Table
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult<ListResult<Role>> List(int pageSize, int pageNum, string keyword = "")
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Role where Status=0 and Name like :keyword order by Layer");
            query.SetParameter("keyword", "%" + keyword + "%");
            int total = query.List().Count;
            query.SetFirstResult((pageNum - 1) * pageSize);
            query.SetMaxResults(pageSize);
            IList<Role> list = query.List<Role>();
            return Json(new ListResult<Role>
            {
                Code = 200,
                Msg = "Exec Success",
                Total = total,
                Items = list
            });
        }

        /// <summary>
        /// Add
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Add(Role role)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(role);
            return Json(new Result
            {
                Code = 200,
                Msg = "Added Successfully！"
            });
        }

        /// <summary>
        /// Edit
        /// </summary>
        /// <param name="role"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Edit(Role role)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(role);
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
            Role role = session.Get<Role>(id);
            role.Status = -1;
            session.SaveOrUpdate(role);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Delete Success！"
            });
        }
    }
}
