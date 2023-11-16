// import React, { Component } from 'react';
// import compountWillMount from 'react';


// class ContentContainer extends Component {
//   state = {
//     content: null,
//     error: null
//   }
// }

// componentWillMount() {
//   window.fetch(`${process.env.PUBLIC_URL}/content/content.json`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`${response.status} ${response.statusText}`)
//     }

//     return response
//   })
//   .then(response => response.json())
//   .then(content => this.setState({ content }))
//   .catch(error => this.setState({ error }))
// }

// render () {
//   const { error, content } = this.state

//   return error ? <p>An error occurred: {error.message}</p>


type HomeContent = {
  title: string;
  imageUrl: string;
  mission: string;
  description: string;
}

const getHomeContent = async (): Promise<HomeContent> =>  {

  // const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const url = "https://raw.githubusercontent.com/avashist1998/medChronicle/main/public/content/home.json";

  const res = await window.fetch(url);
  if (!res.ok) {
      console.log("Error loading home content");
      console.log(res);
      throw new Error(`${res.status} ${res.statusText}`)
    }
    return res.json().then(res => {
      return res as HomeContent;
    });
}

export type {HomeContent};
export { getHomeContent};
