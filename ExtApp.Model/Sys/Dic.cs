using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Dictionary Table
    /// </summary>
    public class Dic
    {
        /// <summary>
        /// DictionaryID
        /// </summary>
        public virtual int ID { get; set; }

        /// <summary>
        /// Id 
        /// </summary>
        public virtual string Code { get; set; }

        /// <summary>
        /// Type of
        /// </summary>
        public virtual DicType Type { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public virtual string Name { get; set; }

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
