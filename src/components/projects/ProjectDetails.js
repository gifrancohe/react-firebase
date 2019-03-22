import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum doloribus harum assumenda, molestias suscipit obcaecati consectetur unde alias, quas sint quasi molestiae excepturi? Dolorum nemo consectetur numquam, unde quos repellat.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by Gio's team</div>
                <div>22nd Friday, 14:45 PM</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
