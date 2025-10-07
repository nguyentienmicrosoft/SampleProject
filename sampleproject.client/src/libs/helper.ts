export const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const formatStatus = (status: number): string => {
    switch (status) {
        case 0:
            return 'Sent';
        case 1:
            return 'Failed';
        case 2:
            return 'Read';
        case 3:
            return 'Replied';
        default:
            return 'Unknown';
    }
}