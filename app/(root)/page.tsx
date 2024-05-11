import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Itachi', lastName: 'Uchiha', email: 'itachi@gmail.com' }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.56} />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        transactions={[]}
        banks={[{ currentBalance: 234.34} , {} ]}
        user={loggedIn} />
    </section>
  )
}

export default Home
