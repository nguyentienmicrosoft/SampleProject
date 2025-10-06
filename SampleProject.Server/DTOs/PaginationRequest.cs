using SampleProject.Server.Constants;

namespace SampleProject.Server.DTOs;

public class PaginationRequest
{
    public int PageNumber { get; set; } = 1;

    public int PageSize { get; set; } = 10;

    public string? SortBy { get; set; }

    public string SortOrder { get; set; } = SortDirections.Ascending;
}
