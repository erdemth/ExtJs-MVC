using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

using ExtApp.Model;

namespace ExtApp
{
    /// <summary>
    /// Log Helper Class
    /// </summary>
    public sealed class LogHelper
    {
        /// <summary>
        /// Write the Log to the Data library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="level"></param>
        /// <param name="memo"></param>
        public static void SaveLog(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, LogLevel level = LogLevel.Info, string memo = "")
        {
            var log = new Log
            {
                AddTime = DateTime.Now,
                AddUser = null,
                Content = content,
                IP = "127.0.0.1" ,// HttpContext.Current.Request.UserHostAddress,
                Level = level,
                Memo = memo,
                Source = source,
                Status = 0,
                Title = title,
                Type = type
            };
            var session = NHibernateHelper.GetCurrentSession();
            session.SaveOrUpdate(log);
            session.Flush();
        }

        /// <summary>
        /// Write Fatal News to the Data Library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="memo"></param>
        public static void Fatal(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Fatal, memo);
        }

        /// <summary>
        /// Write error News to the Data library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="memo"></param>
        public static void Error(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Error, memo);
        }

        /// <summary>
        /// Write Warning to the Data library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="memo"></param>
        public static void Warn(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Warn, memo);
        }

        /// <summary>
        /// Write the generic News to the Data library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="memo"></param>
        public static void Info(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Info, memo);
        }

        /// <summary>
        /// Write debug messages to the Data library
        /// </summary>
        /// <param name="title"></param>
        /// <param name="content"></param>
        /// <param name="type"></param>
        /// <param name="source"></param>
        /// <param name="memo"></param>
        public static void Debug(string title, string content = "", LogType type = LogType.System, LogSource source = LogSource.DesktopApp, string memo = "")
        {
            SaveLog(title, content, type, source, LogLevel.Debug, memo);
        }
    }
}
