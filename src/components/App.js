import React from 'react';

import Profile from './profile/Profile';
import userData from "../user.json";

import Statistics from './statistics/Statistics';
import statisticsData from '../statistical-data.json';

import FriendList from './friendList/FriendList';
import friendsData from '../friends.json';

import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactionData from "../transactions.json";

const App = () => {
    return (
      <>
        <Profile
         url={userData.avatar}
         name={userData.name}
         tag={userData.tag}
         location={userData.location}
         stats={userData.stats}/>

        <Statistics
          title={'Upload stats'}
          stats={statisticsData} 
         />;
        
        <FriendList
          friends = {friendsData}
        />

        <TransactionHistory 
          transaction = {transactionData}
        />
      </>    
    );
};

export default App;