using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BlogAngularProject8.DAL.Entities
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }

        public string Author { get; set; }

        public string CommentText { get; set; }

        public DateTime DateTime { get; set; }

        public int PostId { get; set; }

        [ForeignKey(nameof(PostId))]
        public virtual Post Post { get; set; }
    }
}
