using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Returns the execution result
    /// </summary>
    public class Result
    {
        /// <summary>
        /// Status Code (200-Success，300-Failure，301-Login time out)
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// Status Code Message
        /// </summary>
        public string Msg { get; set; }
    }
}
