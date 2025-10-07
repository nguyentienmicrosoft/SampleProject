import { useEffect, useState } from 'react';
import { getRecords } from './apis/records';
import { type Record } from './types/records';
import RecordsGrid from './components/records/RecordsGrid';
function App() {
	const [data, setData] = useState<Record[]>([]);

    useEffect(() => {
		getRecords({
			pageNumber: 1,
			pageSize: 100,
			sortBy: 'SentAt',
			sortOrder: 'asc'
		}).then(response => {
			console.log(response);
			setData(response.data.items);
		});
    }, []);


	return (
		<div>
			<RecordsGrid />
		</div>
	);

}

export default App;