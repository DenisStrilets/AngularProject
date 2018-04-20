using AutoMapper;
using BlogAngularProject8.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using ViewModels.Models;

namespace BlogAngularProject8.BLL.Mappers
{
   public static class AutoMapperConfig
    {

        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Comment, CommentViewModel>();
                cfg.CreateMap<CommentViewModel, Comment>();


                cfg.CreateMap<Post, PostViewModel>();
                cfg.CreateMap<PostViewModel, Post>();



            });

        }
    }
}
