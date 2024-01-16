import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, PostCard, Button } from '../components';
import appwriteService from '../appwrite/config';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((result) => {
      if (result) {
        setPosts(result.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Explore the World of Posts
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Log in to read and discover amazing posts. If you don't have an
              account, you can{' '}
              <Link to="/signup" className="text-primary hover:underline">
                sign up here.
              </Link>
            </p>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
