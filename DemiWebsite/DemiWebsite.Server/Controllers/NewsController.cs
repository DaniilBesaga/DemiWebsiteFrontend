using DemiWebsite.Server.GenericRepository;
using DemiWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemiWebsite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private IGenericRepository<NewsItem> _newsRepository;
        public NewsController(IGenericRepository<NewsItem> newsRepository)
        {
            _newsRepository = newsRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetNews()
        {
            try
            {
                var news = await _newsRepository.GetAllAsync();
                return Ok(news);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("month/{month:int}")]
        public async Task<ActionResult> GetNewsByMonth(int Month)
        {
            try
            {
                var news = await _newsRepository.GetAllAsync();
                return Ok(news.Where(x=>x.PostDate.Month == Month));
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetNewsById(int id)
        {
            try
            {
                var news = await _newsRepository.GetByIdAsync(id);

                if (news == null)
                {
                    return NotFound();
                }
                return Ok(news);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpPost]
        public async Task<ActionResult> CreateNews([FromBody] NewsItem news)
        {
            try
            {
                if (news == null)
                {
                    return BadRequest();
                }

                await _newsRepository.InsertAsync(news);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return CreatedAtAction(nameof(GetNewsById), new { id = news.Id }, news);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateNews(int id, [FromBody] NewsItem news)
        {
            try
            {
                if (news == null || id != news.Id)
                {
                    return BadRequest();
                }

                var existingNews = await _newsRepository.GetByIdAsync(id);
                if (existingNews == null)
                {
                    return NotFound();
                }
                await _newsRepository.UpdateAsync(existingNews);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            try
            {
                var existingNews = await _newsRepository.GetByIdAsync(id);
                if (existingNews == null)
                {
                    return NotFound();
                }
                await _newsRepository.DeleteAsync(id);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }
    }
}
