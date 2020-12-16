import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

.App {
  background: #09090a;
  padding: 30px 15px;
}

.post-list {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}

.post-list > article {
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
}

.post-list > article > p {
  line-height: 24px;
  background-image: repeating-linear-gradient(155.34deg,
    #ff018e -0.59%,
    #ffa17b 51.28%,
    #ffcd1e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.post-list > article + article {
  margin-top: 30px;
}

.comment-list {
  border-top: 1px solid #f5f5f5;
  padding-top: 20px;
  margin-top: 20px;
}

.comment-list > strong {
  color: #666;
  text-transform: uppercase;
  font-size: 12px;
}

.comment-list ul {
  list-style: none;
  padding: 0;
  font-size: 12px;
}

.comment-list ul li {
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 8px;
}

.comment-list ul li + li {
  margin-top: 10px;
}

form {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  background: #fff;
  border: 1px solid #fff;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

form input,
form textarea {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

form textarea {
  min-height: 120px;
  resize: vertical;
}

form button {
  margin-top: 5px;
  background: #737380;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
}
`;
