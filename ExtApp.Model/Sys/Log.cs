using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// System Log Table
    /// </summary>
    public class Log
    {
        /// <summary>
        /// LogID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Type of
        /// </summary>
        public virtual LogType Type { get; set; }

        /// <summary>
        /// Source
        /// </summary>
        public virtual LogSource Source { get; set; }

        /// <summary>
        /// Level
        /// </summary>
        public virtual LogLevel Level { get; set; }

        /// <summary>
        /// Responsible person (Type of valid for User)
        /// </summary>
        public virtual User AddUser { get; set; }

        /// <summary>
        /// Time of
        /// </summary>
        public virtual DateTime AddTime { get; set; }

        /// <summary>
        /// IP address
        /// </summary>
        public virtual string IP { get; set; }

        /// <summary>
        /// Title
        /// </summary>
        public virtual string Title { get; set; }

        /// <summary>
        /// Content
        /// </summary>
        public virtual string Content { get; set; }

        /// <summary>
        /// Status
        /// </summary>
        public virtual int Status { get; set; }

        /// <summary>
        /// Memo
        /// </summary>
        public virtual string Memo { get; set; }
    }
}
