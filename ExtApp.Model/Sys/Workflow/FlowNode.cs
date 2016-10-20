using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtApp.Model
{
    /// <summary>
    ///  Workflow  Node 
    /// </summary>
    public class FlowNode
    {
        /// <summary>
        ///  Node Name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        ///  Node Type
        /// </summary>
        public FlowNodeType Type { get; set; }

        /// <summary>
        ///  Node Solid Data
        /// </summary>
        public IList<IDictionary<string, object>> Data { get; set; }
    }

    /// <summary>
    ///  Workflow  Node Type
    /// </summary>
    public enum FlowNodeType
    {
        /// <summary>
        /// Start Node 
        /// </summary>
        Start,

        /// <summary>
        /// End Node 
        /// </summary>
        End,

        /// <summary>
        /// Normal Node 
        /// </summary>
        Normal,

        /// <summary>
        /// Select a branch of the Node according to the conditions
        /// </summary>
        Condition,

        /// <summary>
        /// While taking a number of branch Node
        /// </summary>
        Split
    }

    /// <summary>
    ///  Node Data Model
    /// </summary>
    public class FlowNodeData
    {
        /// <summary>
        /// Configuration in Node of Data
        /// </summary>
        public IList<IDictionary<string, object>> ConfigData { get; set; }

        /// <summary>
        /// Data passed down from the upper Node
        /// </summary>
        public IList<IDictionary<string, object>> FlowData { get; set; }
    }
}
