import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "../styles/style.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url_one: "",
      url_two: "",
      showFirstScreen: false,
      showSecondScreen: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  search__one = () => {
    this.setState({
      showFirstScreen: true,
    });
  };

  search__two = () => {
    this.setState({
      showSecondScreen: true,
    });
  };

  iframeOne = () => {
    const url = this.state.url_one;
    let height = "900px";
    let width = "900px";
    const iframe = `<iframe src=${url}  height=${height} width=${width}/>`;
    return {
      __html: iframe,
    };
  };

  iframeTwo = () => {
    const url = this.state.url_two;
    let height = "900px";
    let width = "900px";
    const iframe = `<iframe src=${url}  height=${height} width=${width}/>`;
    return {
      __html: iframe,
    };
  };

  logout = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Udayy</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              placeholder="Search First view"
              name="url_one"
              onChange={this.handleChange}
            />
            <i
              class="fa fa-search"
              aria-hidden="true"
              onClick={this.search__one}
            ></i>
          </form>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              placeholder="Search Second view"
              name="url_two"
              onChange={this.handleChange}
            />
            <i
              class="fa fa-search"
              aria-hidden="true"
              onClick={this.search__two}
            ></i>
          </form>
          <Button
            type="submit"
            className="header__logout"
            onClick={this.logout}
          >
            Logout
          </Button>
        </nav>
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <div className="left-side">
              {this.state.showFirstScreen ? (
                <div dangerouslySetInnerHTML={this.iframeOne()}></div>
              ) : (
                <div className="message">
                  <p>NO URL FOUND</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 no-gutters">
            <div className="right-side">
              {this.state.showSecondScreen ? (
                <div dangerouslySetInnerHTML={this.iframeTwo()}></div>
              ) : (
                <div className="message">
                  <p>NO URL FOUND</p>
                </div>
              )}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
