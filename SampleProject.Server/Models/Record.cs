using SampleProject.Server.Enums;

namespace SampleProject.Server.Models;

public class Record
{
    public Guid Id { get; set; }
    public string EmailId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime SentAt { get; set; }
    public string ReceiverAddress { get; set; }
    public string ReceiverName { get; set; }
    public string Content { get; set; }
    public List<string> CCs { get;set; }
    public List<string> BCCs { get; set; }
    public RecordStatuses Status { get; set; } // Sent, Failed, Read, Replied
    public RecordSeries Series { get; set; } // Optional grouping
    public RecordTypes Type { get; set; } // Internal, External, Confidential, Public
}
