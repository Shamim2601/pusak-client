import React, { useState } from 'react';
import axios from 'axios';

function AddMemberForm() {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    subject: '',
    hall: '',
    hsc_batch: '',
    union_pourasava: '',
    email: '',
    phone: '',
    fb_profile: '',
    blood_group: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://pusak-server.vercel.app/members', formData);
      alert('Member added successfully');
      setFormData({
        name: '',
        university: '',
        subject: '',
        hall: '',
        hsc_batch: '',
        union_pourasava: '',
        email: '',
        phone: '',
        fb_profile: '',
        blood_group: ''
      });
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Error adding member');
    }
  };

  return (
    <div className="container my-5">
      <h2>Member Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="university" className="form-label">University:</label>
          <input type="text" className="form-control" id="university" name="university" value={formData.university} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject:</label>
          <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="hall" className="form-label">Hall:</label>
          <input type="text" className="form-control" id="hall" name="hall" value={formData.hall} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="hsc_batch" className="form-label">HSC Batch:</label>
          <input type="number" className="form-control" id="hsc_batch" name="hsc_batch" placeholder='2018' value={formData.hsc_batch} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="union_pourasava" className="form-label">Select Union/Pourasava:</label>
          <select
            className="form-control"
            id="union_pourasava"
            name="union_pourasava"
            value={formData.union_pourasava}
            onChange={handleChange}
            required
          >
            <option value="Durgapur">1. Durgapur</option>
            <option value="Gohaliabari">2. Gohaliabari</option>
            <option value="Salla">3. Salla</option>
            <option value="Dashokia">4. Dashokia</option>
            <option value="Elenga Pourasava">Elenga Pourasava</option>
            <option value="Narandia">5. Narandia</option>
            <option value="Bangra">6. Bangra</option>
            <option value="Kalihati Pourasava">Kalihati Pourasava</option>
            <option value="Shahadebpur">7. Shahadebpur</option>
            <option value="Paikora">8. Paikora</option>
            <option value="Balla">9. Balla</option>
            <option value="Kok Dahara">10. Kok Dahara</option>
            <option value="Bir Bashinda">11. Bir Bashinda</option>
            <option value="Parkhi">12. Parkhi</option>
            <option value="Nagbari">13. Nagbari</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" placeholder='someone123@gmail.com' value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input type="tel" className="form-control" id="phone" name="phone" placeholder='01715202020' value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="fb_profile" className="form-label">Facebook Profile Link:</label>
          <input type="text" className="form-control" id="fb_profile" name="fb_profile" value={formData.fb_profile} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="blood_group" className="form-label">Select Blood Group:</label>
          <select className="form-control" id="blood_group" name="blood_group" value={formData.blood_group} onChange={handleChange} required>
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
        <button type="submit" className="btn btn-primary mb-5">Submit</button>
      </form>
    </div>
  );
}

export default AddMemberForm;
