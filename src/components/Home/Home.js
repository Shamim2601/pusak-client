import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [bloodGroupFilter, setBloodGroupFilter] = useState('');
  const [unionFilter, setUnionFilter] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://pusak-server.vercel.app/members');
        setMembers(response.data);
        setFilteredMembers(response.data); // Initialize with all members
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    // Apply filters
    const applyFilters = () => {
      let results = members;

      if (bloodGroupFilter) {
        results = results.filter(member => member.blood_group === bloodGroupFilter);
      }

      if (unionFilter) {
        results = results.filter(member => member.union_pourasava === unionFilter);
      }

      setFilteredMembers(results);
    };

    applyFilters();
  }, [bloodGroupFilter, unionFilter, members]);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Member List</h1>

      {/* Filters */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="bloodGroupFilter" className="form-label">Filter by Blood Group:</label>
            <select
              id="bloodGroupFilter"
              className="form-select"
              value={bloodGroupFilter}
              onChange={(e) => setBloodGroupFilter(e.target.value)}
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="unionFilter" className="form-label">Filter by Union/Pourasava:</label>
            <select
              id="unionFilter"
              className="form-select"
              value={unionFilter}
              onChange={(e) => setUnionFilter(e.target.value)}
            >
              <option value="">All Unions/Pourasavas</option>
              <option value="Durgapur">Durgapur</option>
              <option value="Gohaliabari">Gohaliabari</option>
              <option value="Salla">Salla</option>
              <option value="Dashokia">Dashokia</option>
              <option value="Elenga Pourasava">Elenga Pourasava</option>
              <option value="Narandia">Narandia</option>
              <option value="Bangra">Bangra</option>
              <option value="Kalihati Pourasava">Kalihati Pourasava</option>
              <option value="Shahadebpur">Shahadebpur</option>
              <option value="Paikora">Paikora</option>
              <option value="Balla">Balla</option>
              <option value="Kok Dahara">Kok Dahara</option>
              <option value="Bir Bashinda">Bir Bashinda</option>
              <option value="Parkhi">Parkhi</option>
              <option value="Nagbari">Nagbari</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        {filteredMembers.map(member => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card border-success">
              <div className="card-body">
                <h5 className="card-title text-center">{member.name}</h5>
                <p className="card-text"><strong>University:</strong> {member.university}</p>
                <p className="card-text"><strong>Subject:</strong> {member.subject}</p>
                <p className="card-text"><strong>Hall:</strong> {member.hall}</p>
                <p className="card-text"><strong>HSC Batch:</strong> {member.hsc_batch}</p>
                <p className="card-text"><strong>Union:</strong> {member.union_pourasava}</p>
                <p className="card-text"><strong>Blood Group:</strong> {member.blood_group}</p>

                <div className="d-flex justify-content-between mt-3">
                  <a href={`mailto:${member.email}`} className="btn btn-primary">
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a href={`tel:${member.phone}`} className="btn btn-primary">
                    <i className="fa fa-phone"></i>
                  </a>
                  <a href={member.fb_profile} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
