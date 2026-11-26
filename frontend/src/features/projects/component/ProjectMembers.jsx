const ProjectMembers = ({ members } = [], ownerId ) => {

    return (
        <section className="project-members">
            <div className="project-member-header">
                <h2>Team Members</h2>
                <span>{members.length} Members</span>
            </div>

            {
                members.length === 0 ? (<p>'No team members found.'</p>) : (
                    <div className="project-members-list">
                        {members.map((member) => (
                            <div key={member._id} className="project-member">
                                <div className="memeber-avatar">
                                    {member.avatar ? (
                                        <img src={member.avatar}
                                            alt={`${member.name}'s avatar`}
                                        />
                                    ) : (
                                        <span>{member.name?.charAt(0).toUpperCase() || '?'}</span>
                                    )}
                                </div>

                                <div className="member-info">
                                    <strong>{member.name}</strong>
                                    <span>{member.email}</span>
                                </div>

                                {member._id === ownerId && <span className="member-role">Owner</span>}
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}

export default ProjectMembers;