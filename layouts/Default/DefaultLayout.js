import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Meta, Header, Footer } from 'components/global';

import animations from './animations';
// import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ site, content, children }) => {
  const {
    site_title: siteTitle,
    site_owner: siteOwner,
    site_repository: siteRepository,
    header_menu: headerMenu,
    social_profiles: socialProfiles,
    footer_title: footerTitle,
    footer_text: footerText,
  } = site.data;
  const {
    title,
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_image: metaImage,
  } = content.data;
  const { uid } = content;

  return (
    <motion.div
      className="DefaultLayout"
      initial="exit"
      animate="enter"
      exit="exit">
      <Meta
        siteTitle={siteTitle}
        title={metaTitle || title}
        description={metaDescription}
        image={metaImage}
      />
      <Header
        siteTitle={siteTitle}
        menu={headerMenu}
        social={socialProfiles}
        currentUid={uid}
      />
      <motion.div
        className="DefaultLayout__container"
        initial={false}
        variants={animations.DefaultLayout}>
        <main className="DefaultLayout__main">{children}</main>
        <Footer
          title={footerTitle}
          text={footerText}
          social={socialProfiles}
          owner={siteOwner}
          repository={siteRepository}
        />
      </motion.div>
    </motion.div>
  );
};

DefaultLayout.propTypes = {
  site: PropTypes.shape({
    data: PropTypes.shape({
      site_title: PropTypes.string,
      site_owner: PropTypes.string,
      site_repository: PropTypes.objectOf(PropTypes.string),
      header_menu: PropTypes.arrayOf(PropTypes.shape({})),
      social_profiles: PropTypes.arrayOf(PropTypes.shape({})),
      footer_title: PropTypes.string,
      footer_text: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  content: PropTypes.shape({
    uid: PropTypes.string,
    data: PropTypes.shape({
      title: PropTypes.arrayOf(PropTypes.shape({})),
      meta_title: PropTypes.string,
      meta_description: PropTypes.string,
      meta_image: PropTypes.shape({}),
    }),
  }),
  children: PropTypes.node.isRequired,
};

DefaultLayout.defaultProps = {
  site: {},
  content: {},
};

export default DefaultLayout;
