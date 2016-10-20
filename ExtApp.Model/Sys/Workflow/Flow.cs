using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    /// Workflow instance
    /// </summary>
    public class Flow
    {
        /// <summary>
        /// Add a workflow
        /// </summary>
        /// <param name="model">Workflow Solid Model</param>
        public void Add(FlowModel model)
        {

        }

        /// <summary>
        /// Edit the workflow
        /// </summary>
        /// <param name="model">Workflow Solid Model</param>
        public void Edit(FlowModel model)
        {

        }

        /// <summary>
        /// delete Workflow 
        /// </summary>
        /// <param name="model"> Workflow Entity Id</param>
        public void Delete(int id)
        {

        }
    }

    /// <summary>
    /// Workflow Solid Model
    /// </summary>
    public class FlowModel
    {
        /// <summary>
        /// Number
        /// </summary>
        public int ID { get; set; }

        /// <summary>
        ///  Workflow Data
        /// </summary>
        public string Data { get; set; }

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
