using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Returns the Login result
    /// </summary>
    public class LoginResult : Result
    {
        /// <summary>
        /// Login Ticket
        /// </summary>
        public string Ticket { get; set; }
    }
}
