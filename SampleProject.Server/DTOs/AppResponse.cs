namespace SampleProject.Server.DTOs;

public class AppResponse<T> where T : class
{
    public List<string> Errors { get; set; } = [];

    public T? Data { get; set; }

    public string Message { get; set; }

    public bool IsSuccess { get; set; }   

    public static AppResponse<T> Success(T data = null, string message = "")
    {
        return new AppResponse<T>
        {
            Data = data,
            Message = message,
            IsSuccess = true
        };
    }

    public static AppResponse<T> Error(List<string> errors, string message = "")
    {
        return new AppResponse<T>
        {
            Errors = errors,
            IsSuccess = false,
            Message = message
        };
    }
}
