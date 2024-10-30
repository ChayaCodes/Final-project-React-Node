import React from 'react';
import './contectList.css';
import { useGetAllContectsQuery } from '../ContectApiSlice';

function ContectsList() {
  const {
    data: contects, isError, error, isLoading,
  } = useGetAllContectsQuery();

  

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    
    console.error('An error occurred:', error);
    return <div>{JSON.stringify(error)}</div>;
  }

  const sortedContects = [...contects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


  return (
    <div className="contects-list">
      <table className="contects-list-table">
        <thead>

          <tr>
            <th>תאריך</th>
            <th>נצפה</th>
            <th>שם פרטי </th>
            <th>שם משפחה</th>
            <th>מייל</th>
            <th>טלפון</th>
            <th>הודעה</th>
          </tr>
        </thead>
        <tbody>
          {sortedContects.map((contect) => (
            <tr key={contect._id}>
              <td>{contect.createdAt}</td>
              <td>{contect.viewed ? 'כן' : 'לא'}</td>
              <td>{contect.firstName}</td>
              <td>{contect.lastName}</td>
              <td>{contect.email}</td>
              <td>{contect.phone}</td>
              <td>{contect.message}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContectsList;
