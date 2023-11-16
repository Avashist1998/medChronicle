import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import BasicNavBar from "./components/BasicNavBar";
import SignUpForm from "./components/SignUpForm";

import Content from "./views/Content";

import "./App.css";
import { HomeContent, getHomeContent } from "./api/Content";

function App() {

  const [pageState, setPageState] = useState<string>("Loading");

  const [signUp, setSignUp] = useState<boolean>(false);
  const [homeContent, setHomeContent] = useState<HomeContent>(
    {
      title: "",
      imageUrl: "",
      mission: "",
      description: ""
    }
  );
  const hideSignUp = () => {
    setSignUp(false);
  }
  const joinUs = () => {
    setSignUp(true);
  }

  useEffect(() => {
    getHomeContent().then((content) => {
      setHomeContent(content);
      setPageState("Loaded");
    }).catch((err) => {
      console.error("Error loading home content");
      console.error(err);
      setPageState("Error");
    })
  }, [])


    if (pageState === "Loading") {
      return (
      <h1>Loading ...</h1>);
    } else if (pageState === "Loaded") {
      return (
      <div>
        <div className={signUp ? "pointer-events-none opacity-50" : "opacity-100"}>
          <BasicNavBar joinUs={joinUs}/>
          <Content joinUs={joinUs} content={homeContent}/>
          <Footer/>
        </div>
        <div>
          { signUp &&
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-slate-300 p-2 rounded-xl shadow-lg w-[60%]">
              <SignUpForm onHide={hideSignUp} /> 
            </div>
          </div>
          }
        </div>
      </div>
      );
    } else {
      return (<h1>404 Error</h1>);
    }
}

export default App;
