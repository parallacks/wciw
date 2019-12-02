import React from 'react';
import AdSense from 'react-adsense';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
	 <AdSense.Google
	  client='ca-pub-7292810486004926'
	  slot='7806394673'
	 />
    );
  }
}
