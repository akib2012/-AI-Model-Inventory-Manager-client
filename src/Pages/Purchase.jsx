import React, { useContext, useEffect, useState } from 'react';
import Authcontext from '../ContextAuth/Authcontext';
import LoadingSpinner from '../Components/LoadingSpinner';


const Purchase = () => {

    const { user, loading, setLoading } = useContext(Authcontext);
      const [purchase, setPurchase] = useState([]);
    
      //   console.log(user?.email);
    
      useEffect(() => {
        fetch(`http://localhost:3000/my-Purchase?email=${user.email}`,{
            headers:{
             authorization: `Bearer ${user?.accessToken}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setPurchase(data);
            setLoading(false);
          })
          .catch((err) => console.error("Error fetching models:", err));
      }, [user?.email, setLoading, setPurchase, user?.accessToken]);
    
      if (loading) {
        return <LoadingSpinner />;
      }



    return (
        <div>
            <h3>Purchase page this</h3>

            <p>purchase: {purchase.length}</p>
        </div>
    );
};

export default Purchase;