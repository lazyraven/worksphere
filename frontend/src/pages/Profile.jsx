import { useEffect, useState } from 'react';
import { apiRequest } from '../services/api.js'
import  FormField  from '../components/forms/FormField.jsx'

function Profile() {
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        avatar: ''
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await apiRequest('/profile/me')
                const user = response.data.user;
                setProfile(user)

                setFormData({
                    name: user.name || '',
                    avatar: user.avatar
                })
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        }
        fetchProfile();
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    if (loading) {
        return <p>Profile loading....</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!profile) {
        return <p>Profile not found.</p>
    }
    return (
        <div className="profile-page">
            <h1>My Profile</h1>
            <p>Manage your personal information.</p>

            <form className="profile-form">
                <FormField
                    id="profile-name"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                ></FormField>

                <FormField
                    id="profile-email"
                    name="email"
                    label="Email"
                    type="email"
                    value={profile.email}
                    disabled
                ></FormField>

                <FormField
                    id="profile-role"
                    name="role"
                    label="Role"
                    value={profile.role}
                    disabled
                ></FormField>

                <FormField
                    id="profile-avatar"
                    name="avatar"
                    label="Avatar URL"
                    value={formData.avatar}
                    onChange={handleChange}
                    placeholder="Enter avatar URL"
                ></FormField>

                <button type='button'>Save Changes</button>
            </form>

            <div className="profile-card">
                <h2>{profile.name}</h2>
                <p>Email: {profile.email}</p>
                <p>Role: {profile.role}</p>
                {profile.avatar && (
                    <img src={profile.avatar} alt="Profile" width="100" />
                )
                }

            </div>
        </div>
    )
}

export default Profile;