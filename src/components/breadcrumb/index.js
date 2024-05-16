import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ subTitle, title, desc, bg }) {
    const style = {
        backgroundImage: `url(${bg || '/images/hero/contact.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '460px',
        display: 'flex',
        alignItems: 'center',
    };
    return (
        <div style={style}>
            <Container>
                <div className="page_content">
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className="page_title">{title}</h1>
                    <p className="page_desc">{desc}</p>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    bg: PropTypes.string,
};

export default Breadcrumb;
