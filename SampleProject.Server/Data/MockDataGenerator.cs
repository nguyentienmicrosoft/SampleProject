using SampleProject.Server.DTOs.Records;
using SampleProject.Server.Enums;

namespace SampleProject.Server.Data
{
    public static class MockDataGenerator
    {
        public static int NUM_RECORDS = 5000;
        public static List<RecordDto> GetMockRecords()
        {
            var items = new List<RecordDto>();
            for (int i = 1; i <= NUM_RECORDS; i++)
            {
                var item = new RecordDto(Guid.NewGuid(), "Email" + i, DateTime.UtcNow, DateTime.UtcNow.AddMinutes(2), "ReceiverAddress" + i, "ReceiverName" + i, "ContentEmail" + i, ["CC", "CC" + i], ["BCC", "BCC" + i], (Enums.RecordStatuses)(i % 4), (RecordSeries)(i % 4), (RecordTypes)(i % 3));
                items.Add(item);
            }

            return items;
        }
    }
}
