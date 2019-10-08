import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// ("https://www.metaweather.com/api/location/44418/");

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
        </p>
        <input
          type="text"
          value={this.props.data.name}
          onChange={event =>
            this.props.setStateFunction("name", event.target.value)
          }
        />
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction()}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    var seat;
    if (seat === "12E") {
      var destPage = SeatPage;
    } else {
      destPage = OtherSeatPage;
    }
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
          <br />
        </p>
        <select
          onChange={event =>
            this.props.setStateFunction("seat", event.target.value)
          }
        >
          <option value="12E">12E</option>
          <option value="97A">97A</option>
        </select>
        <button onClick={() => this.props.goFunction(destPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class SeatPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You walk to {this.props.data.seat} and take a seat. It's comfortable,
          but lacking in legroom thanks to your facing passenger.
        </p>
        <button onClick={() => this.props.goFunction(CryPage)}>Cry</button>
        <button onClick={() => this.props.goFunction(WindowPage)}>
          Stare out the window
        </button>
      </div>
    );
  }
}

class OtherSeatPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You walk to {this.props.data.seat} and take a seat. It's comfortable,
          and no one is seated across from you, so you put your feet up.
        </p>
        <button onClick={() => this.props.goFunction(DreamPage)}>
          Fall asleep
        </button>
      </div>
    );
  }
}

class DreamPage extends Component {
  render() {
    return (
      <div className="page">
        <p />
        <button onClick={() => this.props.goFunction(CryPage)}>Cry</button>
        <button onClick={() => this.props.goFunction(WindowPage)}>
          Stare out the window
        </button>
      </div>
    );
  }
}

class CryPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You shed warms tears, and your shoulders bounce with each sob. The
          giant frog sitting in front of you is oblivious.
        </p>
        <button onClick={() => this.props.goFunction(FrogPage)}>Stop</button>
        <button onClick={() => this.props.goFunction(CryPage)}>Continue</button>
      </div>
    );
  }
}

class FrogPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You stop crying and stare at the gargantuan frog seated in opposite
          yourself. It's wide, flat mouth looks like a table supporting its
          baseball-sized eyeballs, each more vacant than the other.
        </p>
        <button onClick={() => this.props.goFunction(TalkPage)}>Talk</button>
        <button onClick={() => this.props.goFunction(WindowPage)}>
          Stare out the window
        </button>
      </div>
    );
  }
}

class WindowPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You try to keep your eyes on the horizon as the trees start to whip
          by, but the enormous eyes of the frog seated across from you are
          reflected in the glass and your head keeps turning to inspect its
          mottled and filmy skin.
        </p>
        <button onClick={() => this.props.goFunction(TalkPage)}>Talk</button>
      </div>
    );
  }
}

class TalkPage extends Component {
  render() {
    return (
      <div className="page">
        <p>"Good evening my friend. What is your final destination?"</p>
        <br />
        <p>"..."</p>
        <p>"Do you have a name sir?"</p>
        <br />
        <p>"... Frog. Big Frog actually."</p>
        <button onClick={() => this.props.goFunction()}>
          "Big Frog? Any relation to the renowned inventor, Big Toad?"
        </button>
        <button onClick={() => this.props.goFunction()}>
          "Ah, Big Frog then."
        </button>
      </div>
    );
  }
}

// I hope I'm not bothering you with my conversation. I've a reputation as a bit of a chatty-kathy. Anyway, I find it helps these evening train rides pass much quicker.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
