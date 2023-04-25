import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="125" r="125" />
    <rect x="0" y="266" rx="10" ry="10" width="280" height="28" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="89" />
    <rect x="0" y="427" rx="10" ry="10" width="91" height="27" />
    <rect x="127" y="420" rx="20" ry="20" width="152" height="46" />
  </ContentLoader>
);
