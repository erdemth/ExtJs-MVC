using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// User Login Information Table
    /// </summary>
    public class LoginSession
    {
        /// <summary>
        /// Login Guid
        /// </summary>
        public virtual string Guid { get; set; }

        /// <summary>
        /// Login User 
        /// </summary>
        public virtual User LoginUser { get; set; }

        /// <summary>
        /// Login Time
        /// </summary>
        public virtual DateTime LoginTime { get; set; }

        /// <summary>
        /// Login IP address
        /// </summary>
        public virtual string LoginIP { get; set; }

        /// <summary>
        /// Time out (Sec)
        /// </summary>
        public virtual int Expire { get; set; }
    }
}
