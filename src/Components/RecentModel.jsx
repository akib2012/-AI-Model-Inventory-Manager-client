import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';

const RecentModel = () => {
    const [models, setModels] = useState([]);

   useEffect(() => {

     axios('http://localhost:3000/recent-model')
    .then(data => {
        console.log(data.data);
        setModels(data.data);


    })

   } , [])
    return (
        <div>
            <h4 className='text-center text-3xl font-bold my-6'>most recently added </h4>
            <div className='max-w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5 my-13 pb-6'>
                {
                    models.map(model => <ModelCard model={model} key={model.id}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default RecentModel;