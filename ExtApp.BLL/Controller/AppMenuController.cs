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
    /// System Menu Controller
    /// </summary>
    public class AppMenuController : ApiController
    {
        /// <summary>
        /// Get the Column Table
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult<IList<AppMenu>> List()
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            IQuery query = session.CreateQuery("from AppMenu order by PID,Layer");
            IList<AppMenu> list = query.List<AppMenu>();
            return Json(list);
        }

        /// <summary>
        /// Add
        /// </summary>
        /// <param name="appMenu"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Add(AppMenu appMenu)
        {
            ISession session = NHibernateHelper.GetCurrentSession();

            // Find Parent Node of Code
            string PCode = "";
            if (appMenu.PID > 0) // Not the top menu
            {
                IQuery query1 = session.CreateQuery("from AppMenu where ID=:pid");
                query1.SetParameter("pid", appMenu.PID);
                AppMenu appMenu1 = query1.UniqueResult<AppMenu>();
                if (appMenu1 != null)
                {
                    PCode = appMenu1.Code;
                }
            }

            // Generates Code for the current node
            string Code = "";
            IQuery query = session.CreateQuery("from AppMenu where PID=:pid");
            query.SetParameter("pid", appMenu.PID);
            IList<AppMenu> list = query.List<AppMenu>();
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

            // Add Menu
            appMenu.Code = Code;
            session.SaveOrUpdate(appMenu);
            return Json(new Result
            {
                Code = 200,
                Msg = "Added Successfully！"
            });
        }

        /// <summary>
        /// Edit
        /// </summary>
        /// <param name="appMenu"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult<Result> Edit(AppMenu appMenu)
        {
            ISession session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(appMenu);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Edit Success！"
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
            session.Delete("from AppMenu where ID=" + id);
            session.Flush();
            return Json(new Result
            {
                Code = 200,
                Msg = "Delet eSuccess！"
            });
        }
    }
}
