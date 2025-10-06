namespace SampleProject.Server.DTOs;

public class PaginationResult<T>
{
    public PaginationResult()
    {
        
    }

    public PaginationResult(PaginationRequest request)
    {
        PageNumber = request.PageNumber;
        PageSize = request.PageSize;
    }

    public IEnumerable<T> Items { get; set; } = [];
    public int TotalCount { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
    public bool HasPreviousPage => PageNumber > 1;
    public bool HasNextPage => PageNumber < TotalPages;
}