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
    [Route("api/Comment")]
    public class CommentController : Controller
    {
        private string _connectionString;

        private CommentService _commentService;


        public CommentController(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
            _commentService = new CommentService(_connectionString);
        }


        // GET: api/Comment
        [HttpGet]
        public IEnumerable<CommentViewModel> GetAll()
        {
            List<CommentViewModel> commentViews = _commentService.GetAll().ToList();
            return commentViews;
        }

        // GET: api/Comment/5
        [HttpGet("{id}")]
        public CommentViewModel Get(int id)
        {
            CommentViewModel comment = _commentService.Get(id);
            return comment;

        }

        // POST: api/Comment
        [HttpPost]
        public IActionResult Post([FromBody]CommentSendViewModel comment)
        {
            if (ModelState.IsValid)
            {
                _commentService.Create(comment);
                return Ok(comment);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Comment/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]CommentViewModel comment)
        {
            if (ModelState.IsValid)
            {
                _commentService.Update(comment);
                return Ok(comment);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentService.Delete(id);
            return Ok();
        }
    }
}