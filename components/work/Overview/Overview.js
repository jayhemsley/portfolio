import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderText } from 'utils/content';
import { Button, ButtonGroup } from 'components/common';
import { OverviewMeta } from './OverviewMeta/OverviewMeta';

// import styles from './Overview.module.scss';

const Overview = ({ overview, links, meta, date, className }) => (
  <section className={`Overview ${className || ''}`}>
    <div className="skip-link-destination" id="overview" />
    <div className="container">
      <div className="row">
        <div className="col-14 offset-1 col-lg-8 col-xl-9 offset-1">
          <h2 className="h3 Overview__title">Overview</h2>
          <div className="text-standard Overview__content">
            {renderText(overview)}
          </div>
          <ButtonGroup className="Overview__links">
            {links.map((link, index) => {
              const key = `work-link-${index}`;

              return (
                <Button
                  key={key}
                  link={link.link}
                  label={link.label}
                  icon={<FontAwesomeIcon icon="chevron-right" />}
                  style={link.is_primary ? 'primary' : 'secondary'}
                  className="Overview__link"
                />
              );
            })}
          </ButtonGroup>
        </div>
        <div className="col-14 offset-1 col-lg-5 col-xl-4">
          <OverviewMeta meta={meta} date={date} />
        </div>
      </div>
    </div>
  </section>
);

Overview.propTypes = {
  overview: PropTypes.arrayOf(PropTypes.shape({})),
  links: PropTypes.arrayOf(PropTypes.shape({})),
  meta: PropTypes.arrayOf(PropTypes.shape({})),
  date: PropTypes.string,
  className: PropTypes.string,
};

Overview.defaultProps = {
  overview: [],
  links: [],
  meta: {},
  date: '',
  className: '',
};

export default Overview;
