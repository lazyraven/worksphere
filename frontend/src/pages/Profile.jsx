import { useEffect, useState } from 'react';
import { apiRequest } from '../services/api.js'

function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await apiRequest('/profile/me')
                setProfile(response.data.user)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        }
        fetchProfile();
    }, [])

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