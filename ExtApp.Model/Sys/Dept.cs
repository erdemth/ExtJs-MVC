using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Organizational Chart
    /// </summary>
    public class Dept
    {
        /// <summary>
        /// Organization ID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Parent Dept
        /// </summary>
        public virtual Dept PDept { get; set; }

        /// <summary>
        /// Code
        /// </summary>
        public virtual string Code { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

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
