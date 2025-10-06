import { useEffect, useState } from 'react';
import { makeStyles, mergeClasses } from '@fluentui/react-components';
import { getRecords } from './apis/records';
import ErrorBoundary from './components/ErrorBoundary';

const useStyles = makeStyles({
  root: { color: 'red' },
  rootPrimary: { color: 'blue' },
});

function App() {
    const classes = useStyles();
	const [data, setData] = useState<any[]>([]);

    useEffect(() => {
		getRecords({
			pageNumber: 1,
			pageSize: 100,
			sortBy: 'SentAt',
			sortOrder: 'asc'
		}).then(records => {
			console.log(records);
			setData(records);
		});
    }, []);


	return (
		<div>

		</div>
	);

}

export default App;