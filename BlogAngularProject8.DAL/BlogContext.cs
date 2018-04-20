
using BlogAngularProject8.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BlogAngularProject8.DAL
{
    public class BlogContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<Comment> Comment { get; set; }


        public BlogContext(DbContextOptions<BlogContext> options) : base(options) { }
    }
}
