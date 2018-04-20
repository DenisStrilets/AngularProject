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
    public class PostService
    {
        private PostRepository _postRepository;

        private CommentRepository _commentRepository;

        public PostService(string connection)
        {
            _commentRepository = new CommentRepository(connection);
            _postRepository = new PostRepository(connection);
        }

        public IEnumerable<PostViewModel> GetAll()
        {
            List<Post> posts = _postRepository.GetAll().ToList();
           
            var result = Mapper.Map<List<Post>, List<PostViewModel>>(posts);
            return result;
        }

        public PostViewModel Get(int ? id)
        {
            Post post = _postRepository.Get(id.Value);

            var comments = _commentRepository.GetCommentByPostId(id).ToList();

            post.Comment = comments;

            var result = Mapper.Map<Post, PostViewModel>(post);

            return result;
        }

        public void Create(PostSendViewModel postSendViewModel)
        {

            //var post = Mapper.Map<PostSendViewModel, Post>(postSendViewModel);
            Post post = new Post();

            post.Author = postSendViewModel.Author;
            post.Title = postSendViewModel.Title;
            post.Description = postSendViewModel.Description;

            


            if (post == null)
            {
                return;
            }
            post.DateTime = DateTime.Now;
            _postRepository.Create(post);

        }

        public void Update(PostViewModel postViewModel)
        {
            var post = Mapper.Map<PostViewModel, Post>(postViewModel);
            _postRepository.Update(post);
        }

        public void Delete(int id)
        {
            _postRepository.Delete(id);
        }
    }
}
