import React, { Component }  from 'react';
import ListItem from './ListItem.js';

class SearchResults extends Component
{
  constructor() {
    super();
    this.textChanged = this.textChanged.bind(this)
    this.searchRequest = this.searchRequest.bind(this)
    this.optionChanged = this.optionChanged.bind(this)
    this.signupClicked = this.signupClicked.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
    this.preferencesClicked = this.preferencesClicked.bind(this)
    this.homeClicked = this.homeClicked.bind(this)
    this.state = {
      query: "",
      movieData: [],
      initialSearch: true,
      selectedOption: 'exact',
      login: false,
      signup: false,
      preferences: false,
      netflix: true,
      hulu: true,
      prime: true,
      hbo: true,
      vudu: true,
      disney: true,
      google: true,
      youtube: true,
      verizon: true,
      itunes: true,
      tubi: true,
      fandango: true
    };
  }

  textChanged(e) {
    this.setState({
      query: e.target.value
    });
  }

  searchRequest(e) {
    console.log(this.state.query);
    if (this.state.initialSearch) {
      this.setState({
        initialSearch: false
      });
    }
    //Here make a request to the server
    const url = 'http://10.37.253.172:3000/api/search/movie/' + this.state.query + "?precision=" + this.state.selectedOption;
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({movieData: []})
      this.setState({movieData: data});
    })
  }

  optionChanged(e) {
    this.setState({
      selectedOption: e.target.value
    })
  }

  signupClicked(e) {
    this.setState({
      signup: true,
      login: false,
      preferences: false
    })
  }

  loginClicked(e) {
    this.setState({
      signup: false,
      login: true,
      preferences: false
    })
  }

  preferencesClicked(e) {
    this.setState({
      signup: false,
      login: false,
      preferences: true
    })
  }

  homeClicked(e) {
    this.setState({
      signup: false,
      login: false,
      preferences: false
    })
  }

  login(e) {
    //Here try and login the person with the credentials
    this.setState({
      signup: false,
      login: false,
      preferences: false
    });
  }

  signup(e) {
    //Here save the user info to the database
    this.setState({
      signup: false,
      login: false,
      preferences: false
    });
  }

  preferencesSaved(e) {
    //Here save the preferences to the database
    this.setState({
      signup: false,
      login: false,
      preferences: false
    });
  }


  render()
  {
    if (this.state.login) {
      return (
        <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Name</label>
            <input type="text" placeholder="Name" style={{margin: "3vh", height: "4vh"}}/>
            <label>Password</label>
            <input type="text" placeholder="Password" style={{margin: "3vh", height: "4vh"}}/>
            <input type="submit" value="Login" style={{marginLeft: "45vh", marginRight: "45vh", marginTop: "5vh"}} />
          </div>
        </div>
      );
    }
    else if (this.state.signup) {
      return (
        <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Name</label>
            <input type="text" placeholder="Name" style={{margin: "3vh", height: "4vh"}}/>
            <label>Email</label>
            <input type="text" placeholder="Email" style={{margin: "3vh", height: "4vh"}}/>
            <label>Password</label>
            <input type="text" placeholder="Password" style={{margin: "3vh", height: "4vh"}}/>
            <input type="submit" value="Sign Up" style={{marginLeft: "45vh", marginRight: "45vh", marginTop: "5vh"}} />
          </div>
        </div>
      );
    }
    else if (this.state.preferences) {
      return (
        <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div style={{display: "flex", flexDirection: "column",
            position: 'absolute', left: '25%', top: '30%',
            width: '50%'
          }}>
            <label>Services</label>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.netflix} onChange={(e) => this.setState({netflix: e.target.checked})} style={{margin: "3vh"}}/>Netflix</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.hulu} onChange={(e) => this.setState({hulu: e.target.checked})} style={{margin: "3vh"}}/>Hulu</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.prime} onChange={(e) => this.setState({prime: e.target.checked})} style={{margin: "3vh"}}/>Amazon Prime</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.hbo} onChange={(e) => this.setState({hbo: e.target.checked})} style={{margin: "3vh"}}/>HBO</label>
            </div>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.vudu} onChange={(e) => this.setState({vudu: e.target.checked})} style={{margin: "3vh"}}/>Vudu</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.disney} onChange={(e) => this.setState({disney: e.target.checked})} style={{margin: "3vh"}}/>Disney Plus</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.google} onChange={(e) => this.setState({google: e.target.checked})} style={{margin: "3vh"}}/>Google Play</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.youtube} onChange={(e) => this.setState({youtube: e.target.checked})} style={{margin: "3vh"}}/>Youtube</label>
            </div>
            <div style={{display: "flex"}}>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.verizon} onChange={(e) => this.setState({verizon: e.target.checked})} style={{margin: "3vh"}}/>Verizon On Demand</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.itunes} onChange={(e) => this.setState({itunes: e.target.checked})} style={{margin: "3vh"}}/>Itunes</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.tubi} onChange={(e) => this.setState({tubi: e.target.checked})} style={{margin: "3vh"}}/>Tubi TV</label>
              <label style={{width: "25vh"}}><input type="checkbox" defaultChecked={this.state.fandango} onChange={(e) => this.setState({fandango: e.target.checked})} style={{margin: "3vh"}}/>Fandango</label>
            </div>
            <input type="submit" value="Save" style={{marginLeft: "45vh", marginRight: "45vh", marginTop: "5vh"}} />
          </div>
        </div>
      );
    }
    else if (this.state.initialSearch) {
      this.movies = this.state.movieData.map(function(movie){
        //For now just give links to the four streaming services that we have
        return <ListItem poster={movie.poster_small} title={movie.title} sources={movie} />;
      });
      return (
        <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div className="main" style={{
            position: 'absolute', left: '25%', top: '50%',
            width: '50%'
          }}>
            <div>Where Can I Watch?</div>
            <form style={{fontSize: '10px', display: 'flex'}}>
              <div className="radio">
                <label>
                  <input type="radio" value="exact" checked={this.state.selectedOption === 'exact'} onChange={this.optionChanged} />
                  Exact Search
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="fuzzy" checked={this.state.selectedOption === 'fuzzy'} onChange={this.optionChanged} />
                  Smart Search
                </label>
              </div>
            </form>
            <div style={{display: 'flex'}}>
              <input type="text" placeholder="Search..." onChange={this.textChanged} style={{
                width: '100%',
                height: '5vh'
              }} />
              <input type="submit" value="Search" onClick={this.searchRequest} />
            </div>
          </div>
        </div>
      );
    } else if (!this.state.initialSearch) {
      this.movies = this.state.movieData.map(function(movie){
        //For now just give links to the four streaming services that we have
        return <ListItem poster={movie.poster_small} title={movie.title} sources={movie} />;
      });
      return (
        <div>
          <div style={{color: "white", float: "left", padding: "2vh"}}>
            <label onClick={this.homeClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>WCIW</label>
          </div>
          <div style={{color: "white", float: "right", padding: "2vh"}}>
            <label onClick={this.preferencesClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Preferences</label>
            <label onClick={this.loginClicked} style={{padding: "3vh", color: "white", textDecoration: "none"}}>Login</label>
            <input onClick={this.signupClicked} type="submit" value="Sign Up" />
          </div>
          <div className="main" style={{
            position: 'absolute', left: '25%', top: '5%',
            width: '50%'
          }}>
            <div>Where Can I Watch?</div>
            <form style={{fontSize: '10px', display: 'flex'}}>
              <div className="radio">
                <label>
                  <input type="radio" value="exact" checked={this.state.selectedOption === 'exact'} onChange={this.optionChanged} />
                  Exact Search
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="fuzzy" checked={this.state.selectedOption === 'fuzzy'} onChange={this.optionChanged} />
                  Smart Search
                </label>
              </div>
            </form>
            <div style={{display: 'flex'}}>
              <input type="text" placeholder="Search..." onChange={this.textChanged} style={{
                width: '100%',
                height: '5vh'
              }} />
              <input type="submit" value='Search' onClick={this.searchRequest} />
            </div>
            <div style={{height: '500px', overflowY: 'scroll'}}>
              {this.movies}
            </div>
          </div>
        </div>
      );
    }
    else {
    }
  }
}

export default SearchResults;
