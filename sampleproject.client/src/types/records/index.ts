export type Record = {
    id: string
    emailId: string
    createdAt: Date
    sentAt: Date
    receiverAddress: string
    receiverName: string
    content: string
    ccs: string[]
    bccs: string[]
    status: RecordStatuses
    series: RecordSeries
    type: RecordTypes
}

export enum RecordStatuses {
    Sent,
    Failed,
    Read,
    Replied
}

export enum RecordSeries {
    Newsletter,
    Promotion,
    Transactional,
    Alert
}

export enum RecordTypes {
    Internal,
    External,
    Public
}