using SampleProject.Server.Data;
using SampleProject.Server.DTOs;
using SampleProject.Server.DTOs.Records;
using SampleProject.Server.Extensions;

namespace SampleProject.Server.Services;

public class RecordService : IRecordService
{
    public async Task<AppResponse<RecordDto>> GetRecordByIdAsync(Guid id)
    {
        await Task.CompletedTask;
        var idx = new Random().Next(0, MockDataGenerator.NUM_RECORDS - 1);
        var item = MockDataGenerator.GetMockRecords()[idx];

        return AppResponse<RecordDto>.Success(item);
    }

    public async Task<AppResponse<PaginationResult<RecordDto>>> GetRecordsAsync(PaginationRequest request)
    {
        await Task.CompletedTask;
        var items = MockDataGenerator.GetMockRecords().Paginate(request);

        var paginationResult = new PaginationResult<RecordDto>(request)
        {
            Items = items,
            TotalCount = MockDataGenerator.NUM_RECORDS
        };

        return AppResponse<PaginationResult<RecordDto>>.Success(paginationResult);
    }
}
