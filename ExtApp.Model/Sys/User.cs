using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// User  Table
    /// </summary>
    public class User
    {
        /// <summary>
        /// User ID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// User Name (Login Name)
        /// </summary>
        public virtual string Username { get; set; }

        /// <summary>
        /// Password (Login Password)
        /// </summary>
        public virtual string Password { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

        /// <summary>
        /// gnder (0-Male，1-Femal，Other-Not Set)
        /// </summary>
        public virtual int Sex { get; set; }

        /// <summary>
        /// Role
        /// </summary>
        public virtual Role UserRole { get; set; }

        /// <summary>
        /// Dept
        /// </summary>
        public virtual Dept UserDept { get; set; }

        /// <summary>
        /// Layer
        /// </summary>
        public virtual int Layer { get; set; }

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
