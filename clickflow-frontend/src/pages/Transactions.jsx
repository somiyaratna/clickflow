import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import fetchAllTransactions from '../api/fetchAllTransactions';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);
  useEffect(() => {
    setUser(userDetails.user);
  }, [userDetails]);

  useEffect(() => {
    if (!userDetails.token) {
      dispatch(logout());
      navigate("/login");
    }
    setUser(userDetails.user)
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (user) {
          const response = await fetchAllTransactions(user._id);
          setTransactions(response);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [user]);

  return (
    <div className='bg-[#A4C8FF]'>
      <div className="max-w-6xl mx-auto min-h-screen text-[#14213D] p-2 sm:p-4 pt-28 md:pt-12">
        <h1 className="text-2xl font-semibold mb-4">Transaction History</h1>
        <div className="space-y-4">
          {transactions.map(transaction => {
            const amountClass = transaction.type === 'deposit' ? 'text-green-500 text-lg font-bold' : 'text-red-500 text-lg font-bold';
            const statusClass = transaction.status === 'pending' ? 'capitalize text-yellow-500' :
              transaction.status === 'accepted' ? 'capitalize text-green-500' : 'capitalize text-red-500';

            return (
              <div key={transaction._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between">
                <div>
                  <p className='capitalize text-xl'> {transaction.type}</p>
                  {transaction.type === 'withdrawal' && (
                    <p className={statusClass}><strong>Status:</strong> {transaction.status}</p>
                  )}
                  <p className={amountClass}> USDT {transaction.amount}</p>
                </div>
                <p className='text-sm sm:text-base'>{moment(transaction.createdAt).format('MMM Do YYYY, h:mm a')}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transactions;