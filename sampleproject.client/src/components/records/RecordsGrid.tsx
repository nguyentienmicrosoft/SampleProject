import { use, useEffect, useState } from 'react';
import { getRecords } from '../../apis/records';
import { type Record } from '../../types/records';
import {
  useScrollbarWidth,
  useFluent,
  createTableColumn,
  Skeleton,
  SkeletonItem
} from '@fluentui/react-components';

import {
  DataGridBody,
  DataGrid,
  DataGridRow,
  DataGridHeader,
  DataGridCell,
  DataGridHeaderCell,
  type RowRenderer,
} from '@fluentui-contrib/react-data-grid-react-window';
import { formatDate } from '../../libs/helper';
import Status from './Status';
import React from 'react';

const CellShimmer = React.memo(function CellShimmer() {
  return (
    <Skeleton style={{ width: '100%' }}>
      <SkeletonItem
        shape="rectangle"
        animation="pulse"
        appearance="translucent"
      />
    </Skeleton>
  );
});

function RecordsGrid() {
    const [data, setData] = useState<Record[]>([]);

    useEffect(() => {
        getRecords({
            pageNumber: 1,
            pageSize: 10,
            sortBy: 'SentAt',
            sortOrder: 'asc'
        }).then(response => {
            console.log(response);
            setData(response.data.items);
        });
    }, []);

    const columns = [
        createTableColumn<Record>({
            columnId: 'emailId',
            renderHeaderCell: () => {
                return 'Email ID';
            },
            renderCell: (item) => item.emailId,
            
        }),

        createTableColumn<Record>({
            columnId: 'sentAt',
            renderHeaderCell: () => {
                return 'Sent At';
            },
            renderCell: (item) => formatDate    (item.sentAt)
        }),

        createTableColumn<Record>({
            columnId: 'createdAt',
            renderHeaderCell: () => {
                return 'Created At';
            },
            renderCell: (item) => formatDate(item.createdAt)
        }),
        createTableColumn<Record>({
            columnId: 'receiverName',
            renderHeaderCell: () => {
                return 'Receiver Name';
            },
            renderCell: (item) => item.receiverName
        }),
        createTableColumn<Record>({
            columnId: 'receiverAddress',
            renderHeaderCell: () => {
                return 'Receiver Address';
            },
            renderCell: (item) => item.receiverAddress
        }),
        createTableColumn<Record>({
            columnId: 'status',
            renderHeaderCell: () => {
                return 'Status';
            },
            renderCell: (item) => <Status status={item.status} />
        }),
    ];

    const { targetDocument } = useFluent();
    const scrollbarWidth = useScrollbarWidth({ targetDocument });

    return (
        <DataGrid
            items={data}
            columns={columns}
            focusMode="cell"
            sortable={true}
            selectionMode="multiselect"
        >
            <DataGridHeader style={{ paddingRight: scrollbarWidth }}>
                <DataGridRow>
                {({ renderHeaderCell }) => (
                    <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                )}
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Record> 
                itemSize={50} 
                height={400}
                listProps={{ useIsScrolling: true }}
            >
                {renderRow}
            </DataGridBody>
        </DataGrid>
    );

}

const renderRow: RowRenderer<Record> = ({ item, rowId }, style, _, isScrolling) => (
  <DataGridRow<Record> key={rowId} style={style}>
    {({ renderCell }) => (
      <DataGridCell focusMode="group">
        {
        isScrolling ? <CellShimmer /> : renderCell(item)
        }
      </DataGridCell>
    )}
  </DataGridRow>
);

export default RecordsGrid;