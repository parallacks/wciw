import React, { Component }  from 'react';
import netflix from './icons/netflix.png';
import amazon from './icons/amazon.png';
import hulu from './icons/hulu.png';
import hbo from './icons/hbo.png';
import disney from './icons/disneyplus.jpg';
import fandango from './icons/fandango.png';
import google from './icons/googleplay.jpg';
import itunes from './icons/itunes.jpg';
import verizon from './icons/verizon.jpg';
import vudu from './icons/vudu.png';
import youtube from './icons/youtube.png';
import tubi from './icons/tubi.png';

const logos = {
  netflix: netflix,
  hulu: hulu,
  amazon_prime: amazon,
  amazon_buy: amazon,
  vudu: vudu,
  vudu_free: vudu,
  disney_plus: disney,
  hbo: hbo,
  google_play: google,
  youtube_purchase: youtube,
  verizon_on_demand: verizon,
  mgo: fandango,
  itunes: itunes,
  tubi_tv: tubi,
  shoutfactorytv_amazon_prime: amazon
};

class ListItem extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      poster: props.poster,
      title: props.title,
      sources: props.sources,
      netflix: "",
      netflix_vis: 'none',
      hulu: "",
      hulu_vis: 'none',
      hbo: "",
      hbo_vis: 'none',
      amazon: "",
      amazon_vis: 'none'
    };
  }

  componentWillMount() {
    this.sub_icons = this.state.sources.subscription_web_sources.map(function(src){
      //For now just give links to the four streaming services that we have
      return <a href={src.link}>
        <img src={logos[src.source]} width='32px' height='32px' style={{padding: '10px 10px 0px 10px'}} />
      </a>;
    });
    this.free_icons = this.state.sources.free_web_sources.map(function(src){
      //For now just give links to the four streaming services that we have
      return <a href={src.link}>
        <img src={logos[src.source]} width='32px' height='32px' style={{padding: '10px 10px 0px 10px'}} />
      </a>;
    });
    this.purchase_icons = this.state.sources.purchase_web_sources.map(function(src){
      //For now just give links to the four streaming services that we have
      return <a href={src.link}>
        <img src={logos[src.source]} width='32px' height='32px' style={{padding: '10px 10px 0px 10px'}} />
      </a>;
    });
  }

  render()
  {
    return (
      <div style={{
        display: 'flex',
        border: '1px solid black',
        margin: '10px 10px 10px 0px',
        padding: '5px'
      }}>
        <img src={this.state.poster} width='120vh' height='171vh' />
        <div>
          <div style={{padding: '10px', display: 'flex'}}>{this.state.title}</div>
          <div style={{padding: '10px', fontSize: '10px', display: 'flex', fontStyle: 'italic'}}>Free Web Sources</div>
          <div style={{display: 'flex'}}>{this.free_icons}</div>
          <div style={{padding: '10px', fontSize: '10px', display: 'flex', fontStyle: 'italic'}}>Subscription Web Sources</div>
          <div style={{display: 'flex'}}>{this.sub_icons}</div>
          <div style={{padding: '10px', fontSize: '10px', display: 'flex', fontStyle: 'italic'}}>Purchase Web Sources</div>
          <div style={{display: 'flex'}}>{this.purchase_icons}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;
