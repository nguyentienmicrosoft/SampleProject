import { RecordStatuses } from '../../types/records';

interface Props {
    status: RecordStatuses    
}

function Status({ status }: Props) {
    if(status === RecordStatuses.Sent) {
        return (
            <span style={{ color: 'green' }}>Sent</span>
        )
    }
    if (status === RecordStatuses.Failed) {
        return (
            <span style={{ color: 'red' }}>Failed</span>
        )
    }
    if (status === RecordStatuses.Read) {
        return (
            <span style={{ color: 'blue' }}>Read</span>
        )
    } 

    return (
        <span style={{ color: 'orange' }}>Replied</span>
    ) 

}

export default Status
