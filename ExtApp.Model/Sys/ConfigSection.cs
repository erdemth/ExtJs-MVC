using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Configuration Node
    /// </summary>
    public class ConfigSection
    {
        /// <summary>
        /// Configuration Node ID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Parent Configuration Node 
        /// </summary>
        public virtual ConfigSection PSection { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

        /// <summary>
        /// Layer
        /// </summary>
        public virtual int Layer { get; set; }

        /// <summary>
        /// Statu ( 0-Normal，-1-Delete )
        /// </summary>
        public virtual int Status { get; set; }

        /// <summary>
        /// Memo
        /// </summary>
        public virtual string Memo { get; set; }
    }
}
