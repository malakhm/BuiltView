import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import ProjectSidebar from '../project-sidebar';
import ProjectContent from './project-content';
import ProjectSliderTwo from '../project-slider-2';

function ProjectDetail({
    project,
    projects,
    richTexts,
    projectsOverview,
    projectsSidebar,
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ProjectContent
                        project={project}
                        projects={projects}
                        richTexts={richTexts}
                        projectsOverview={projectsOverview}
                    />
                    <ProjectSidebar
                        clientName={project.clientName}
                        location={project.location}
                        area={project.Area}
                        budget={project.Budget}
                        architect={project.Architect}
                        druration={project.Duration}
                        projectsSidebar={projectsSidebar}
                    />
                </Row>
                <ProjectSliderTwo projects={project} />
            </Container>
        </div>
    );
}

ProjectDetail.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetail;
