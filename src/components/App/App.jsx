import { Profile } from 'components/Profile/Profile';
import userInfo from 'components/Profile/user.json';

import { Statistics } from '../Statistics/Statistics';
import data from 'components/Statistics/data.json';

import { FriendList } from '../Friends/Friends';
import friends from 'components/Friends/friendsData.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
          />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};