using SampleProject.Server.DTOs;
using SampleProject.Server.DTOs.Records;

namespace SampleProject.Server.Services
{
    public interface IRecordService
    {
        Task<AppResponse<PaginationResult<RecordDto>>> GetRecordsAsync(PaginationRequest request);

        Task<AppResponse<RecordDto>> GetRecordByIdAsync(Guid id);
    }
}
