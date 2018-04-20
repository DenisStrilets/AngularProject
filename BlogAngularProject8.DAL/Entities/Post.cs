using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BlogAngularProject8.DAL.Entities
{
    public class Post
    {
        [Key]

        public int PostId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }

        public DateTime DateTime { get; set; }

        public virtual ICollection<Comment> Comment { get; set; }


        public Post()
        {
            Comment = new List<Comment>();
        }
    }
}
