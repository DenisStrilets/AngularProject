using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModels.Models
{
   public class CommentViewModel
    {
        public int CommentId { get; set; }

        public string Author { get; set; }

        public string CommentText { get; set; }

        public DateTime DateTime { get; set; }

        public int PostId { get; set; }

    }
}
