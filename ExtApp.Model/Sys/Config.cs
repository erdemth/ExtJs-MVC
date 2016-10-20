using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// System Configuration Table
    /// </summary>
    public class Config
    {
        /// <summary>
        /// ConfigurationID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Section Node 
        /// </summary>
        public virtual ConfigSection Section { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

        /// <summary>
        /// Configuration Key
        /// </summary>
        public virtual string Key { get; set; }

        /// <summary>
        /// ConfigurationValue
        /// </summary>
        public virtual string Value { get; set; }

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
