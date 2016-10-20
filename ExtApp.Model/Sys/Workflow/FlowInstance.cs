using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    ///  Workflow instance (corresponding to a specific instance of a Workflow)
    /// </summary>
    public class FlowInstance
    {
        /// <summary>
        ///  Workflow Instance Guid
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        /// Create a Workflow instance
        /// </summary>
        public FlowInstance()
        {

        }

        /// <summary>
        /// Create a Workflow instance
        /// </summary>
        /// <param name="guid"> Workflow Instance Guid</param>
        public FlowInstance(string guid)
        {

        }

        /// <summary>
        /// Create a Workflow instance
        /// </summary>
        /// <param name="model"> Workflow Instance model</param>
        public FlowInstance(FlowInstanceModel model)
        {

        }

        /// <summary>
        /// Approval consent
        /// </summary>
        /// <param name="model">Approve the Data model</param>
        public void Approve(ApproveModel model)
        {

        }

        /// <summary>
        /// Approval rejected
        /// </summary>
        /// <param name="model">Approve the Data model</param>
        public void Reject(ApproveModel model)
        {

        }

        /// <summary>
        /// Returns to a user
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public IList<string> GetApproveData(int userID)
        {
            return new List<string>();
        }
    }

    /// <summary>
    ///  The Workflow sample model
    /// </summary>
    public class FlowInstanceModel
    {
        /// <summary>
        ///  Workflow inctanceGuid
        /// </summary>
        public string Guid { get; set; }

        /// <summary>
        ///  Workflow inctance Data (You can always pass down)
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }

    /// <summary>
    /// Approve the Data model
    /// </summary>
    public class ApproveModel
    {
        /// <summary>
        /// Approval Data (can be passed down)
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }
}
