using SampleProject.Server.Constants;
using SampleProject.Server.DTOs;

namespace SampleProject.Server.Extensions;

public static class PaginationExtensions
{
    public static IEnumerable<T> Paginate<T>(this IEnumerable<T> source, PaginationRequest request)
    {
        if (request == null)
        {
            throw new ArgumentNullException(nameof(request));
        }

        if (request.PageNumber <= 0)
            request.PageNumber = 1;

        if (request.PageSize <= 0)
            request.PageSize = 10;

        IEnumerable<T> query = source;

        if (!string.IsNullOrWhiteSpace(request.SortBy))
        {
            var prop = typeof(T).GetProperty(request.SortBy!);
            if (prop == null)
            {
                throw new InvalidOperationException(
                    $"SortBy '{request.SortBy}' is not a valid property of {typeof(T).Name}");
            }

            query = string.Equals(request.SortOrder, SortDirections.Ascending, StringComparison.OrdinalIgnoreCase)
                ? query.OrderBy(x => prop.GetValue(x, null))
                : query.OrderByDescending(x => prop.GetValue(x, null));
        }

        return query
            .Skip((request.PageNumber - 1) * request.PageSize)
            .Take(request.PageSize);
    }
}
