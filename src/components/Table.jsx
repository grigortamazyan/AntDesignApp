import {Table, Typography, Image} from 'antd'
import { pokemons } from '../data'

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
        
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
        
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        sorter: (a, b) => a.number - b.number
    },
    {
        title: 'Class',
        dataIndex: 'classification',
        key: 'class',
        filters: [
            {
                text: 'Seed Pokemon',
                value: 'Seed Pokemon'
            },
            {
                text: 'Cocoon Pokemon',
                value: 'Cocoon Pokemon'
            },
            {
                text: 'Lizard Pokemon',
                value: 'Lizard Pokemon'
            },
        ], 
        onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: 'Images', 
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt="pokemon" width={150}/>
    }
];

const dataSource = pokemons.map(item => ({...item, key: item.id}))

const _Table = ({rows}) => {
    return (
        <Table 
            dataSource={dataSource}
            columns={columns}
            pagination={{
                pageSize: rows,
                //showSizeChanger: true,
                //pageSizeOptions: [5, 10, 15, 20]
            }
            }
        />
    )
}

export default _Table