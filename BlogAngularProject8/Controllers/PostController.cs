using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogAngularProject8.BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ViewModels.Models;

namespace BlogAngularProject8.Controllers
{
    [Produces("application/json")]
    [Route("api/Post")]
    public class PostController : Controller
    {
        private string _connectionString;

        private PostService _postService;


        public PostController(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
            _postService = new PostService(_connectionString);
        }


        // GET: api/Post
        [HttpGet]
        public IEnumerable<PostViewModel> GetAll()
        {
            List<PostViewModel> postViews = _postService.GetAll().ToList();
            return postViews;
        }

        // GET: api/Post/5
        [HttpGet("{id}")]
        public PostViewModel Get(int id)
        {
            PostViewModel post = _postService.Get(id);
            return post;

        }

        // POST: api/Post
        [HttpPost]
        public IActionResult Post([FromBody]PostSendViewModel post)
        {
            if (ModelState.IsValid)
            {
                _postService.Create(post);
                return Ok(post);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Post/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PostViewModel post)
        {
            if (ModelState.IsValid)
            {
                _postService.Update(post);
                return Ok(post);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id);
            return Ok();
        }
    }
}