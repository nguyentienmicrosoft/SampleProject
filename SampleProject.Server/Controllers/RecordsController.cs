using Microsoft.AspNetCore.Mvc;
using SampleProject.Server.DTOs;
using SampleProject.Server.DTOs.Records;
using SampleProject.Server.Services;

namespace SampleProject.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordsController(IRecordService service) : ControllerBase
    {
        [HttpGet]
        public async Task<AppResponse<PaginationResult<RecordDto>>> GetRecords([FromQuery]PaginationRequest request)
        {
            return await service.GetRecordsAsync(request);
        }

        [HttpGet("{id}")]
        public async Task<AppResponse<RecordDto>> GetRecord([FromRoute]Guid id)
        {
            return await service.GetRecordByIdAsync(id);
        }
    }
}
