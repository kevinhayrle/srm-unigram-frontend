import React from 'react';
import Post from './pages/Post';

const TestPost = () => {
const dummyPost = {
  id: '1',
  imageUrl: 'https://i.postimg.cc/3wcbDnGc/346-CBF3-B-7-D6-F-4-B91-B54-D-3-FE2-BF46-B90-F.jpg',
  profileImageUrl: 'https://i.postimg.cc/tTLqD3Kr/594-BAABA-7-DEB-4409-84-DB-EF73-E920-F968.jpg',
  username: 'Kevin Hayrle',
  caption: 'This is a test caption for the post. This is a test caption for the post. This is a test caption for the post. This is a test caption for the post..',
  timestamp: '2 hours ago',
  initialLikes: 12,
  initialComments: [
    { username: 'Alice', text: 'Nice post!' },
    { username: 'Bob', text: 'Great picture!' }
  ]
};

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Post post={dummyPost} />
    </div>
  );
};

export default TestPost;