using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Dictionary Item  Table
    /// </summary>
    public class DicItem
    {
        /// <summary>
        ///  Item ID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Dictionary
        /// </summary>
        public virtual Dic Dict { get; set; }

        /// <summary>
        /// Id 
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
        /// Status (0-Normal，-1-delete)
        /// </summary>
        public virtual int Status { get; set; }

        /// <summary>
        /// Memo
        /// </summary>
        public virtual string Memo { get; set; }
    }
}
