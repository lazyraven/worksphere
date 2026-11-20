import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'project name is required'],
        trim: true,
        minLength: [2, 'Project name contains at least 2 characters'],
        maxLength: [50, 'Project name cannot exceed 100 characters']
    },
    description: {
        type: String,
        trim: true,
        maxLength: [2000, 'Description cannot exceed 2000 characters'],
        default: ''
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    status: {
        type: String,
        enum: ['planing', 'active', 'on-hold', 'completed'],
        default: 'planning'
    }
},
    {
        timestamps: true
    }
)
// Indexes for project ownership and membership queries
projectSchema.index({owner: 1});
projectSchema.index({members: 1});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
export default Project;