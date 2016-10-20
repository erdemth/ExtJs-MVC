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
    /// Organizational Controller
    /// </summary>
    public class DeptController : ApiController
    {
        /// <summary>
        /// Get the column  Table
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult<IList<Dept>> List()
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from Dept order by PDept.ID,Layer");
            var list = query.List<Dept>();
            return Json(list);
        }

        /// <summary>
        /// Add
        /// </summary>
        /// <param name="PID"></param>
        /// <param name="Name"></param>
        /// <param name="Layer"></param>
        /// <param name="Status"></param>
        /// <param name="Memo"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Add(Dept dept)
        {
            ISession session = NHibernateHelper.GetCurrentSession();

            // Find Parent Node of Code
            string PCode = "";
            if (dept.PDept != null) // Not the top Menu
            {
                IQuery query1 = session.CreateQuery("from Dept where ID=:pid");
                query1.SetParameter("pid", dept.PDept.ID);
                var dept1 = query1.UniqueResult<Dept>();
                if (dept1 != null)
                {
                    PCode = dept1.Code;
                }
            }

            // Generated for the current node Code
            string Code = "";
            //IQuery query = session.CreateQuery("from Dept where PDept.ID=:pid");
            //query.SetParameter("pid", dept.PDept == null ? 0 : dept.PDept.ID);



            //var list = query.List<Dept>();

            IList<Dept> list = new List<Dept>();
            if (dept.PDept == null) // top org
            {
                IQuery query = session.CreateQuery("from Dept where PDept is null");
                list = query.List<Dept>();
            }
            else // other
            {
                IQuery query = session.CreateQuery("from Dept where PDept.ID=:pid");
                query.SetParameter("pid", dept.PDept.ID);
                list = query.List<Dept>();
            }


            for (var i = 1; i <= 999; i++)
            {
                if (i < 10) // 1-9
                {
                    Code = PCode + "00" + i;
                }
                else if (i < 100) // 10-99
                {
                    Code = PCode + "0" + i;
                }
                else // 100-999
                {
                    Code = PCode + i;
                }
                if (list.Where(o => o.Code == Code).Count() == 0)
                {
                    break;
                }
            }

            // Add
            dept.Code = Code;
            session.SaveOrUpdate(dept);
            return Json(new Result
            {
                Code = 200,
                Msg = "Added successfully！"
            });
        }

        /// <summary>
        /// Edit
        /// </summary>
        /// <param name="dept"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Edit(Dept dept)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(dept);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Edit Success！"
            });
        }

        /// <summary>
        /// Delete
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Delete(int id)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.Delete("from Dept where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Delete Success！"
            });
        }
    }
}
