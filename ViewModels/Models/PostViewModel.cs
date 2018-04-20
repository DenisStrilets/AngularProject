using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModels.Models
{
   public class PostViewModel
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public DateTime DateTime { get; set; }

        public virtual ICollection<CommentViewModel> Comment { get; set; }
    }
}
