import React from 'react'
import Balanace from '../Components/Balance'
import Atm from '../Components/Atm'
import Transactions from '../Components/Transactions'

function AccountScreen() {
    return (
        <div>
            <Balanace/>
            <Atm/>
            <Transactions/>
        </div>
    )
}

export default AccountScreen
