import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Summary from './Summary';
import Reports from './Reports';

function SingleTaskView({ selectedTask }: any) {

    console.log('====================================');
    console.log(selectedTask);
    console.log('====================================');

    /**
     * NOTE :
     * The selected task is accessible at this point. 
     * we can directly start displaying data within the current context,
     * we can use its unique identifier to trigger an API call.
     * This call fetches task-related data, aiding in the presentation of data summaries, reports, etc.
     * Passing this data to Summary and Reports components to enhance code organization.
    */

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Summary',
            children: <Summary selectedTask={selectedTask} />,
        },
        {
            key: '2',
            label: 'Reports',
            children: <Reports selectedTask={selectedTask} />,
        }
    ];

    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default SingleTaskView