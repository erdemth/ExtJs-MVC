using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp.Model
{
    /// <summary>
    /// Returns the paged result
    /// </summary>
    public class ListResult<T> : Result
    {
        /// <summary>
        /// The total number of records
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// Current page record
        /// </summary>
        public IList<T> Items { get; set; }
    }
}
