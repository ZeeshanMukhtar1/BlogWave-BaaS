import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    appwriteService.getPosts([]).then((result) => {
      if (result) {
        setPosts(result.documents);
      }
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
      className="w-full py-8"
    >
      <Container>
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16">
            <h1 className="mb-4 text-4xl font-bold text-center">
              404 - No Posts Found
            </h1>
            <p className="mb-8 text-lg text-white">
              It seems there are no posts available. Users might not have posted
              anything yet.
            </p>
            {/* You can add additional content or links here */}
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="w-1/4 p-2">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
