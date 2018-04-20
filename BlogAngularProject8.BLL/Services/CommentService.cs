using AutoMapper;
using BlogAngularProject8.DAL.Entities;
using BlogAngularProject8.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViewModels.Models;

namespace BlogAngularProject8.BLL.Services
{
   public class CommentService
    {
        private CommentRepository _commentRepository;

        public CommentService(string connection)
        {
            _commentRepository = new CommentRepository(connection);
        }

        public IEnumerable<CommentViewModel> GetAll()
        {
            List<Comment> comments = _commentRepository.GetAll().ToList();
            var result = Mapper.Map<List<Comment>, List<CommentViewModel>>(comments);
            return result;
        }

        public CommentViewModel Get(int? id)
        {
            Comment comment = _commentRepository.Get(id.Value);
            var result = Mapper.Map<Comment, CommentViewModel>(comment);
            return result;
        }

        public void Create(CommentSendViewModel commentSendViewModel)
        {


            Comment comment = new Comment();

            


            comment.Author = commentSendViewModel.Author;
            comment.CommentText = commentSendViewModel.CommentText;
            comment.PostId = commentSendViewModel.PostId;

            comment.DateTime = DateTime.Now;
            _commentRepository.Create(comment);
        }

        public void Update(CommentViewModel commentViewModel)
        {
            var comment = Mapper.Map<CommentViewModel, Comment>(commentViewModel);
            _commentRepository.Update(comment);
        }

        public void Delete(int id)
        {
            _commentRepository.Delete(id);
        }

    }
}
