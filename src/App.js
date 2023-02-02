import "./App.css";
import React from "react";
import img from "./assistes/profil.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Jan Koum",
      bio: "Jan Koum is a Ukrainian-born Amerpreneur who co-founded the mobile messaging application WhatsApp with Brian Acton. The extremely popular mobile application was acquired by Facebook Inc. in 2014 for a whooping US$19 billion. A billionaire today, he is counted amongst the richest Americans but just a few years ago he was so poor that he had to live off food stamps. Born into a humble family in Ukraine, he migrated to the United States as a teenager with his mother and grandmother. His initial years in the new country were very difficult; the family struggled to make ends meet. Their situation worsened when his mother became ill with cancer and eventually passed away. A resilient soul, Jan Koum worked his way through high school, and found a job at Yahoo as an infrastructure engineer, while still attending college. He formed a rapport with Brian Acton, anothee would form a long-term collaboration in future. After working at Yahoo for several years, both Koum and Acton left the job to explore newer avenues in social media. Their love for social media ultimately ",
      imgSrc: img,
      profession:
        "Jan Koum noticed the need for a messaging app when going through his iPhone’s app store in 2009. He got in touch with a Russian mobile developer and began developing WhatsApp, which he released in May of the same year. WhatsApp was unpopular at first and had very few users, but things took a turn when Apple launched push notifications that notified users about new app notifications. The app started becoming popular and has grown to become the most prevalent messaging app globally because of its low cost and globalization, with 1.5 billion users worldwideer apprentice of Cross Marian.",
      bool: false,
      counter: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };

  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div>
            <h1 style={{ color: "green" }}>
              {" "}
              From poverty to a billionaire; Inspiring Story of WhatsApp
              Co-Founder Jan Koum{" "}
            </h1>
            <img src={img} alt="profil" width={1200} height={600} />
            <h2 style={{ color: "Crimson" }}>Jan koum's bio</h2>
            <h3 style={{ color: "blue" }}>
              This is {this.state.fullName}. {this.state.bio} .
            </h3>
            <h2 style={{ color: "Crimson" }}>Profession</h2>
            <h3 style={{ color: "blue" }}>{this.state.profession}</h3>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            {this.state.counter}
            <br />
            <br />
            <button onClick={() => this.toggle()}>Hide</button>
          </div>
        ) : (
          <button onClick={() => this.toggle()}>Show</button>
        )}
        <br />
      </div>
    );
  }
}
export default App;
