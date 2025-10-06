using SampleProject.Server.Enums;

namespace SampleProject.Server.DTOs.Records;
public record RecordDto(
    Guid Id, 
    string EmailId, 
    DateTime CreatedAt, 
    DateTime SentAt, 
    string ReceiverAddress, 
    string ReceiverName, 
    string Content, 
    List<string> CCs, 
    List<string> BCCs, 
    RecordStatuses Status, 
    RecordSeries Series, 
    RecordTypes Type
);