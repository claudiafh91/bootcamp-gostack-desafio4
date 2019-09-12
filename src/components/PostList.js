import React, { Component } from "react";

import Post from "./Post";
import logo from "../assets/perfil.jpg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: logo
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: logo
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar: logo
        },
        date: "05 Jun 2019",
        content: "Pessoal, bem-vindo do Bootcamp",
        comments: [
          {
            id: 1,
            author: {
              name: "Claudia Fernandez",
              avatar: logo
            },
            content: "Muito obrigada"
          },
          {
            id: 2,
            author: {
              name: "Julio Alcantara",
              avatar: logo
            },
            content: "Obrigado!!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Claudia Fernandez",
          avatar: logo
        },
        date: "06 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        comments: [
          {
            id: 1,
            author: {
              name: "Claudia Fernandez",
              avatar: logo
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <main>
        <ul className="postlist">
          {this.state.posts.map(elem => (
            <Post key={elem.id} post={elem} />
          ))}
        </ul>
      </main>
    );
  }
}

export default PostList;
