
using BlogAngularProject8.DAL.Entities;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace BlogAngularProject8.DAL.Repositories
{
   public class PostRepository
    {
        private string _connectionString;

        public PostRepository(string connectionstring)
        {
            _connectionString = connectionstring;
        }


        public void Create(Post post)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {

                
                var sqlQuery = "INSERT INTO Post (Author,DateTime,Description,Title) VALUES(@Author,@DateTime,@Description,@Title)";
                db.Execute(sqlQuery, post);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "DELETE FROM Post WHERE PostId = @id";
                db.Execute(sqlQuery, new { id });
            }
        }


        public Post Get(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery= db.Query<Post>("SELECT * FROM Post WHERE PostId = @id", new { id }).FirstOrDefault();
                return sqlQuery;
            }
        }

         

        public IEnumerable<Post> GetAll()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery= db.Query<Post>("SELECT * FROM POST ").ToList();
                return sqlQuery;
            }

        }

        public void Update(Post post)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "UPDATE Post SET Author = @Author, DateTime = @DateTime, Description = @Description, Title = @Title  WHERE PostId = @PostId";
                db.Execute(sqlQuery, post);
            }
        }
    }
}
