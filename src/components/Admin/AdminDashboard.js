import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://pusak-server.vercel.app/members');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the server to delete the member with the given id
      await axios.delete(`https://pusak-server.vercel.app/members/${id}`);
      
      // Optionally, update the local state to remove the deleted member from the UI
      setMembers(members.filter(member => member.id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>University</th>
            <th>Subject</th>
            <th>Union/Pourasava</th>
            <th>Phone</th>
            <th>FB</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.university}</td>
              <td>{member.subject}</td>
              <td>{member.union_pourasava}</td>
              <td>
                <a href={`tel:${member.phone}`}>
                    {member.phone}
                </a>
              </td>
              <td>
                <a href={member.fb_profile} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fa-brands fa-facebook-f"></i>
                </a>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => handleDelete(member.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
