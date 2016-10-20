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
    /// Log controller
    /// </summary>
    public class LogController : ApiController
    {
        /// <summary>
        /// Get List
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        [HttpGet]
        public JsonResult<ListResult<Log>> List(int pageSize, int pageNum, string keyword = "")
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Log where Title like :keyword or Content like :keyword order by ID desc");
            query.SetParameter("keyword", "%" + keyword + "%");
            int total = query.List().Count;
            query.SetFirstResult((pageNum - 1) * pageSize);
            query.SetMaxResults(pageSize);
            var list = query.List<Log>();
            return Json(new ListResult<Log>
            {
                Code = 200,
                Msg = "Execution Succeed",
                Total = total,
                Items = list
            });
        }
    }
}