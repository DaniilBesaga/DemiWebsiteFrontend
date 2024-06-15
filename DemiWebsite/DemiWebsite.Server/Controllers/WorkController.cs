using DemiWebsite.Server.GenericRepository;
using DemiWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemiWebsite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkController : ControllerBase
    {
        private IGenericRepository<WorkItem> _workRepository;
        public WorkController(IGenericRepository<WorkItem> workRepository)
        {
            _workRepository = workRepository;
        }
        [HttpGet]
        public async Task<ActionResult> GetWorks()
        {
            try
            {
                var works = await _workRepository.GetAllAsync();
                return Ok(works);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("preview")]
        public async Task<ActionResult> GetWorksPreview()
        {
            try
            {
                var works = await _workRepository.GetAllAsync();
                
                return Ok(works.Select((work, index) => new WorkPreview
                {
                    Id = work.Id,
                    Name = work.Name,
                    ImgUrl = work.ImgUrl,
                    ReleaseDate = work.ReleaseDate
                }));
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetWorkById(int id)
        {
            try
            {
                var work = await _workRepository.GetByIdAsync(id);

                if (work == null)
                {
                    return NotFound();
                }
                return Ok(work);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpPost]
        public async Task<ActionResult> CreateWork([FromBody] WorkItem work)
        {
            try
            {
                if (work == null)
                {
                    return BadRequest();
                }

                await _workRepository.InsertAsync(work);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return CreatedAtAction(nameof(GetWorkById), new { id = work.Id }, work);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateWork(int id, [FromBody] WorkItem work)
        {
            try
            {
                if (work == null || id != work.Id)
                {
                    return BadRequest();
                }

                var existingWork = await _workRepository.GetByIdAsync(id);
                if (existingWork == null)
                {
                    return NotFound();
                }
                await _workRepository.UpdateAsync(existingWork);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWork(int id)
        {
            try
            {
                var existingWork = await _workRepository.GetByIdAsync(id);
                if (existingWork == null)
                {
                    return NotFound();
                }
                await _workRepository.DeleteAsync(id);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NoContent();
        }
    }
}
