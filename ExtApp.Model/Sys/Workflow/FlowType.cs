using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    ///  Workflow  classification  (According to the sub-module)
    /// </summary>
    public class FlowType
    {
        /// <summary>
        /// Add Workflow  classification 
        /// </summary>
        /// <param name="model"> Workflow  classification  Model</param>
        public void Add(FlowTypeModel model)
        {

        }

        /// <summary>
        /// Edit Workflow  classification 
        /// </summary>
        /// <param name="model"> Workflow  classification  Model</param>
        public void Edit(FlowTypeModel model)
        {

        }

        /// <summary>
        /// delete Workflow  classification 
        /// </summary>
        /// <param name="id"> Workflow classification id</param>
        public void Delete(int id)
        {

        }
    }

    /// <summary>
    ///  Workflow  classification  Model
    /// </summary>
    public class FlowTypeModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public int ID { get; set; }

        /// <summary>
        /// Name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Memo
        /// </summary>
        public string Memo { get; set; }

        /// <summary>
        /// Status (0-Normal，-1-delete)
        /// </summary>
        public int Status { get; set; }
    }
}