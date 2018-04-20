
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
   public class CommentRepository
    {
        private string _connectionString;

        public CommentRepository(string connectionstring)
        {
            _connectionString = connectionstring;
        }


        public void Create(Comment comment)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "INSERT INTO Comment (Author,CommentText,DateTime,PostId) VALUES(@Author,@CommentText,@DateTime,@PostId)";
                db.Execute(sqlQuery, comment);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "DELETE FROM Comment WHERE CommentId = @id";
                db.Execute(sqlQuery, new { id });
            }
        }


        public Comment Get(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Comment>("SELECT * FROM Comment WHERE CommentId = @id", new { id }).FirstOrDefault();
            }
        }

        public IEnumerable<Comment> GetAll()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Comment>("SELECT * FROM Comment").ToList();
            }


        }

        public IEnumerable<Comment> GetCommentByPostId(int ? id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Comment>("SELECT *FROM Comment WHERE PostId = @id" , new { id }).ToList();
            }


        }


        public void Update(Comment comment)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "UPDATE Comment SET Author = @Author, CommentText = @CommentText, DateTime = @DateTime, PostId = @PostId  WHERE CommentId = @CommentId";
                db.Execute(sqlQuery, comment);
            }
        }
    }
}
