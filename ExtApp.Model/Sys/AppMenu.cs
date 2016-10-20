using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// System  Menu Table
    /// </summary>
    public class AppMenu
    {
        /// <summary>
        ///  MenuID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

        /// <summary>
        /// Code
        /// </summary>
        public virtual string Code { get; set; }

        /// <summary>
        /// Parent Node Code
        /// </summary>
        public virtual int PID { get; set; }

        /// <summary>
        /// Type of (1-Module，2-url)
        /// </summary>
        public virtual int UrlType { get; set; }

        /// <summary>
        /// Module address v url
        /// </summary>
        public virtual string Url { get; set; }

        /// <summary>
        /// Icon Type (1-Style Class Name，2-Pic. Path)
        /// </summary>
        public virtual int IconType { get; set; }

        /// <summary>
        /// Icon
        /// </summary>
        public virtual string Icon { get; set; }

        /// <summary>
        /// Layer
        /// </summary>
        public virtual int Layer { get; set; }

        /// <summary>
        /// Status (0-Normal，-1-delete)
        /// </summary>
        public virtual int Status { get; set; }

        /// <summary>
        /// Memo
        /// </summary>
        public virtual string Memo { get; set; }
    }
}
